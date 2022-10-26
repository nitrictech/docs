---
title: Building your first API with Nitric
description: Use the Nitric framework to easily build and deploy REST APIs for AWS, Azure or GCP
---

## What we'll be doing

1. Use Nitric to create an API to create and update profiles
2. Create handlers for the following API operations

| **Method** | **Route**      | **Description**                  |
| ---------- | -------------- | -------------------------------- |
| `GET`      | /profiles/{id} | Get a specific profile by its Id |
| `GET`      | /profiles      | List all profiles                |
| `POST`     | /profiles      | Create a new profile             |
| `DELETE`   | /profiles/{id} | Delete a profile                 |
| `PUT`      | /profiles/{id} | Update a profile                 |

3. Run locally for testing
4. Deploy to a cloud of your choice
5. (Optional) Add handlers for the following API operations

| **Method** | **Route**                    | **Description**                  |
| ---------- | ---------------------------- | -------------------------------- |
| `GET`      | /profiles/{id}/image/upload  | Get a profile image upload URL   |
| `GET`      | profiles/{id}/image/download | Get a profile image download URL |

## Prerequisites

- [GO](https://go.dev/doc/install)
- The [Nitric CLI](https://nitric.io/docs/installation)
- An [AWS](https://aws.amazon.com), [GCP](https://cloud.google.com) or [Azure](https://azure.microsoft.com) account (_your choice_)

## Getting started

We’ll start by creating a new project for our API.

```bash
nitric new
```

Create a project name, select the TypeScript template and choose the default glob handler.

```bash
? What is the name of the stack? my-profile-api
? Choose a template: official/Golang - Starter
? Glob for the function handlers? functions/*/*.go
```

Next, open the project in your editor of choice.

```bash
> cd my-profile-api
```

Make sure all dependencies are downloaded.

```bash
go mod tidy
```

The scaffolded project should have the following structure:

```text
+--functions/
|  +-- hello/
|      +-- main.go
+--go.mod
|  go.sum
+--nitric.yaml
+--README.md
```

You can test the project locally with the following commands.

```bash
nitric start
```

```bash
go run ./functions/hello
```

> Since we won't use the example function you can now delete the `functions/hello` directory.

## Coding our Profile API

Let's start by initializing our profiles api, create a file named './functions/profiles/main.go' and add the following code.

```go
type profile struct {
	ID       *string `json:"id,omitempty" mapstructure:"id,omitempty"`
	Name     *string `json:"name,omitempty" mapstructure:"name,omitempty"`
	Age      *string `json:"age,omitempty" mapstructure:"age,omitempty"`
	HomeTown *string `json:"homeTown,omitempty" mapstructure:"homeTown,omitempty"`
}

func main() {
	profileApi, err := resources.NewApi("public")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	profiles, err := resources.NewCollection("profiles", resources.CollectionEverything...)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println("running API")
	if err := resources.Run(); err != nil {
		fmt.Println(err)
	}
}
```

Here we are defining the following -

- an API named public,
- a collection named profiles with reading/writing permissions

### Create profile with a post method

After creating the collection.
```go
	profileApi.Post("/profiles", func(hc *faas.HttpContext, hh faas.HttpHandler) (*faas.HttpContext, error) {
		p := &profile{}
		err := json.Unmarshal(hc.Request.Data(), p)
		if err != nil {
			hc.Response.Body = []byte("error unmarshaling data")
			hc.Response.Status = http.StatusBadRequest

			return hh(hc)
		}

		p.ID = uuid.NewString()
		store := map[string]any{}

		if err = mapstructure.Decode(p, &store); err != nil {
			hc.Response.Body = []byte("error encoding profile")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		if err = profiles.Doc(p.ID).Set(store); err != nil {
			hc.Response.Body = []byte("error saving profile")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		return hh(hc)
	})
```

### Retrieve profile with a get method

```go
	profileApi.Get("/profiles/:id", func(hc *faas.HttpContext, hh faas.HttpHandler) (*faas.HttpContext, error) {
		params := hc.Request.PathParams()

		if params == nil || len(params["id"]) == 0 {
			hc.Response.Body = []byte("error retrieving path params")
			hc.Response.Status = http.StatusBadRequest

			return hh(hc)
		}

		store, err := profiles.Doc(params["id"]).Get()
		if err != nil {
			hc.Response.Status = http.StatusNotFound

			return hh(hc)
		}

		p := &profile{}

		if err = store.Decode(p); err != nil {
			hc.Response.Body = []byte("error decoding profile")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		b, err := json.Marshal(p)
		if err != nil {
			hc.Response.Body = []byte("error marshalling profile")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		hc.Response.Body = b
		hc.Response.Status = http.StatusOK

		return hh(hc)
	})
```

### Retrieve all profiles with a get method

```go
	profileApi.Get("/profiles", func(hc *faas.HttpContext, hh faas.HttpHandler) (*faas.HttpContext, error) {
		all, err := profiles.Query().Fetch()
		if err != nil {
			hc.Response.Status = http.StatusNotFound

			return hh(hc)
		}

		docs := make([]map[string]interface{}, 0)

		for _, doc := range all.Documents {
			docs = append(docs, doc.Content())
		}

		b, err := json.Marshal(docs)
		if err != nil {
			hc.Response.Body = []byte("error marshalling profiles")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		hc.Response.Body = b
		hc.Response.Status = http.StatusOK

		return hh(hc)
	})
```

### Remove profile with a delete method

```go
	profileApi.Delete("/profiles/:id", func(hc *faas.HttpContext, hh faas.HttpHandler) (*faas.HttpContext, error) {
		params := hc.Request.PathParams()

		if params == nil || len(params["id"]) == 0 {
			hc.Response.Body = []byte("error retrieving path params")
			hc.Response.Status = http.StatusBadRequest

			return hh(hc)
		}

		id := params["id"]
		err := profiles.Doc(id).Delete()
		if err != nil {
			hc.Response.Body = []byte("error deleting object")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		hc.Response.Status = http.StatusNoContent

		return hh(hc)
	})
```

### Update profile with a put method

```go
	profileApi.Put("/profiles/:id", func(hc *faas.HttpContext, hh faas.HttpHandler) (*faas.HttpContext, error) {
		params := hc.Request.PathParams()

		if params == nil || len(params["id"]) == 0 {
			hc.Response.Body = []byte("error retrieving path params")
			hc.Response.Status = http.StatusBadRequest

			return hh(hc)
		}

		id := params["id"]

		existing, err := profiles.Doc(id).Get()
		if err != nil {
			hc.Response.Body = []byte("Error retrieving document " + id)
			hc.Response.Status = http.StatusNotFound

			return hh(hc)
		}

		p := &profile{}

		if err := json.Unmarshal(hc.Request.Data(), p); err != nil {
			hc.Response.Body = []byte("error decoding json body")
			hc.Response.Status = http.StatusBadRequest

			return hh(hc)
		}

		p.ID = &id                 // make sure this stays the same
		pMap := existing.Content() // mapstructure.Decode() will merge in the new values

		if err := mapstructure.Decode(p, &pMap); err != nil {
			hc.Response.Body = []byte("error decoding profile document")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		if err := profiles.Doc(id).Set(pMap); err != nil {
			hc.Response.Body = []byte("error saving the profile document")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		hc.Response.Body = []byte(fmt.Sprintf("Updated store with ID: %s", id))
		hc.Response.Status = http.StatusOK

		return hh(hc)
	})
```

Nitric will automatically infer the required specification and permissions to create an API Gateway - [Learn more](/docs/concepts).

## Run it!

Now that you have an API defined with handlers for each of its methods, it's time to test it out locally.

Test out your application with the local run commands:

```bash
nitric start
```

```bash
go run ./functions/profile
```

Once it starts, the application will receive requests via the API port. You can use cURL, Postman or any other HTTP client to test the API.

We will keep it running for our tests.

## Test your API

Update all values in {} and change the URL to your deployed URL if you're testing on the cloud.

### Create Profile

```bash
curl --location --request POST 'http://localhost:9001/apis/public/profiles' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "name": "Peter Parker",
    "age": "21",
    "homeTown" : "Queens"
}'
```

### Fetch Profile

```bash
curl --location --request GET 'http://localhost:9001/apis/public/profiles/{id}'
```

### Fetch All Profiles

```bash
curl --location --request GET 'http://localhost:9001/apis/public/profiles'
```

### Update Profile

```bash
curl --location --request PUT 'http://localhost:9001/apis/public/profiles/{id}' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "name": "Ben Reily",
    "homeTown" : "Las Vegas"
}'
```

### Delete Profile

```bash
curl --location --request DELETE 'http://localhost:9001/apis/public/profiles/{id}'
```

## Deploy to the cloud

Setup your credentials and any other cloud specific configuration:

- [AWS](/docs/reference/aws)
- [Azure](/docs/reference/azure)
- [GCP](/docs/reference/gcp)

Create a stack - a collection of resources identified in your project which will be deployed.

```bash
nitric stack new
```

```
? What do you want to call your new stack? dev
? Which Cloud do you wish to deploy to? aws
? select the region us-east-1
```

### AWS

> Note: You are responsible for staying within the limits of the free tier or any costs associated with deployment.

We called our stack dev, lets try deploying it with the `up` command

```bash
nitric up
┌───────────────────────────────────────────────────────────────┐
| API  | Endpoint                                               |
| main | https://XXXXXXXX.execute-api.us-east-1.amazonaws.com   |
└───────────────────────────────────────────────────────────────┘
```

When the deployment is complete, go to the relevant cloud console and you'll be able to see and interact with your API.

To undeploy run the following command:

```bash
nitric down
```

## Optional - Add profile image upload/download support

### Access profile buckets with permissions

Define a bucket named profilesImg with reading/writing permissions

```go
	profilesImg, err := resources.NewBucket("profiles.image", resources.BucketReading, resources.BucketWriting)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
```

### Get Signed URL to Upload Profile Image

```go
	profileApi.Get("/profiles/:id/image/upload", func(hc *faas.HttpContext, hh faas.HttpHandler) (*faas.HttpContext, error) {
		params := hc.Request.PathParams()

		if params == nil || len(params["id"]) == 0 {
			hc.Response.Body = []byte("error retrieving path params")
			hc.Response.Status = http.StatusBadRequest

			return hh(hc)
		}

		_, err := profiles.Doc(params["id"]).Get()
		if err != nil {
			hc.Response.Body = []byte("profile does not exist")
			hc.Response.Status = http.StatusNotFound

			return hh(hc)
		}

		surl, err := profilesImg.File(fmt.Sprintf("images/%s/photo.png", params["id"])).SignUrl(storage.PresignUrlOptions{
			Mode:   storage.ModeWrite,
			Expiry: int(5 * time.Minute.Seconds())})
		if err != nil {
			hc.Response.Body = []byte("could not generate signedURL: " + err.Error())
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		hc.Response.Body = []byte(surl)
		hc.Response.Status = http.StatusOK

		return hh(hc)
	})
```

### Get Signed URL to Download Profile Image

```go
	profileApi.Get("/profiles/:id/image/download", func(hc *faas.HttpContext, hh faas.HttpHandler) (*faas.HttpContext, error) {
		params := hc.Request.PathParams()

		if params == nil || len(params["id"]) == 0 {
			hc.Response.Body = []byte("error retrieving path params")
			hc.Response.Status = http.StatusBadRequest

			return hh(hc)
		}

		_, err := profiles.Doc(params["id"]).Get()
		if err != nil {
			hc.Response.Body = []byte("profile does not exist")
			hc.Response.Status = http.StatusNotFound

			return hh(hc)
		}

		surl, err := profilesImg.File(fmt.Sprintf("images/%s/photo.png", params["id"])).SignUrl(storage.PresignUrlOptions{
			Mode:   storage.ModeRead,
			Expiry: int(5 * time.Minute.Seconds())})
		if err != nil {
			hc.Response.Body = []byte("could generate signedURL")
			hc.Response.Status = http.StatusInternalServerError

			return hh(hc)
		}

		hc.Response.Body = []byte(surl)
		hc.Response.Status = http.StatusOK

		return hh(hc)
	})
```

## Test your API

Update all values in {} and change the URL to your deployed URL if you're testing on the cloud.

### Get upload image URL

```bash
curl --location --request GET 'http://localhost:9001/apis/public/profiles/{id}/image/upload'
```

### Using the upload URL with curl

```bash
curl --location --request PUT '{url}' \
--header 'content-type: image/png' \
--data-binary '@/home/user/Pictures/photo.png'

```

### Get download image URL

```bash
curl --location --request GET 'http://localhost:9001/apis/public/profiles/{id}/image/download'
```

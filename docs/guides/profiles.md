## What we'll do

1. Use Nitric to create an API to create and update profiles
2. Create handlers for the following API operations

| **Method** | **Route**              | **Description**                  |
| ---------- | ---------------------- | -------------------------------- |
| `GET`      | /profiles/{$profileId} | Get a specific profile by its Id |
| `GET`      | /profiles              | List all profiles                |
| `POST`     | /profiles              | Create a new profile             |
| `DELETE`   | /profiles/{$profileId} | Delete a profile                 |
| `PUT`      | /profiles/{$profileId} | Update a profile                 |

3. Running locally for testing
4. Deploy to a cloud of your choice
5. (Optional) Add handlers for the following API operations

| **Method** | **Route**                    | **Description**                  |
| ---------- | ---------------------------- | -------------------------------- |
| `GET`      | /profiles/{id}/image/upload  | Get a profile image upload URL   |
| `GET`      | profiles/{id}/image/download | Get a profile image download URL |

## Getting started

This tutorial assumes you have the Nitric CLI installed, if not you can follow the [installation guide](/docs/installation).

We’ll start by creating a new project for our API.

```bash
nitric new
```

Create a project name and select the TypeScript template.

```text
? What is the name of the stack? my-profile-api
? Choose a template: official/TypeScript - Starter
```

Next, open the project in your editor of choice.

```bash
> cd my-profile-api
```

Make sure all dependencies are resolved with yarn or npm.

```bash
yarn install
```

The scaffolded project should have the following structure:

```text
+--functions/
|  +-- hello.ts
+--node_modules/
|  ...
+--package.json
+--README.md
```

You can test the project scaffold with the `run` command.

```bash
nitric run
```

> The first time you run a project or function it will take a moment longer to start while Docker image layers are downloaded and cached on your machine.

```bash
SUCCESS  Configuration gathered (3s)
SUCCESS  Created Dev Image! (1s)
SUCCESS  Started Local Services! (2s)
SUCCESS  Started Functions!(0s)

Local running, use ctrl-C to stop

Api  | Endpoint
main | http://localhost:9001/apis/main
```

The template project is successfully scaffolded.

## Coding our Profile API

Let's start by initializing our profiles api, create a file named 'profiles.ts' within functions and add the following code.

Here we are defining the following -

- an API named public,
- a collection named profiles with reading/writing permissions

```typescript
import { api, collection } from '@nitric/sdk';

// Create a secure api
const profileApi = api('public');

// Access profile collection with permissions
const profiles = collection('profiles').for('writing', 'reading');
```

### Add uuidv4 to your project

```bash
> yarn add uuidv4
```

### Import uuid at the top of our code, so that we can create profiles against an ID.

```typescript
import { uuid } from 'uuidv4';
```

### Define our profile contents

```typescript
interface Profile {
  name: string;
  age: string;
  homeTown: string;
}
```

### Create profile with a post method

```typescript
profileApi.post('/profiles', async (ctx) => {
  let id = uuid();
  const profile: Profile = {
    name: ctx.req.json().name,
    age: ctx.req.json().age,
    homeTown: ctx.req.json().homeTown,
  };

  // Create the new profile
  await profiles.doc(id).set(profile);

  // Return the id
  ctx.res.json({
    msg: `Profile with id ${id} created.`,
  });
});
```

### Retrieve profile with a get method

```typescript
profileApi.get('/profiles/:id', async (ctx) => {
  const id = ctx.req.params['id'];

  // Return the profile
  try {
    const profile = await profiles.doc(id).get();
    return ctx.res.json(profile);
  } catch (error) {
    ctx.res.status = 404;
    ctx.res.json({
      msg: `Profile with id ${id} not found.`,
    });
  }
});
```

### Retrieve all profiles with a get method

```typescript
profileApi.get('/profiles', async (ctx) => {
  // Return all profiles
  return ctx.res.json({
    output: await profiles.query().fetch(),
  });
});
```

### Remove profile with a delete method

```typescript
profileApi.delete('/profiles/:id', async (ctx) => {
  const id = ctx.req.params['id'];

  // Delete the profile
  try {
    const profile = await profiles.doc(id).delete();
  } catch (error) {
    ctx.res.status = 404;
    ctx.res.json({
      msg: `Profile with id ${id} not found.`,
    });
  }
});
```

### Update profile with a put method

```typescript
profileApi.put('/profiles/:id', async (ctx) => {
  const id = ctx.req.params['id'];
  const doc = profiles.doc(id);

  try {
    // Update values provided
    const current = await doc.get();
    const profile: Profile = {
      name: ctx.req.json().name ?? current['name'] ?? '',
      age: ctx.req.json().age ?? current['age'] ?? '',
      homeTown: ctx.req.json().homeTown ?? current['homeTown'] ?? '',
    };

    // Create or Update the profile
    await doc.set(profile);
  } catch (error) {
    ctx.res.status = 404;
    ctx.res.json({
      msg: `Profile with id ${id} not found.`,
    });
  }
});
```

Nitric will automatically infer the required specification and permissions to create an API Gateway - [Learn more](/docs/concepts).

## Run it!

Now that you have an API defined with handlers for each of its methods, it's time to test it out locally.

Test out your application with the `run` command:

```bash
nitric run
```

> _Note:_ `run` starts a container to act as an API gateway, as well as a container for each of the services.

```
 SUCCESS Configuration gathered (3s)
 SUCCESS  Created Dev Image! (2s)
 SUCCESS  Started Local Services! (2s)
 SUCCESS  Started Functions! (1s)
Local running, use ctrl-C to stop

Api    | Endpoint
public | http://localhost:9001/apis/public
```

Once it starts, the application will receive requests via the API port. You can use cURL, Postman or any other HTTP client to test the API.

You can use ctrl-C to end the application.

## Try out the following commands

### Create Profile

```bash
curl --location --request POST 'http://127.0.0.1:9001/apis/public/profiles' \
--header 'Content-Type: text/plain' \
--data-raw '{
	"name": "Peter Parker",
	"age": "21",
  "homeTown" : "Queens"
}'
```

### Fetch Profile

```
curl --location --request GET 'http://127.0.0.1:9001/apis/public/profiles/8ac374d4-11f9-4c61-b3df-387900777905'
```

### Fetch All Profiles

```bash
curl --location --request GET 'http://127.0.0.1:9001/apis/public/profiles'
```

### Update Profile

```bash
curl --location --request PUT 'http://127.0.0.1:9001/apis/public/profiles/8ac374d4-11f9-4c61-b3df-387900777905' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "name": "Ben Reily",
    "homeTown" : "Las Vegas"
}'
```

### Delete Profile

```bash
curl --location --request DELETE 'http://127.0.0.1:9001/apis/public/profiles/8ac374d4-11f9-4c61-b3df-387900777905'
```

## Deploy to the cloud

Setup your credentials and any other cloud specific configuration:

- [AWS](/docs/reference/aws)
- [Azure](/docs/reference/azure)

Create a stack - a collection of resources identified in your project which will be deployed.

```bash
> nitricz stack new
? What do you want to call your new stack? dev
? Which Cloud do you wish to deploy to? aws
? select the region us-east-1
```

### AWS

We called our stack dev, lets try deploying it with the `up` command

```bash
nitric up -s dev
┌───────────────────────────────────────────────────────────────┐
| API  | Endpoint                                               |
| main | https://XXXXXXXX.execute-api.us-east-1.amazonaws.com   |
└───────────────────────────────────────────────────────────────┘
```

When the deployment is complete, go to the relevant cloud console and you'll be able to see and interact with your API.

To undeploy run the following command.

```bash
nitric down -s dev
```

## Optional - Add profile image upload/download support

### Access profile buckets with permissions

Define a bucket named profilesImg with reading/writing permissions

```typescript
const profilesImg = bucket('profilesImg').for('reading', 'writing');
```

### Get Signed URL to Upload Profile Image

```typescript
profileApi.get('/profiles/:id/image/upload', async (ctx) => {
  const id = ctx.req.params['id'];

  // Return a signed url reference for upload
  const photo = profilesImg.file(`images/${id}/photo.png`);
  const photoUrl = await photo.signUrl(FileMode.Write);

  ctx.res.json({
    url: photoUrl,
  });
});
```

### Get Signed URL to Download Profile Image

```typescript
profileApi.get('/profiles/:id/image/download', async (ctx) => {
  const id = ctx.req.params['id'];
  const photo = profilesImg.file(`images/${id}/photo.png`);

  // Return a signed url reference for download
  const photoUrl = await photo.signUrl(FileMode.Read);
  ctx.res.json({
    url: photoUrl,
  });
});
```

## Try out the following commands

Remember to replace any value in {} with the appropriate values from your session.

Get upload image URL

```bash
curl --location --request GET 'http://127.0.0.1:9001/apis/public/profiles/{id}/image/upload'
```

Get download image URL

```bash
curl --location --request GET 'http://127.0.0.1:9001/apis/public/profiles/{id}/image/download'
```

Here's an example of how to use the upload url with curl.

Substitute {url} with the url you receive from your get operation and adjust your content type and binary location.

```bash
curl --location --request PUT '{url}' \
--header 'content-type: image/png' \
--data-binary '@/home/user/Pictures/photo.png'

```

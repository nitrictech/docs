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

## Video

<iframe width="560px" height="315px" src="https://www.youtube.com/embed/PpIxtKDoL2Q" title="" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
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
? Choose a template: official/TypeScript - Starter
? Glob for the function handlers? functions/*.ts
```

Next, open the project in your editor of choice.

```bash
> cd my-profile-api
```

Make sure all dependencies are resolved with  npm.

```bash
npm install
```

The scaffolded project should have the following structure:

```text
+--functions/
|  +-- hello.ts
+--node_modules/
|  ...
+--nitric.yaml
+--package.json
+--README.md
```

You can test the project scaffold with the `npm run dev` command.

```bash
npm run dev
```

> _Note:_ the `dev` script in the template starts the Nitric Server using `nitric start` and runs your functions.

Use `ctrl + a + k` to close the multi-terminal.

> Since we won't use the example function you can now delete the `functions/hello.ts` file.

### Add uuidv4 to your project

We'll need a unique identifier to store our profiles against.

```bash
> npm install uuidv4
```

## Coding our Profile API

Let's start by initializing our profiles api, create a file named 'profiles.ts' within functions and add the following code.

```typescript
import { api, collection } from '@nitric/sdk';
import { uuid } from 'uuidv4';

// Create an api named public
const profileApi = api('public');

// Access profile collection with permissions
const profiles = collection('profiles').for('writing', 'reading');
```

Here we are defining the following -

- an API named public,
- a collection named profiles with reading/writing permissions

### Create profile with a post method

```typescript
profileApi.post('/profiles', async (ctx) => {
  let id = uuid();
  let name = ctx.req.json().name;
  let age = ctx.req.json().age;
  let homeTown = ctx.req.json().homeTown;

  // Create the new profile
  await profiles.doc(id).set({ name, age, homeTown });

  // Return the id
  ctx.res.json({
    msg: `Profile with id ${id} created.`,
  });
});
```

### Retrieve profile with a get method

```typescript
profileApi.get('/profiles/:id', async (ctx) => {
  const { id } = ctx.req.params;

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
  ctx.res.json({
    output: await profiles.query().fetch(),
  });
});
```

### Remove profile with a delete method

```typescript
profileApi.delete('/profiles/:id', async (ctx) => {
  const { id } = ctx.req.params;

  // Delete the profile
  try {
    profiles.doc(id).delete();
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
  const { id } = ctx.req.params;
  const doc = profiles.doc(id);

  try {
    // Update values provided
    const current = await doc.get();
    let name = ctx.req.json().name ?? current['name'] ?? '';
    let age = ctx.req.json().age ?? current['age'] ?? '';
    let homeTown = ctx.req.json().homeTown ?? current['homeTown'] ?? '';

    // Create or Update the profile
    await doc.set({ name, age, homeTown });
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

Test out your application with the `npm run dev` command:

```bash
npm run dev
```

Once it starts, the application will receive requests via the API port. You can use cURL, Postman or any other HTTP client to test the API.

We will keep it running for our tests, however pressing `ctrl + a + k` will end the application. If you want to update your functions, just save them, and it will be hot reloaded.

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

```typescript
const profilesImg = bucket('profilesImg').for('reading', 'writing');
```

### Get Signed URL to Upload Profile Image

```typescript
profileApi.get('/profiles/:id/image/upload', async (ctx) => {
  const id = ctx.req.params['id'];

  // Return a signed url reference for upload
  const photoUrl = await profilesImg
    .file(`images/${id}/photo.png`)
    .getUploadUrl();
  ctx.res.json({
    url: photoUrl,
  });
});
```

### Get Signed URL to Download Profile Image

```typescript
profileApi.get('/profiles/:id/image/download', async (ctx) => {
  const id = ctx.req.params['id'];

  // Return a signed url reference for download
  const photoUrl = await profilesImg
    .file(`images/${id}/photo.png`)
    .getDownloadUrl();
  ctx.res.json({
    url: photoUrl,
  });
});
```

You can also directly redirect to the photo url.

```typescript
profileApi.get('/profiles/:id/image/view', async (ctx) => {
  const { id } = ctx.req.params;

  // Create a read-only signed url reference
  const photoUrl = await profilesImg
    .file(`images/${id}/photo.png`)
    .getDownloadUrl();
  ctx.res.status = 303;
  ctx.res.headers['Location'] = [photoUrl];
});
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

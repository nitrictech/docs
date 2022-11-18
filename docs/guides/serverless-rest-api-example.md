---
title: Building your first API with Nitric
description: Use the Nitric framework to easily build and deploy REST APIs for AWS, Azure or GCP
---

## What we'll be doing

1. Use Nitric & Node.js to create an API to create and update profiles
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

Here's a video of this guide built with Node.js:

[Build and Deploy a REST API for any Cloud](https://www.youtube.com/embed/PpIxtKDoL2Q)

## Prerequisites

{% tabs query="lang" %}
{% tab label="TypeScript" %}

- [Node.js](https://nodejs.org/en/download/)
- The [Nitric CLI](https://nitric.io/docs/installation)
- An [AWS](https://aws.amazon.com), [GCP](https://cloud.google.com) or [Azure](https://azure.microsoft.com) account (_your choice_)

{% /tab %}
{% tab label="Python" %}

- [Pipenv](https://pypi.org/project/pipenv/) - for simplified dependency management
- The [Nitric CLI](https://nitric.io/docs/installation)
- An [AWS](https://aws.amazon.com), [GCP](https://cloud.google.com) or [Azure](https://azure.microsoft.com) account (_your choice_)

{% /tab %}
{% /tabs %}

## Getting started

We’ll start by creating a new project for our API.

```bash
nitric new
```

Create a project, name it and select your preferred starter template.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```bash
? What is the name of the project? my-profile-api
? Choose a template: official/TypeScript - Starter
```

{% /tab %}
{% tab label="Python" %}

```bash
? What is the name of the project? my-profile-api
? Choose a template: official/Python - Starter
```

{% /tab %}
{% /tabs %}

Next, open the project in your editor of choice.

```bash
> cd my-profile-api
```

Make sure all dependencies are resolved:

{% tabs query="lang" %}
{% tab label="TypeScript" %}
Using NPM:

```bash
npm install
```

{% /tab %}
{% tab label="Python" %}
Using Pipenv:

```bash
pipenv install --dev
```

{% /tab %}
{% /tabs %}

The scaffolded project should have the following structure:

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```text
+--functions/
|  +-- hello.ts
+--node_modules/
|  ...
+--nitric.yaml
+--package.json
+--README.md
```

You can test the project to verify everything is working as expected:

```bash
npm run dev
```

> _Note:_ the `dev` script starts the Nitric Server using `nitric start`, which provides local interfaces to emulate cloud resources, then runs your functions and allows them to connect.

{% /tab %}
{% tab label="Python" %}

```text
+--functions/
|  +-- hello.py
+--nitric.yaml
+--Pipfile
+--Pipfile.lock
+--README.md
```

You can test the project to verify everything is working as expected:

Start the Nitric server to emulate cloud services on your machine:

```bash
nitric start
```

Next, in a new terminal window, you can run your application:

```bash
pipenv run dev
```

{% /tab %}
{% /tabs %}

If everything is working as expected you can now delete all files in the `functions/` folder, we'll create new functions in this guide.

## Building the Profile API

{% tabs query="lang" %}
{% tab label="TypeScript" %}

In this example we'll use UUIDs to create unique IDs to store profiles against, let's start by adding a library to help with that:

```bash
npm install uuidv4
```

Next, let's start building the profiles API. Create a file named 'profiles.ts' in the functions directory and add the following:

```typescript
import { api, collection } from '@nitric/sdk';
import { uuid } from 'uuidv4';

// Create an api named public
const profileApi = api('public');

// Access profile collection with permissions
const profiles = collection('profiles').for('writing', 'reading');
```

{% /tab %}
{% tab label="Python" %}

Let's start building our profiles API. Create a file named 'profiles.py' in the functions directory and add the following:

```python
from uuid import uuid4

from nitric.resources import api, collection, bucket
from nitric.application import Nitric

# Create an api named public
profile_api = api("public")

# Access profile collection with permissions
profiles = collection('profiles').allow('reading','writing')
```

{% /tab %}
{% /tabs %}

Here we're creating:

- An API named `public`,
- A collection named `profiles` and giving our function permission to read and write to that collection.

From here, let's add some features to that function that allow us to work with profiles.

> _Note:_ You could separate some or all of these request handlers their own functions if you prefer. For simplicity we'll group them together in this guide.

### Create profiles with POST

{% tabs query="lang" %}
{% tab label="TypeScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
@profile_api.post("/profiles")
async def create_profile(ctx):
  pid = str(uuid4())
  name = ctx.req.json['name']
  age = ctx.req.json['age']
  hometown = ctx.req.json['homeTown']

  await profiles.doc(pid).set({ 'name': name, 'age': age, 'hometown': hometown} )

  ctx.res.body = { 'msg': f'Profile with id {pid} created.'}
```

{% /tab %}
{% /tabs %}

### Retrieve a profile with GET

{% tabs query="lang" %}
{% tab label="TypeScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
@profile_api.get("/profiles/:id")
async def get_profile(ctx):
  pid = ctx.req.params['id']
  d = await profiles.doc(pid).get()

  ctx.res.body = f"{d.content}"

```

{% /tab %}
{% /tabs %}

### List all profiles with GET

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```typescript
profileApi.get('/profiles', async (ctx) => {
  // Return all profiles
  ctx.res.json({
    output: await profiles.query().fetch(),
  });
});
```

{% /tab %}
{% tab label="Python" %}

```python
@profile_api.get("/profiles")
async def get_profiles(ctx):
  results = await profiles.query().fetch()
  r = [doc.content for doc in results.documents]
  ctx.res.body = f"{r}"
```

{% /tab %}
{% /tabs %}

### Remove a profile with DELETE

{% tabs query="lang" %}
{% tab label="TypeScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
@profile_api.delete("/profiles/:id")
async def delete_profiles(ctx):
  pid = ctx.req.params['id']

  try:
    d = await profiles.doc(pid).delete()
    ctx.res.body = { 'msg': f'Profile with id {pid} deleted.'}
  except:
    ctx.res.status = 404
    ctx.res.body = { 'msg': f'Profile with id {pid} not found.'}

```

{% /tab %}
{% /tabs %}

## Ok, let's run this thing!

Now that you have an API defined with handlers for each of its methods, it's time to test it locally.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```bash
npm run dev
```

> _Note:_ the `dev` script starts the Nitric Server using `nitric start`, which provides local interfaces to emulate cloud resources, then runs your functions and allows them to connect.

{% /tab %}
{% tab label="Python" %}

Start the Nitric server to emulate cloud services on your machine:

```bash
nitric start
```

Next, in a new terminal window, you can run your application:

```bash
pipenv run dev
```

{% /tab %}
{% /tabs %}

Once it starts, the application will receive requests via the API port. You can use cURL, Postman or any other HTTP client to test the API.

We will keep it running for our tests. If you want to update your functions, just save them, they'll be reloaded automatically.

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

### Delete Profile

```bash
curl --location --request DELETE 'http://localhost:9001/apis/public/profiles/{id}'
```

## Deploy to the cloud

At this point, you can deploy what you've built to any of the supported cloud providers. To do this start by setting up your credentials and any configuration for the cloud you prefer:

- [AWS](/docs/reference/providers/aws)
- [Azure](/docs/reference/providers/azure)
- [GCP](/docs/reference/providers/gcp)

Next, we'll need to create a `stack`. A stack represents a deployed instance of an application, which is a collection of resources defined in your project. You might want separate stacks for each environment, such as stacks for `dev`, `test` and `prod`. For now, let's start by creating a `dev` stack.

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

We called our stack `dev`, let's try deploying it with the `up` command

```bash
nitric up
┌───────────────────────────────────────────────────────────────┐
| API  | Endpoint                                               |
| main | https://XXXXXXXX.execute-api.us-east-1.amazonaws.com   |
└───────────────────────────────────────────────────────────────┘
```

When the deployment is complete, go to the relevant cloud console and you'll be able to see and interact with your API.

To tear down your application from the cloud, use the `down` command:

```bash
nitric down
```

## Optional - Add profile image upload/download support

If you want to go a bit deeper and create some other resources with Nitric, why not add images to your profiles API.

#### Access profile buckets with permissions

Define a bucket named `profilesImg` with reading/writing permissions

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```typescript
const profilesImg = bucket('profilesImg').for('reading', 'writing');
```

{% /tab %}
{% tab label="Python" %}

```python
photos = bucket("photos").allow('reading','writing')
```

Add imports for time and date so that we can set up caching/expiry headers

```python
from datetime import datetime, timedelta
```

{% /tab %}
{% /tabs %}

#### Get a URL to upload a profile image

{% tabs query="lang" %}
{% tab label="TypeScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
@profile_api.get("/profiles/:id/image/upload")
async def upload_profile_image(ctx):

  pid = ctx.req.params['id']

  photo =  photos.file(f'images/{pid}/photo.png')
  photo_url = await photo.upload_url(expiry=3600)

  expires = datetime.utcnow() + timedelta(seconds=(3600))
  expires = expires.strftime("%a, %d %b %Y %H:%M:%S GMT")
  ctx.res.headers['Expires'] = expires

  ctx.res.body = photo_url
```

{% /tab %}
{% /tabs %}

#### Get a URL to download a profile image

{% tabs query="lang" %}
{% tab label="TypeScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
@profile_api.get("/profiles/:id/image/view")
async def download_profile_image(ctx):
  pid = ctx.req.params['id']

  photo =  photos.file(f'images/{pid}/photo.png')
  photo_url = await photo.download_url(expiry=3600)

  expires = datetime.utcnow() + timedelta(seconds=(3600))
  expires = expires.strftime("%a, %d %b %Y %H:%M:%S GMT")
  ctx.res.headers['Expires'] = expires

  ctx.res.body = photo_url
```

{% /tab %}
{% /tabs %}

You can also directly redirect to the photo URL.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
@profile_api.get("/profiles/:id/image/view")
async def download_profile_image(ctx):
  pid = ctx.req.params['id']

  photo =  photos.file(f'images/{pid}/photo.png')
  photo_url = await photo.download_url(expiry=3600)

  expires = datetime.utcnow() + timedelta(seconds=(3600))
  expires = expires.strftime("%a, %d %b %Y %H:%M:%S GMT")
  ctx.res.headers['Expires'] = expires
  ctx.res.headers['Location'] = [photo_url]
  ctx.res.status = 303
```

{% /tab %}
{% /tabs %}

**Time to test the updated API**

Update all values in {} and change the URL to your deployed URL if you're testing on the cloud.

**Get an image upload URL**

```bash
curl --location --request GET 'http://localhost:9001/apis/public/profiles/{id}/image/upload'
```

**Using the upload URL with curl**

```bash
curl --location --request PUT '{url}' \
--header 'content-type: image/png' \
--data-binary '@/home/user/Pictures/photo.png'

```

**Get an image download URL**

```bash
curl --location --request GET 'http://localhost:9001/apis/public/profiles/{id}/image/download'
```

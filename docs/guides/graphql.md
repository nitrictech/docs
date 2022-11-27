---
title: Building a GraphQL API with Nitric
description: Use the Nitric framework to easily build and deploy a serverless GraphQL API for AWS, Google Cloud, or Azure
---

## What we'll be doing

[GraphQL](https://graphql.org) APIs rely on only one HTTP endpoint, which means that you want it to be reliable, scalable, and performant. By using serverless compute such as Lambda, the GraphQL endpoint can be auto-scaling, whilst maintaining performance and reliability.

We'll be using Nitric to create a GraphQL API, that can be deployed to a cloud of your choice, gaining the benefits of serverless compute.

1. Create the GraphQL Schema
2. Write Resolvers
3. Create handler for GraphQL requests
4. Run locally for testing
5. Deploy to a cloud of your choice

## Video

Here's a video of this guide built with Node.js:

[Serverless GraphQL on any Cloud](https://www.youtube.com/embed/K7T32ebYSLA)

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

## Build the GraphQL Schema

GraphQL requests are typesafe, and so they require a schema to be defined to validate queries.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

Let's first add the GraphQL and uuid module from NPM.

```bash
npm install graphql
npm install uuidv4
```

Create a new file named 'graphql.ts' in the functions folder.
We can then import `buildSchema`, and write out the schema.

```typescript
import { buildSchema } from 'graphql';
import { uuid } from 'uuidv4';

const schema = buildSchema(`
  type Profile {
    pid: String!
    name: String!
    age: Int!
    home: String!
  }

  input ProfileInput {
    name: String!
    age: Int!
    home: String!
  }

  type Query {
    getProfiles: [Profile]
    getProfile(pid: String!): Profile
  }

  type Mutation {
    createProfile(profile: ProfileInput!): Profile
    updateProfile(pid: String!, profile: ProfileInput!): Profile
  }
`);
```

We will also define a few types to mirror the schema definition.

```typescript
interface Profile {
  pid: string;
  name: string;
  age: number;
  home: string;
}

type ProfileInput = Omit<Profile, 'pid'>;
```

{% /tab %}
{% tab label="Python" %}

Let's first add the [Ariadne library](https://ariadnegraphql.org/)

```bash
pipenv install ariadne
```

Create a new file named 'graphql.py' in the functions folder.
We can then import our dependencies, and write out the schema.

```python
from ariadne import MutationType, QueryType, gql, make_executable_schema, graphql
from uuid import uuid4

type_defs = gql("""
  type Profile {
    pid: String!
    name: String!
    age: Int!
    home: String!
  }

  type Message {
    msg: String!
  }

  input ProfileInput {
    name: String!
    age: Int!
    home: String!
  }

  type Query {
    getProfiles: [Profile]
    getProfile(pid: String!): Profile
  }

  type Mutation {
    createProfile(profile: ProfileInput!): Profile
    updateProfile(pid: String!, profile: ProfileInput!): Profile
  }
""")
```

{% /tab %}
{% /tabs %}

## Define a Collection

Lets define a collections resource for the resolvers get/set data from.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```typescript
import { collection } from '@nitric/sdk';

const profiles = collection<ProfileInput>('profiles').for('reading', 'writing');
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api, collection
from nitric.application import Nitric

profiles = collection('profiles').allow('reading','writing')
```

{% /tab %}
{% /tabs %}

## Create Resolvers

{% tabs query="lang" %}
{% tab label="TypeScript" %}

We can create a resolver object for use by the graphql handler.

```typescript
const resolvers = {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
};
```

These functions don't exist, so we'll have to define them.

We can then use the collection within these functions. Each resolver will receive an `args` object which holds the graphql arguments from the query.

An example of this is converting the GraphQL query function:

```graphql
updateProfile(id: String!, profile: ProfileInput!): Profile
```

Into typescript:

```typescript
const updateProfile = async ({ pid, profile }): Promise<Profile> => {};
```

{% /tab %}
{% tab label="Python" %}

We'll need to map our resolvers to mutations or queries using Ariadne's QueryType or MutationType.

```python
query = QueryType()
mutation = MutationType()
```

We can then use the collection within these functions. Each resolver will receive a parent and info arguments, as well as any query or mutation's arguments as keyword arguments.

An example of this is converting the GraphQL query function into Python:

```graphql
updateProfile(pid: String!, profile: ProfileInput!): Profile
```

```python
@mutation.field("updateProfile")
async def update_profiles(obj, info, pid, profile):
```

{% /tab %}
{% /tabs %}

## Create a profile

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```typescript
const createProfile = async ({ profile }): Promise<Profile> => {
  const pid = uuid();

  await profiles.doc(pid).set(profile);

  return {
    pid,
    ...profile,
  };
};
```

{% /tab %}
{% tab label="Python" %}

```python
@mutation.field("createProfile")
async def resolve_create_profile(obj, info, profile):

    pid = str(uuid4())

    p = { 'pid': pid, 'name': profile['name'], 'age': profile['age'], 'home': profile['home'] }
    await profiles.doc(pid).set(p)

    return p
```

{% /tab %}
{% /tabs %}

## Update a profile

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```typescript
const updateProfile = async ({ pid, profile }) => {
  await profiles.doc(pid).set(profile);

  return {
    pid,
    ...profile,
  };
};
```

{% /tab %}
{% tab label="Python" %}

```python
@mutation.field("updateProfile")
async def update_profiles(obj, info, pid, profile):

    try:
        await profiles.doc(pid).get()
    except:
        return { 'msg': f'Profile with id {pid} not found.'}

    p = { 'pid': pid, 'name': profile['name'], 'age': profile['age'], 'home': profile['home'] }
    await profiles.doc(pid).set(p)

    return p
```

{% /tab %}
{% /tabs %}

## Get all profiles

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```typescript
const getProfiles = async (): Promise<Profile[]> => {
  const result = await profiles.query().fetch();

  return result.documents.map((doc) => ({
    pid: doc.id,
    ...doc.content,
  }));
};
```

{% /tab %}
{% tab label="Python" %}

```python
@query.field("getProfiles")
async def resolve_get_profiles(obj, info):

    results = await profiles.query().fetch()

    r = []
    for docs in results.documents:
        r.append(docs.content)

    return r
```

{% /tab %}
{% /tabs %}

## Get a profile by its ID

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```typescript
const getProfile = async ({ pid }): Promise<Profile> => {
  const profile = await profiles.doc(pid).get();

  return {
    pid,
    ...profile,
  };
};
```

{% /tab %}
{% tab label="Python" %}

```python
@query.field("getProfile")
async def resolve_get_profile(obj, info, pid):

    p = await profiles.doc(pid).get()
    return { 'pid': pid, 'name': p.content['name'], 'age': p.content['age'], 'home': p.content['home'] }
```

{% /tab %}
{% /tabs %}

## GraphQL Handler

We'll define an api to put our handler in. This api will only have one endpoint, which will handle all the requests.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

Update the imports to include api and declare the api.

```typescript
import { api, collection } from '@nitric/sdk';

const profileApi = api('public');
```

Then add the api handler.

```typescript
import { graphql, buildSchema } from 'graphql';

profileApi.post('/', async (ctx) => {
  const { query, variables } = ctx.req.json();
  const result = await graphql({
    schema: schema,
    source: query,
    rootValue: resolvers,
  });

  return ctx.res.json(result);
});
```

{% /tab %}
{% tab label="Python" %}

First load the schema with our queries and mutations.

```python
graph_api = api("public")
schema = make_executable_schema(type_defs, [query, mutation])
```

Then add the api handler.

```python
@graph_api.post("/")
async def profile_handler(ctx):
    query = ctx.req.json

    success, result = await graphql(
        schema,
        query
    )

    ctx.res.status = 200 if success else 400
    ctx.res.body = result

Nitric.run()
```

{% /tab %}
{% /tabs %}

## Run it!

Now that you have an API defined with a handler for the GraphQL requests, it's time to test it out locally.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

Test out your application with the following command:

```bash
npm run dev
```

> _Note:_ the `dev` script in the template starts the Nitric Server using `nitric start` and runs your functions.

Once it starts, the application will be able to receive requests via the API port.

Pressing `ctrl + a + k` will end the application.

{% /tab %}
{% tab label="Python" %}

Start your Nitric server:

```bash
nitric start
```

Then test out your application with the following command in a new terminal:

```bash
pipenv run dev
```

Once it starts, the application will be able to receive requests via the API port.

Pressing `ctrl + c` will end the application.

{% /tab %}
{% /tabs %}

## GraphQL Queries

We can use cURL, postman or any other HTTP Client to test our application, however it's better if the client has GraphQL support.

### Get all Profiles using cURL

```bash
curl --location -X POST \
  'http://localhost:9001/apis/public/' \
  --header 'Content-Type: application/json' \
  --data-raw '{"query":"query { getProfiles { pid name age home }}","variables":{}}'
```

```json
{
  "data": {
    "getProfiles": [
      {
        "pid": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
        "name": "Tony Stark",
        "age": 53,
        "home": "Manhattan, New York City"
      },
      {
        "pid": "9c53bd95-199c-4151-a2a6-0da3ae24c29d",
        "name": "Peter Parker",
        "age": 22,
        "home": "Queens, New York City"
      },
      {
        "pid": "9ff191b0-0fbe-4e49-b944-85e79b5caa21",
        "name": "Steve Rogers",
        "age": 105,
        "home": "New York City"
      }
    ]
  }
}
```

### Get a single profile

```bash
curl --location -X POST \
  'http://localhost:9001/apis/public/' \
  --header 'Content-Type: application/json' \
  --data-raw '{"query":"query { getProfile(pid: \"3f70ca58-25ed-4e88-8a45-eea1fbbb45d8\") { pid name age home }}","variables":{}}'

```

```json
{
  "data": {
    "getProfile": {
      "pid": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
      "name": "Tony Stark",
      "age": 53,
      "home": "Manhattan, New York City"
    }
  }
}
```

### Create a profile

```bash
curl --location -X POST \
  'http://localhost:9001/apis/public/' \
  --header 'Content-Type: application/json' \
  --data-raw '{"query":"mutation { createProfile(profile: { name: \"Tony Stark\", age: 53, home: \"Manhattan, New York City\" }){ pid name age home }}","variables":{}}'
```

```json
{
  "data": {
    "getProfile": {
      "pid": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
      "name": "Tony Stark",
      "age": 53,
      "home": "Manhattan, New York City"
    }
  }
}
```

### Update a profile

```bash
curl --location -X POST \
  'http://localhost:9001/apis/public/' \
  --header 'Content-Type: application/json' \
  --data-raw '{"query":"mutation { updateProfile(pid: \"3f70ca58-25ed-4e88-8a45-eea1fbbb45d8\",profile: { name: \"Peter Parker\", age: 22, home: \"Queens, New York City\" }){ pid name age home }}","variables":{}}'
```

```json
{
  "data": {
    "getProfile": {
      "pid": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
      "name": "Peter Parker",
      "age": 22,
      "home": "Queens, New York City"
    }
  }
}
```

## Deploy to the cloud

Setup your credentials and any other cloud specific configuration:

- [AWS](/docs/reference/providers/aws)
- [Azure](/docs/reference/providers/azure)
- [GCP](/docs/reference/providers/gcp)

Create a stack - a collection of resources identified in your project which will be deployed.

```bash
nitric stack new
```

```
? What do you want to call your new stack? dev
? Which Cloud do you wish to deploy to? aws
? select the region us-east-1
```

You can then deploy using the following command:

```bash
nitric up
```

To undeploy run the following command:

```bash
nitric down
```

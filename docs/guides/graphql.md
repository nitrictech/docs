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

[Serverless GraphQL on any Cloud](https://www.youtube.com/embed/K7T32ebYSLA)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- The [Nitric CLI](https://nitric.io/docs/installation)
- An [AWS](https://aws.amazon.com), [GCP](https://cloud.google.com) or [Azure](https://azure.microsoft.com) account (_your choice_)

## Getting Started

## Build the GraphQL Schema

GraphQL requests are typesafe, and so they require a schema to be defined to validate queries. Let's first add the GraphQL module from NPM.

```bash
npm install graphql
```

We can then import `buildSchema`, and write out the schema.

```typescript
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Profile {
    id: String!
    name: String!
    age: Int!
    homeTown: String!
  }

  input ProfileInput {
    name: String!
    age: Int!
    homeTown: String!
  }

  type Query {
    getProfiles: [Profile]
    getProfile(id: String!): Profile
  }

  type Mutation {
    createProfile(profile: ProfileInput!): Profile
    updateProfile(id: String!, profile: ProfileInput!): Profile
  }
`);
```

We will also define a few types to mirror the schema definition.

```typescript
interface Profile {
  id: string;
  name: string;
  age: number;
  homeTown: string;
}

type ProfileInput = Omit<Profile, 'id'>;
```

## Create Resolvers

We can create a resolver object for use by the graphql handler.

```typescript
const resolvers = {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
};
```

These functions don't exist, so we'll have to define them. But first lets define a collections resource for the functions to operate against.

```typescript
import { collection } from '@nitric/sdk';

const profiles = collection<ProfileInput>('profiles').for('reading', 'writing');
```

We can then use the collection within these functions. Each resolver will receive an `args` object which holds the graphql arguments from the query.

An example of this is converting the GraphQL query function:

```
updateProfile(id: String!, profile: ProfileInput!): Profile
```

Into typescript:

```typescript
const updateProfile = async ({ id, profile }): Promise<Profile> => {};
```

### Create a profile

```typescript
const createProfile = async ({ profile }): Promise<Profile> => {
  const id = uuid();

  await profiles.doc(id).set(profile);

  return {
    id,
    ...profile,
  };
};
```

### Update a profile

```typescript
const updateProfile = async ({ id, profile }) => {
  await profiles.doc(id).set(profile);

  return {
    id,
    ...profile,
  };
};
```

### Get all profiles

```typescript
const getProfiles = async (): Promise<Profile[]> => {
  const result = await profiles.query().fetch();

  return result.documents.map((doc) => ({
    id: doc.id,
    ...doc.content,
  }));
};
```

### Get a profile by its ID

```typescript
const getProfile = async ({ id }): Promise<Profile> => {
  const profile = await profiles.doc(id).get();

  return {
    id,
    ...profile,
  };
};
```

## GraphQL Handler

We'll define an api to put our handler in.

```typescript
const profileApi = api('public');
```

This api will only have one endpoint, which will handle all the requests.

```typescript
import { graphql, buildSchema } from 'graphql';

...

profileApi.post('/', async (ctx) => {
  const { query, variables } = ctx.req.json();
  const result = await graphql({
    schema: schema,
    source: query,
    rootValue: resolvers,
  });

  return ctx.res.json(result);
})
```

## Run it!

Now that you have an API defined with a handler for the GraphQL requests, it's time to test it out locally.

Test out your application with the `npm run dev` command:

```bash
npm run dev
```

> _Note:_ the `dev` script in the template starts the Nitric Server using `nitric start` and runs your functions.

Once it starts, the application will be able to receive requests via the API port.

Pressing `ctrl + a + k` will end the application.

We can use cURL, postman or any other HTTP Client to test our application, however it's better if the client has GraphQL support.

### GraphQL Queries

```text
query {
  getProfiles {
    id
    name
    age
    homeTown
  }
  getProfile(id: "1234") {
    id
    name
    age
    homeTown
  }
}

```

And here is the syntax for mutating:

```text
mutation {
  createProfile(profile: {
    name: "Tony Stark",
    age: 53,
    homeTown: "Manhattan, New York City"
  }){
    id
    name
    age
    homeTown
  }

  updateProfile(
    id: "1234",
    profile: {
      name: "Peter Parker",
      age: 22,
      homeTown: "Queens, New York City"
    }
  ){
    id
  }
}
```

### Get all Profiles using cURL

```bash
curl --location -X POST \
  'http://localhost:9001/apis/public/' \
  --header 'Content-Type: application/json' \
  --data-raw '{"query":"query { getProfiles { id name age homeTown }}","variables":"{}"}'
```

```json
{
  "data": {
    "getProfiles": [
      {
        "id": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
        "name": "Tony Stark",
        "age": 53,
        "homeTown": "Manhattan, New York City"
      },
      {
        "id": "9c53bd95-199c-4151-a2a6-0da3ae24c29d",
        "name": "Peter Parker",
        "age": 22,
        "homeTown": "Queens, New York City"
      },
      {
        "id": "9ff191b0-0fbe-4e49-b944-85e79b5caa21",
        "name": "Steve Rogers",
        "age": 105,
        "homeTown": "New York City"
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
  --data-raw '{"query":"query { getProfile(id: \"3f70ca58-25ed-4e88-8a45-eea1fbbb45d8\") { id name age homeTown }}","variables":"{}"}'
```

```json
{
  "data": {
    "getProfile": {
      "id": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
      "name": "Tony Stark",
      "age": 53,
      "homeTown": "Manhattan, New York City"
    }
  }
}
```

### Create a profile

```bash
curl --location -X POST \
  'http://localhost:9001/apis/public/' \
  --header 'Content-Type: application/json' \
  --data-raw '{"query":"mutation { createProfile(profile: { name: \"Tony Stark\", age: 53, homeTown: \"Manhattan, New York City\" }){ id name age homeTown }}","variables":"{}"}'
```

```json
{
  "data": {
    "getProfile": {
      "id": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
      "name": "Tony Stark",
      "age": 53,
      "homeTown": "Manhattan, New York City"
    }
  }
}
```

### Update a profile

```bash
curl --location -X POST \
  'http://localhost:9001/apis/public/' \
  --header 'Content-Type: application/json' \
  --data-raw '{"query":"mutation { updateProfile(id: \"3f70ca58-25ed-4e88-8a45-eea1fbbb45d8\",profile: { name: \"Peter Parker\", age: 22, homeTown: \"Queens, New York City\" }){ id name age homeTown }}","variables":"{}"}'
```

```json
{
  "data": {
    "getProfile": {
      "id": "3f70ca58-25ed-4e88-8a45-eea1fbbb45d8",
      "name": "Peter Parker",
      "age": 22,
      "homeTown": "Queens, New York City"
    }
  }
}
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

You can then deploy using the following command:

```bash
nitric up
```

To undeploy run the following command:

```bash
nitric down
```

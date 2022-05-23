---
title: Securing your API with Auth0
description: Configure an Auth0 application and secure your API with it
---

## What we'll be doing

In this guide we'll use the Nitric Framework with an [Auth0](https://auth0.com/) application to build serverless functions and a secure API.

This example adds secure JWT authentication to an API allowing you to integrate it either with standalone api login, or to integrate it with a frontend application using the clients identity token.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- The [Nitric CLI](https://nitric.io/docs/installation)
- An account with [auth0](https://auth0.com/)

## Create an Auth0 API

We're assuming you're already using Auth0, but if not you can [sign up for free](https://auth0.com/).

Normally when authenticating a frontend application with Auth0 you will create a new Auth0 application that can be used to log into your app. These log ins will supply you with an Auth0 identity token that can be used to request access tokens used to consume your backend APIs.

For the purposes of this guide we are only securing a new API, so we only need to create a new API within Auth0.

Log into Auth0 and create a new API. If you have an existing API you'd like to use, that's fine, just adapt the next steps to match your existing API.

<img
  alt="navigate to APIs"
  src="../../assets/img/guides/auth0/auth0-navigate-apis.png"
  height="700"
  />

<img
  alt="create API"
  src="../../assets/img/guides/auth0/auth0-create-api.png"
  height="700"
  />

> You can enter any identifier you want, this guide will continue using 'testing' in subsequent steps.

Now we're ready to hook up our API for testing with our application. For this guide we'll create a new typescript application using `nitric new`, if you have an application already you want to use, just adapt the below steps to your application.

Before we start getting into the code we'll need a bit more information from Auth0.

First we'll need the `audience` for our API, this can be found on the settings tab of your new API.

<img
  alt="get audience value"
  src="../../assets/img/guides/auth0/auth0-get-audience.png"
  height="700"
  />

Second we'll get the `issuer` for our API, this will be our Auth0 environment endpoint and easy way to see this is to navigate the `Test` tab of our API.

<img
  alt="get audience value"
  src="../../assets/img/guides/auth0/auth0-get-issuer.png"
  height="700"
  />

In our new nitric application you will have the following in the `hello.ts` file

```typescript
import { api } from '@nitric/sdk';

const helloApi = api('main');

helloApi.get('/hello/:name', async (ctx) => {
  const { name } = ctx.req.params;

  ctx.res.body = `Hello ${name}`;

  return ctx;
});
```

To secure our api we will need to import the `jwt` function from the nitric sdk and configure our API gateway with the values we got from Auth0 in the above steps.

```typescript
import { api, jwt } from '@nitric/sdk';

const helloApi = api('main', {
  // define security for this API
  securityDefinitions: {
    user: jwt({
      issuer: 'https://your-auth0-app.region.auth0.com', // 👀 your issuer value goes here
      audiences: ['testing'], // 👀 your audience value goes here
    }),
  },

  security: {
    // Apply the above security to the entire API, note the string matches the above key
    user: [
      // NOTE: The array option here is to specify required scopes, for simplicity we'll leave this blank for now
    ],
  },
});

helloApi.get('/hello/:name', async (ctx) => {
  const { name } = ctx.req.params;

  ctx.res.body = `Hello ${name}`;

  return ctx;
});
```

To test our security we will need to deploy our application to a cloud that nitric supports (security rules are currently not enforced when using `nitric run` for local development).

If you don't have a stack already defined we'll create one with `nitric stack new`.

Run `nitric stack new` and follow the prompts to create a new stack

The run `nitric up -s <your_stack_name>` to deploy your application.

We can check to see if our application is secure by calling it without an `Authorization` header

```bash
curl -H <INSERT_API_GATEWAY>/hello/world
```

This should return a `401` error.

To test your application, you can follow the instructions on the `Test` tab of your Auth0 API, to create a new JWT token to test with.
<img
  alt="get testing token"
  src="../../assets/img/guides/auth0/auth0-get-jwt.png"
  height="700"
  />

Once we have our token we can call our API

```bash
curl -H "Authorization: Bearer <INSERT_TOKEN>" <INSERT_API_GATEWAY>/hello/world
```

Which should return `Hello world`.

And that's all it takes to secure your nitric APIs with Auth0 🎉. For more detailed information on available options for securing your APIs check out our [api docs/reference](https://nitric.io/docs).

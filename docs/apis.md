---
title: APIs
description: Building HTTP APIs with Nitric
---

Nitric APIs make it dead simple to define and map functions to HTTP APIs.

## Concepts

### Request Context

Nitric's way of handing requests and responses was inspired by a common pattern from frameworks like [Koa](https://koajs.com/) and [Next.js](https://nextjs.org/docs/api-routes/introduction) edge functions. We provide a single context object that gives you everything you need to read requests and write responses.

## Creating a new API

APIs are easy to declare with the Nitric SDK

```typescript
import { api } from '@nitric/sdk';

const galaxyApi = api('far-away-galaxy-api');
```

## Routing

You define your HTTP routes and the functions that handle incoming requests using methods on your api objects, for example `galaxyApi.post()`. When calling the methods you provide the path/pattern to match on and a handler callback function.

> The commonly used HTTP methods used for APIs are GET, POST, PUT, PATCH and DELETE.

```javascript
// List planets
galaxyApi.get('/planets', async (ctx) => {
  // get a list of planets
  const planets = getPlanetsList();
  ctx.res.json(planets);
  return ctx;
});

// Create planets
galaxyApi.post('/planets', async (ctx) => {
  const data = ctx.req.json();
  // create a new planet
  createPlanet(data);
  ctx.res.status = 201;
  return ctx;
});
```

### Handling parameters

The string used to match HTTP routes can include named parameters. The values collected from those parameters are included in the context object under `ctx.req.params` with the name provided in the route definition.

```javascript
galaxyApi.get('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  // get a specific planet
  const planet = getPlanet(name);
  // set the response as json
  ctx.res.json(planet);
  return ctx;
});

galaxyApi.patch('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  const update = ctx.req.json();
  // update a specific planet
  const planet = updatePlanet(name, update);
  return ctx;
});

galaxyApi.delete('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  // delete a specific planet
  deletePlanet(name);
  return ctx;
});
```

### Setting HTTP status and headers

The response object provides `status` and `headers` properties you can set to return an HTTP status code such as `201` or `404` and appropriate headers.

```javascript
galaxyApi.get('/planets/alderaan', async (ctx) => {
  ctx.res.status = 301;
  ctx.res.headers['Location'] = ['https://example.org/debris/alderann'];
  return ctx;
});
```

## Securing the API

APIs can include security definitions for OIDC compatible providers such as [Auth0](https://auth0.com/), [FusionAuth](https://fusionauth.io/) and [AWS Cognito](https://aws.amazon.com/cognito/).

A `securityDefinitions` object can be provided to start defining the auth requirements of your API. `security` rules can also be specified on the API to apply a security definition to the entire API.

```javascript
import { api, jwt } from '@nitric/sdk';

const galaxyApi = api('galaxy', {
  // security requirements for your API are defined here
  securityDefinitions: {
    // define a security definition called 'user'
    user: jwt({
      issuer: 'https://example-issuer.com',
      audiences: ['YOUR-AUDIENCES'],
    }),
  },
  // You can optionally apply security rules to the entire API
  security: {
    // apply the 'user security definition the whole API'
    user: [
      // Optionally apply required scopes to this api
      // in this case users will require the planets:read scope to access the API
      'planets:read',
    ],
  },
});
```

### Overriding API level security

Individual routes can also have their own security rules applied for any `securityDefinition` supplied at the API level.

```javascript
galaxyApi.get('planets/unsecured-planet', async (ctx) => {}, {
  // override top level security, and apply no security to this route
  security: {},
});
```

## Defining Middleware

APIs support middleware at the API level and at the route level. Middleware is supplied both a `HttpContext` object and a `next()` function which calls the next middleware in the chain.

```javascript
const validate = (ctx, next) => {
  // Do request validation, etc.
  next();
};
```

### API level middleware

Middleware defined at the API level will be called on every route.

```javascript
import { api } from '@nitric/sdk';
import { validate, logRequest } from '../middleware';

const customersApi = api('customers', {
  middleware: [logRequest, validate],
});
```

### Route level middleware

Middleware defined at a route level will only be called for that route.

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const customersApi = api('customers');

const getAllCustomers = (ctx) => {};

customersApi.get('/customers', validate, getAllCustomers);
```

## What's next?

- Learn more about APIs in our [reference docs](/docs/reference/api/api).

Nitric APIs make it dead simple to define and map functions to HTTP APIs.

## Concepts

### Request Context

Nitric's way of handing requests and responses was inspired by a common pattern from frameworks like koa and fasthttp. We provide a single context object that gives you everything you need to read requests and write responses.

## Creating a new API

APIs are easy to declare with the nitric SDK

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
  const data = JSON.parse(ctx.req.data);
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
  const update = JSON.parse(ctx.req.data);
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
  ctx.res.headers['Location'] = 'https://example.org/debris/alderann';
  return ctx;
});
```

## What's next?

- Learn more about APIs in our [reference docs](/docs/reference/api/api).

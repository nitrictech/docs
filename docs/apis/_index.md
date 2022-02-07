---
description: A nice description for APIs
---

## Overview

Nitric APIs make it dead simple to define and map functions to HTTP APIs.

## Concepts

### Request Context

Nitric's way of handing request and response was inspired by a common pattern implemented by frameworks like koa and fasthttp. We give you a single context object that gives you everything you need to read and write requests and responses.

## Creating a new API

APIs are easy to declare with the nitric SDK

```typescript
import { api } from '@nitric/sdk';

const farAwayGalaxyApi = api('far-away-galaxy-api');
```

## Mapping Methods

Methods can be mapped to functions by calling that method name with the route you'd like to match on.

The commonly used HTTP methods used for APIs are Get, Post, Put, Patch and Delete.

```javascript
// List planets
farAwayGalaxyApi.get('/planets', async (ctx) => {
  // get a list of planets
  const planets = getPlanetsList();
  ctx.res.json(planets);
  return ctx;
});

// Create planets
farAwayGalaxyApi.post('/planets', async (ctx) => {
  const data = JSON.parse(ctx.req.data);
  // create a new planet
  createPlanet(data);
  ctx.res.status = 201;
  return ctx;
});
```

### Handling parameters

```javascript
farAwayGalaxyApi.get('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  // get a specific planet
  const planet = getPlanet(name);
  // set the response as json
  ctx.res.json(planet);
  return ctx;
});

farAwayGalaxyApi.patch('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  const update = JSON.parse(ctx.req.data);
  // update a specific planet
  const planet = updatePlanet(name, update);
  return ctx;
});

farAwayGalaxyApi.delete('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  // delete a specific planet
  deletePlanet(name);
  return ctx;
});
```

## What's next?

<!-- TODO: ================= update link below with reference page ================= -->

- Learn more about apis in our [reference docs]().

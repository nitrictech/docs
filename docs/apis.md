---
title: Building Blocks - APIs
description: Building HTTP APIs with Nitric
---

Nitric APIs make it dead simple to define and map functions to HTTP APIs.

## Concepts

### Request Context

Nitric's way of handling requests and responses was inspired by a common pattern from frameworks like [Koa](https://koajs.com/) and [Next.js](https://nextjs.org/docs/api-routes/introduction) edge functions. We provide a single context object that gives you everything you need to read requests and write responses.

## Creating a new API

APIs are easy to declare with the Nitric SDK

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api } from '@nitric/sdk';

const galaxyApi = api('far-away-galaxy-api');
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api

galaxy_api = api('far-away-galaxy-api')
```

{% /tab %}
{% /tabs %}

## Routing

You define your HTTP routes and the functions that handle incoming requests using methods on your API objects, for example, `post()`. When calling the methods you provide the path/pattern to match on and a handler callback function.

> The commonly used HTTP methods used for APIs are GET, POST, PUT, PATCH and DELETE.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
# List planets
@galaxy_api.get("/planets")
async def list_planets(ctx):
  # get a list of planets
  ctx.res.body = get_planets_list()

# Create planets
@galaxy_api.post("/planets")
async def create_planet(ctx):
  data = ctx.req.json()
  # create a new planet
  create_planet(data)
  ctx.res.status = 201
```

{% /tab %}
{% /tabs %}

### Handling parameters

The string used to match HTTP routes can include named parameters. The values collected from those parameters are included in the context object under `ctx.req.params` with the name provided in the route definition.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

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
  updatePlanet(name, update);
  return ctx;
});

galaxyApi.delete('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  // delete a specific planet
  deletePlanet(name);
  return ctx;
});
```

{% /tab %}
{% tab label="Python" %}

```python
@galaxy_api.get("/planets/:name")
async def get_planet(ctx):
  name = ctx.req.params['name']
  # get a specific planet
  planet = get_planet(name)
  # set the response as JSON
  ctx.res.body = planet

@galaxy_api.patch("/planets/:name")
async def update_planet(ctx):
  name = ctx.req.params['name']
  update = ctx.req.json
  # update a specific planet
  update_planet(name, update)

@galaxy_api.delete("/planets/:name")
async def delete_planet(ctx):
  name = ctx.req.params['name']
  # delete a specific planet
  delete_planet(name)
```

{% /tab %}
{% /tabs %}

### Setting HTTP status and headers

The response object provides `status` and `headers` properties you can set to return an HTTP status code such as `201` or `404` and appropriate headers.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
galaxyApi.get('/planets/alderaan', async (ctx) => {
  ctx.res.status = 301;
  ctx.res.headers['Location'] = ['https://example.org/debris/alderann'];
  return ctx;
});
```

{% /tab %}
{% tab label="Python" %}

```python
@galaxy_api.get("/planets/alderaan")
async def find_alderaan(ctx):
  ctx.res.status = 301
  ctx.res.headers["Location"] = "https://example.org/debris/alderann"

```

{% /tab %}
{% /tabs %}

## Securing the API

APIs can include security definitions for OIDC-compatible providers such as [Auth0](https://auth0.com/), [FusionAuth](https://fusionauth.io/) and [AWS Cognito](https://aws.amazon.com/cognito/).

A `securityDefinitions` object can be provided to start defining the auth requirements of your API. `security` rules can also be specified on the API to apply a security definition to the entire API. The security definition defines the kind of auth and the configuration required. For a JWT this configuration is the JWT issuer and audiences. The security object defines the required scope to access that resource.

For a more in depth tutorial look at the [Auth0 integration guide](./guides/secure-api-auth0.md)

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const helloApi = api('main', {
  security: {
    user: ['user.read'],
  },
  securityDefinitions: {
    user: {
      kind: 'jwt',
      issuer: 'https://dev-abc123.us.auth0.com',
      audiences: ['https://test-security-definition/'],
    },
  },
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api, ApiOptions, JwtSecurityDefinition

helloApi = api("main", opts=ApiOptions(
        security={
            "user": ["user.read"],
        },
        security_definitions={
            "user": JwtSecurityDefinition(
                issuer="https://dev-abc123.us.auth0.com",
                audiences=["https://test-security-definition/"],
            )
        }
    )
)
```

{% /tab %}
{% /tabs %}

### Overriding API-level security

Individual routes can also have their own security rules applied for any `securityDefinition` supplied at the API level.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
galaxyApi.get('planets/unsecured-planet', async (ctx) => {}, {
  // override top level security, and apply no security to this route
  security: {},
});

galaxyApi.post('planets/unsecured-planet', async (ctx) => {}, {
  // override top level security to require user.write scope to access
  security: {
    user: ['user.write'],
  },
});
```

{% /tab %}
{% tab label="Python" %}

```python
# Override top level security, and apply no security to the route
@galaxy_api.get("planets/unsecured-planet", opts=MethodOptions(security=dict()))
async def get_planet(ctx):
    pass

# Override top level security to require user.write scope to access
@galaxy_api.post("planets/unsecured-planet", opts=MethodOptions(security={ "user": ['user.write'] }))
async def get_planet(ctx):
    pass
```

{% /tab %}
{% /tabs %}

## Defining Middleware

APIs support middleware at the API level and the route level. Middleware functions are supplied an `HttpContext` object and a `next()` function which calls the next middleware in the chain.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const validate = (ctx, next) => {
  // Perform request validation, etc.
  next();
};
```

{% /tab %}
{% tab label="Python" %}

```python
def validate(ctx, next):
  # Perform request validation, etc.
  next()
```

{% /tab %}
{% /tabs %}

### API level middleware

Middleware defined at the API level will be called on every request on to every route.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api } from '@nitric/sdk';
import { validate, logRequest } from '../middleware';

const customersApi = api('customers', {
  middleware: [logRequest, validate],
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api, ApiOptions
from common.middleware import validate, log_request

customers_api = api("customers", opts=ApiOptions(middleware=[log_request, validate]))
```

{% /tab %}
{% /tabs %}

### Route level middleware

Middleware defined at a route level will only be called for that route.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const customersApi = api('customers');

const getAllCustomers = (ctx) => {};

// Inline using .get()
customersApi.get('/customers', [validate, getAllCustomers]);

// Using .route()
customersApi.route('/customers').get([validate, getAllCustomers]);
```

{% /tab %}
{% tab label="Python" %}

> Route level middleware currently isn't supported in python

{% /tab %}
{% /tabs %}

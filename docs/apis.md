---
title: Building Blocks - APIs
description: Building HTTP APIs with Nitric
---

Nitric has built-in support for web apps and HTTP API development. The `api` resource allows you to create APIs in your applications, including routing, middleware and request handlers.

## Creating APIs

Nitric allows you define named APIs, each with their own routes, middleware, handlers and security.

Here's an example of how to create a new API with Nitric:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api } from '@nitric/sdk';

// each API needs a unique name
const galaxyApi = api('far-away-galaxy-api');

galaxyApi.get('/moon', async ({ req, res }) => {
  res.body = "that's no moon, it's a space station.";
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api

# each API needs a unique name
galaxy_api = api('far-away-galaxy-api')

@galaxy_api.get("/moon")
async def get_moon(ctx):
  ctx.res.body = "that's no moon, it's a space station."

```

{% /tab %}
{% /tabs %}

## Routing

You can define routes and handler functions for incoming requests using methods on your API objects.

For example, you can declare a route that handles `POST` requests using the `post()` method. When declaring routes you provide the path to match and a callback that will serve as the handler for matching requests.

> Depending on the language SDK, callbacks are either passed as parameters or defined using decorators.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
galaxyApi.get('/planets', async (ctx) => {
  ctx.res.json(getPlanetList());
});

galaxyApi.post('/planets', async (ctx) => {
  createPlanet(ctx.req.json());
  ctx.res.status = 201;
});
```

{% /tab %}
{% tab label="Python" %}

```python
@galaxy_api.get("/planets")
async def list_planets(ctx):
  ctx.res.body = get_planets_list()

@galaxy_api.post("/planets")
async def create_planet(ctx):
  create_planet(ctx.req.json())
  ctx.res.status = 201

```

{% /tab %}
{% /tabs %}

### Request Context

Nitric provides callbacks with a single context object that gives you everything you need to read requests and write responses. By convention this object is typically named `ctx`.

The context object includes a request `req` and response `res`, which in turn provide convenient methods for reading and writing bodies, as well as auto-extracted parameters and HTTP headers.

#### Parameters

The path string used to declare routes can include named parameters. The values collected from those parameters are automatically included in the context object under `ctx.req.params`.

> Path parameters are denoted by a colon prefix `:`

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { getPlanet, updatePlanet, deletePlanet } from 'planets';

// create a dynamic route and extract the parameter `name`
galaxyApi.get('/planets/:name', async (ctx) => {
  const { name } = ctx.req.params;
  ctx.res.json(getPlanet(name));
});
```

{% /tab %}
{% tab label="Python" %}

```python
from planets import get_planet, update_planet, delete_planet

# create a dynamic route and extract the parameter `name`
@galaxy_api.get("/planets/:name")
async def get_planet_route(ctx):
  name = ctx.req.params['name']
  ctx.res.body = get_planet(name)

```

{% /tab %}
{% /tabs %}

#### HTTP status and headers

The response object provides `status` and `headers` properties you can use to return HTTP status codes and headers.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
// return a redirect response using status 301
galaxyApi.get('/planets/alderaan', async (ctx) => {
  ctx.res.status = 301;
  ctx.res.headers['Location'] = ['https://example.org/debris/alderann'];
});
```

{% /tab %}
{% tab label="Python" %}

```python
# return a redirect response using status 301
@galaxy_api.get("/planets/alderaan")
async def find_alderaan(ctx):
  ctx.res.status = 301
  ctx.res.headers["Location"] = "https://example.org/debris/alderann"

```

{% /tab %}
{% /tabs %}

## API Security

APIs can include security definitions for OIDC-compatible providers such as [Auth0](https://auth0.com/), [FusionAuth](https://fusionauth.io/) and [AWS Cognito](https://aws.amazon.com/cognito/).

> One benefit of applying security at the API is that cloud providers, such as AWS, Google Cloud and Azure, support rejecting unauthenticated or unauthorized requests at the API Gateway before invoking your application code. In serverless environments this reduces costs by limiting application load from unwanted or malicious requests.

### Authentication

APIs can be configured to automatically authenticate and allow or reject incoming requests. A `securityDefinitions` object can be provided, which _defines_ the authentication requirements that can later be enforced by the API.

The security definition describes the kind of authentication to perform and the configuration required to perform it. For a [JWT](https://jwt.io/) this configuration includes the JWT issuer and audiences.

> ⚠️ Note: security definitions only define **available** security requirements for an API, they don't automatically **apply** those requirements.

Once a security definition is available it can be applied to the entire API or selectively to individual routes.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api } from '@nitric/sdk';

const helloApi = api('main', {
  // declare security definition named 'default'.
  securityDefinitions: {
    default: {
      kind: 'jwt',
      issuer: 'https://dev-abc123.us.auth0.com',
      audiences: ['https://test-security-definition/'],
    },
  },
  // apply the 'default' security definition to all routes in this API.
  security: {
    default: [],
  },
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api, ApiOptions, JwtSecurityDefinition

helloApi = api("main", opts=ApiOptions(
        # declare security definition named 'default'.
        security_definitions={
            "default": JwtSecurityDefinition(
                issuer="https://dev-abc123.us.auth0.com",
                audiences=["https://test-security-definition/"],
            )
        }
        # apply the 'default' security definition to all routes in this API.
        security={
            "default": [],
        },
    )
)
```

{% /tab %}
{% /tabs %}

### Authorization

In addition to authentication, Nitric APIs can also be configured to perform authorization based on scopes. Again, this can be done at the top level of the API or on individual routes.

Add the required scopes to the `security` object when applying a security definition.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const helloApi = api('main', {
  security: {
    // only authorize requests with the 'user.read' scope
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
            # only authorize requests with the 'user.read' scope
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

For an in-depth tutorial look at the [Auth0 integration guide](./guides/secure-api-auth0.md)

### Override API-level security

Individual routes can have their own security rules which apply any available `securityDefinition`. The requirement defined on routes override any requirements previously set at the top level of the API.

This allows you to selectively increase or decrease the security requirements for specific routes.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
galaxyApi.get('planets/unsecured-planet', async (ctx) => {}, {
  // override top level security, to remove security from this route
  security: {},
});

galaxyApi.post('planets/secured-planet', async (ctx) => {}, {
  // override top level security to require user.write scope to access
  security: {
    user: ['user.write'],
  },
});
```

{% /tab %}
{% tab label="Python" %}

```python
# override top level security, to remove security from this route
@galaxy_api.get("planets/unsecured-planet", opts=MethodOptions(security=dict()))
async def get_planet(ctx):
    pass

# override top level security to require user.write scope to access
@galaxy_api.post("planets/secured-planet", opts=MethodOptions(security={ "user": ['user.write'] }))
async def get_planet(ctx):
    pass
```

{% /tab %}
{% /tabs %}

## Defining Middleware

Behavior that's common to several APIs or routes can be applied using middleware functions. Multiple middleware can also be composed to create a cascading set of steps to perform on incoming requests or outgoing responses.

Middleware functions look nearly identical to handlers except for an additional parameter called `next`, which is the next middleware or handler to be called in the chain. By providing each middleware the next middleware in the chain it allows them to intercept requests, response and errors to perform operations like logging, decoration, exception handling and many other common tasks.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
async function validate(ctx, next) {
  if (!ctx.req.headers['content-type']) {
    ctx.res.status = 400;
    ctx.res.body = 'header Content-Type is required';
    return ctx;
  }
  return await next(ctx);
}
```

{% /tab %}
{% tab label="Python" %}

```python
async def validate(ctx, nxt: HttpMiddleware):
  if ctx.req.headers['content-type'] is None:
    ctx.res.status = 400;
    ctx.res.body = "header Content-Type is required"
    return ctx
  return await nxt(ctx)
```

{% /tab %}
{% /tabs %}

### API level middleware

Middleware defined at the API level will be called on every request to every route.

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

Middleware defined at the route level will only be called for that route.

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

---
title: Node.js - api.patch()
description: Reference for Nitric's Node.js library - Register an API route and set a specific HTTP PATCH handler on that route.
---

Register an API route and set a specific HTTP PATCH handler on that route.

> This method is a convenient short version of [api().route().patch()](./api-route-patch)

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

api('public').patch(`/customers/:${PARAM_ID}`, (ctx) => {
  // construct response for the PATCH: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

## Parameters

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [create a route with path params](#create-a-route-with-path-params)

---

**...middleware** required `HttpMiddleware`

One or more middleware functions to use as the handler for HTTP requests. Handlers can be sync or async.

---

## Examples

### Register a handler for PATCH requests

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

api('public').patch(`/customers/:${PARAM_ID}`, (ctx) => {
  const id = ctx.req.params[PARAM_ID];
  // handle the PATCH request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const PARAM_ID = 'customerId';

const patchCustomer = (ctx) => {
  const id = ctx.req.params[PARAM_ID];
  // handle the PATCH request...
  const responseBody = {};
  ctx.res.json(responseBody);
};

api('public').patch(`/customers/:${PARAM_ID}`, validate, patchCustomer);
```

### Access the request body

The PATCH request body is accessible from the `ctx.req` object.

```javascript
import { api } from '@nitric/sdk';

api('public').patch(`/customers`, (ctx) => {
  const customerData = ctx.req.data;
  // parse, validate and store the request payload...
});
```

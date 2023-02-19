---
title: Node.js - api.get()
description: Reference for Nitric's Node.js library - Register an API route and set a specific HTTP GET handler on that route.
---

Register an API route and set a specific HTTP GET handler on that route.

> This method is a convenient short version of [api().route().get()](./api-route-get)

```javascript
import { api } from '@nitric/sdk';

api('public').get('/customers', (ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

## Parameters

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [create a route with path params](#create-a-route-with-path-params)

---

**middleware** required `HttpMiddleware` | `HttpMiddleware[]`

One or more middleware functions to use as the handler for HTTP requests. Handlers can be sync or async

---

**opts** optional `object`

Additional options when creating method.

| Properties                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **security** optional `map<string, string[]>` <br/> Security rules to apply with scopes to the entire API. Keys must match a `securityDefinition` |

---

## Examples

### Register a handler for GET requests

```javascript
import { api } from '@nitric/sdk';

api('public').get('/customers', (ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const getAllCustomers = (ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
};

api('public').get('/customers', [validate, getAllCustomers]);
```

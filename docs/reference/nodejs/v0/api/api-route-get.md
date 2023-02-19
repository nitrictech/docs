---
title: Node.js - api.route.get()
description: Reference for Nitric's Node.js library - Register a handler for HTTP GET requests to the route.
---

Register a handler for HTTP GET requests to the route.

```javascript
import { api } from '@nitric/sdk';

const customerRoute = api('public').route(`/customers`);

customerRoute.get((ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

## Parameters

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

const customerRoute = api('public').route(`/customers`);

customerRoute.get((ctx) => {
  // handle the GET request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const getCustomer = (ctx) => {
  // handle the GET request...
  const responseBody = {};
  ctx.res.json(responseBody);
};

const customerRoute = api('public').route(`/customers`);

customerRoute.get([validate, getCustomer]);
```

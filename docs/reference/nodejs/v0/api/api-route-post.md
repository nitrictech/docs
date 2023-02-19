---
title: Node.js - api.route.post()
description: Reference for Nitric's Node.js library - Register a handler for HTTP POST requests to the route.
---

Register a handler for HTTP POST requests to the route.

```javascript
import { api } from '@nitric/sdk';

const customerRoute = api('public').route(`/customers`);

customerRoute.post((ctx) => {
  // construct response for the POST: /customers request...
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

### Register a handler for POST requests

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

const customerRoute = api('public').route(`/customers`);

customerRoute.post((ctx) => {
  // handle the POST request...
  const responseBody = {};
  ctx.res.json(responseBody);
});
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const postCustomer = (ctx) => {
  // handle the POST request...
  const responseBody = {};
  ctx.res.json(responseBody);
};

const customerRoute = api('public').route(`/customers`);

customerRoute.post([validate, postCustomer]);
```

### Access the request body

The POST request body is accessible from the `ctx.req` object.

```javascript
import { api } from '@nitric/sdk';

const customerRoute = api('public').route(`/customers`);

customerRoute.post((ctx) => {
  const customerData = ctx.req.data;
  // parse, validate and store the request payload...
});
```

---
title: Node.js - api.route.patch()
description: Reference for Nitric's Node.js library - Register a handler for HTTP PATCH requests to the route.
---

Register a handler for HTTP PATCH requests to the route.

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.patch((ctx) => {
  // construct response for the PATCH: /customers/:customerId request...
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

### Register a handler for PATCH requests

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.patch((ctx) => {
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

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.patch([validate, patchCustomer]);
```

### Access the request body

The PATCH request body is accessible from the `ctx.req` object.

```javascript
import { api } from '@nitric/sdk';

const PARAM_ID = 'customerId';

const customerRoute = api('public').route(`/customers/:${PARAM_ID}`);

customerRoute.patch((ctx) => {
  const customerData = ctx.req.data;
  // parse, validate and store the request payload...
});
```

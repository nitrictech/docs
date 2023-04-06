---
title: Node.js - api()
description: Reference for Nitric's Node.js library - Create APIs with the Nitric Node.js SDK
---

Creates a new HTTP API.

```javascript
import { api } from '@nitric/sdk';

const publicApi = api('public');
```

## Parameters

---

**name** required `string`

The unique name of this API within the app. Subsequent calls to `api` with the same name will return the same object.

---

**options** optional `object`

Additional options when creating the API.

| Properties                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **path** optional `string` <br/> base path for all routes in the API.                                                                             |
| **middleware** optional `HttpMiddleware or HttpMiddleware[]` <br/> Middleware to apply to all routes and methods of the API.                      |
| **securityDefinitions** optional `map<string, SecurityDefiniton>` <br/> Security definitions defined by this API.                                 |
| **security** optional `map<string, string[]>` <br/> Security rules to apply with scopes to the entire API. Keys must match a `securityDefinition` |

---

**SecurityDefinition**

A `SecurityDefintion` object is one of the following:

**JWTSecurityDefinition**

| Properties                                                                                       |
| ------------------------------------------------------------------------------------------------ |
| **kind** `string` <br/> value must be `jwt`                                                      |
| **issuer** `string` <br/> the issuer for the JWT tokens e.g. `https://account.region.auth0.com`. |
| **audiences** `string[]` <br/> the `aud` that will be applied to JWT tokens from the issuer.     |

---

## Notes

The `middleware` property on the `options` param is useful for applying universal middleware such as CORS headers or Auth, across an entire API from a single place.

## Examples

### Create an API

```javascript
import { api } from '@nitric/sdk';

const publicApi = api('public');
```

### Create an API with universal middleware

```javascript
import { api } from '@nitric/sdk';
import { authMiddleware } from '../middleware';

const privateApi = api('private', { middleware: authMiddleware });
```

### Define middleware

```javascript
const authMiddleware = (ctx, next) => {
  // Perform auth validation.
  next(ctx);
};
```

## Notes

Middleware functions are supplied an `HttpContext` object and a `next()` function which calls the next middleware in the chain.

### Create an API with a base path

If you need to put all the routes in your api below a shared base path, you can do that with the `path` option. In this example we ensure all routes start with `/api/v1/` before the route specific path.

```javascript
import { api } from '@nitric/sdk';

const apiV1 = api('private', { path: '/api/v1' });
```

### Apply JWT authentication to an API

```javascript
import { api, jwt } from '@nitric/sdk';

const secureApi = api('secure', {
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
      // in this case users will require the products:read scope to access the API
      'products:read',
    ],
  },
});
```

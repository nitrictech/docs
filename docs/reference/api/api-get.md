Register a route and set the HTTP `GET` handler for that route.

> This method is a convenient short version of [route.get()](./api-route-get)

```javascript
import { api } from '@nitric/sdk';

const customersRoute = api('public').get('/customers', (ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
})
```

## Parameters

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [create a route with path params](#create-a-route-with-path-params)

---

**...middleware** required `HttpMiddleware`

One or more middleware functions to use as the handler for `GET` requests.

## Examples

### Register a `GET` handler function

```javascript
import { api } from '@nitric/sdk';

const customersRoute = api('public').get('/customers', (ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
})
```

### Chain multiple handlers or middleware

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```javascript
import { api } from '@nitric/sdk'
import { validationMiddleware } from '../middleware'

const getAllCustomers = (ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
}

const customersRoute = api('public').get('/customers', validationMiddleware, getAllCustomers)
```


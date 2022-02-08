The following links all redirect here:

- `api.get()` - HTTP `GET`
- `api.post()` - HTTP `POST`
- `api.put()` - HTTP `PUT`
- `api.delete()` - HTTP `DELETE`
- `api.patch()` - HTTP `PATCH`

All of these methods register an API route and set a specific HTTP method handler on that route.

> These methods are a convenient short versions of [route.get()](./api-route-get), [route.post()](./api-route-post), etc.

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

**...middleware** required `HttpMiddleware`

One or more middleware functions to use as the handler for HTTP requests.

---

## Examples

### Register a method handler function

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

api('public').get('/customers', validate, getAllCustomers);
```

### Access the request body

For methods that include a request body, such as `POST` and `PUT`, you can access the body from the `ctx.req` object.

```javascript
import { api } from '@nitric/sdk';

api('public').post('/customers', (ctx) => {
  const customerData = ctx.req.data;
  // parse, validate and store the request payload...
});
```

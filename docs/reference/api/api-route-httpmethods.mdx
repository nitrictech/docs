The following links all redirect here:

- `route.all()` - All HTTP METHODS
- `route.get()` - HTTP `GET`
- `route.post()` - HTTP `POST`
- `route.put()` - HTTP `PUT`
- `route.delete()` - HTTP `DELETE`
- `route.patch()` - HTTP `PATCH`

All of these methods register a function as the handler for the specified HTTP method.

```javascript
import { api } from '@nitric/sdk';

const customersRoute = api('public').route('/customers')

customersRoute.get(ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
})
```

## Parameters

---

**...middleware** required `HttpMiddleware`

One or more functions to use as the handler for requests.

---

## Notes

When using the `all()` method to register a single function as the handler for all HTTP methods, none of the other methods should be defined on that route.

```javascript
import { api } from '@nitric/sdk';

const customersRoute = api('public').route('/customers');

customersRoute.all((ctx) => {
  /* handle all requests */
});

// Don't call `get()`, `post()`, etc., they're already handled by `all()`
customersRoute.get((ctx) => {
  /* this handler won't work */
});
```

## Examples

### Register a method handler function

```javascript
import { api } from '@nitric/sdk';

const customersRoute = api('public').route('/customers')

customersRoute.get(ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
})
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```javascript
import { api } from '@nitric/sdk';
import { validate } from '../middleware';

const customersRoute = api('public').route('/customers');

const getAllCustomers = (ctx) => {
  // construct response for the GET: /customers request...
  const responseBody = {};
  ctx.res.json(responseBody);
};

customersRoute.get(validate, getAllCustomers);
```

### Access the request body

For methods that include a request body, such as `POST` and `PUT`, you can access the body from the `ctx.req` object.

```javascript
import { api } from '@nitric/sdk';

const customersRoute = api('public').route('/customers');

customersRoute.post((ctx) => {
  const customerData = ctx.req.data;
  // parse, validate and store the request payload...
});
```

### Register handlers for multiple routes

One of the main benefits of creating routes, then handlers is you can define multiple method handlers in the same file.

```javascript
import { api } from '@nitric/sdk';
import {
  listCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
} from '../handlers';

const publicApi = api('public');

const customersRoute = publicApi.route('/customers');

customersRoute.get(listCustomers);
customersRoute.post(createCustomer);

const customerRoute = publicApi.route('/customers/:customerId');

customersRoute.get(getCustomer);
customersRoute.put(updateCustomer);
```

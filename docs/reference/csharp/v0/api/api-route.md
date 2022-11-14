---
title: api.route()
description: Creates a new route (path) within an API.
---

Creates a new route (path) within an API.

```c#
using Nitric.Sdk;

var route = Nitric.Api("main").Route("/customers");
```

## Parameters

---

**match** required `string`

The path matcher to use for this route. Calling `route` on the same API more than once with the same matcher will return the same route object. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [create a route with path params](#create-a-route-with-path-params)

---

**options** optional `object`

Additional options when creating the route.

| Properties                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------- |
| **middleware** optional `HttpMiddleware` or `HttpMiddleware[]` <br/> Middleware to apply to all methods on this route. |

---

## Notes

The `middleware` property on the `options` param is useful for applying universal middleware such as CORS headers or Auth, across an entire route. However, if methods aren't registered, the route won't be deployed. If you need to run the same handler for all methods on a route, you should use [route.all()](./api-route-all)

## Examples

### Create a route

```javascript
using Nitric.Sdk;

var route = Nitric.Api("main").Route("/customers");
```

### Create a route with path params

Route paths can include dynamic parameters. These values will automatically be parsed and provided in the context object for your middleware and handlers as a `string`.

For example, if you have a customers path and you want to include a `customerId` param you would define the route like this.

```javascript
using Nitric.Sdk;

var route = Nitric.Api("main").Route("/customers/:customerId");
```

### Create a route with middleware

```c#
using Nitric.Sdk;

var route = Nitric.Api("main").Route("/customers", (context, next) => {
    var user = context.Req.PathParams["userId"];

    // Validate the user identity
    if (user != "1234")
    {
        context.Res.Text($"User {user} is unauthorised");
        context.Res.Status = 403;

        // Return prematurely to end the middleware chain.
        return context;
    }

    // Call next to continue the middleware chain.
    return next(context);
});
```

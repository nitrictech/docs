---
title: api.delete()
description: Register an API route and set a specific HTTP DELETE handler on that route.
---

Register an API route and set a specific HTTP DELETE handler on that route.

> This method is a convenient short version of [api().route().delete()](./api-route-delete)

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Delete("/hello/:name", context => {
  var name = context.Req.PathParams.get("name");

  context.Res.Text($"Deleting {name}!");

  return context;
});
```

## Parameters

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [create a route with path params](#create-a-route-with-path-params)

---

**...middleware** required `Middleware<HttpContext>` or `Func<HttpContext, HttpContext>`

One or more middleware functions to use as the handler for HTTP requests. Handlers can be sync or async.

---

## Examples

### Register a handler for DELETE requests

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Delete("/hello/:name", context => {
  var name = context.Req.PathParams.get("name");

  context.Res.Text($"Deleting {name}!");

  return context;
});
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Delete("/hello/:userId", 
  (context, next) => {
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
  }, (context, next) => {
    var user = context.Req.PathParams["userId"];

    context.Res.Text($"Deleting {user}");

    return next(context);
  }
);

Nitric.run();
```

### Access the request body

The DELETE request body is accessible from the `context.Req` object.

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Delete("/hello/:name", context => {
  var body = context.Req.FromJson<Dictionary<string, string>>();
  // parse, validate and store the request payload...
});

Nitric.run();
```

---
title: api.post()
description: Register an API route and set a specific HTTP POST handler on that route.
---

Register an API route and set a specific HTTP POST handler on that route.

> This method is a convenient short version of [api().route().post()](./api-route-post)

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Post("/hello/:name", context => {
  var name = context.Req.PathParams.get("name");

  context.Res.Text($"Creating {name}!");

  return context;
});

Nitric.run();
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

### Register a handler for POST requests

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Post("/hello/:name", context => {
  var name = context.Req.PathParams.get("name");

  context.Res.Text($"Creating {name}!");

  return context;
});

Nitric.run();
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Post("/hello/:userId", 
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

    context.Res.Text($"Creating {user}");

    return next(context);
  }
);

Nitric.run();
```

### Access the request body

The POST request body is accessible from the `ctx.req` object.

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");

api.Post("/hello/:name", context => {
  var body = context.Req.FromJson<Dictionary<string, string>>();
  // parse, validate and store the request payload...
});

Nitric.run();
```

---
title: api.route.all()
description: Register a single handler for all HTTP Methods (GET, POST, PUT, DELETE, PATCH) on the route.
---

Register a single handler for all HTTP Methods (GET, POST, PUT, DELETE, PATCH) on the route.

```csharp
using Nitric.Sdk;

var route = Nitric.Api("main").Route("/customers");

route.All(context => {
    // Construct a response for all incoming HTTP requests
    var responseBody = new Dictionary<string, string>();
    context.Res.Json(responseBody);

    return context;
});

Nitric.Run();
```

## Parameters

---

**...middleware** required `Middleware<HttpContext>` or `Func<HttpContext, HttpContext>`

One or more functions to use as the handler for requests. Handlers can be sync or async.

---

## Notes

When using the `All()` method to register a single function as the handler for all HTTP methods, none of the other methods should be defined on that route.

```csharp
using Nitric.Sdk;

var route = Nitric.Api("main").Route("/customers");

route.All(context => {
  /* handle all requests */
});

// Don't call `Get()`, `Post()`, etc., they're already handled by `All()`
route.Get(context => {
  // This handler won't work
})

Nitric.Run();
```

## Examples

### Register a method handler function

```csharp
using Nitric.Sdk;

var route = Nitric.Api("main").Route("/customers");

route.All(context => {
    // Construct a response for all incoming HTTP requests
    var responseBody = new Dictionary<string, string>();
    context.Res.Json(responseBody);

    return context;
});

Nitric.Run();
```

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

```csharp
var route = Nitric.Api("main").Route("/customers");

route.All((context, next) => {
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

    context.Res.Text($"Handling {user}");

    return next(context);
  }
);

Nitric.Run();
```

### Access the request body

For methods that include a request body, such as `POST` and `PUT`, you can access the body from the `ctx.req` object.

```csharp
using Nitric.Sdk;

var api = Nitric.Api("main").Route("/customers");

route.All(context => {
  var body = context.Req.FromJson<Dictionary<string, string>>();
  // parse, validate and store the request payload...
});

Nitric.Run();
```

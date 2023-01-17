---
title: api.delete()
description: Register an API route and set a specific HTTP DELETE handler on that route.
---

Register an API route and set a specific HTTP DELETE handler on that route.

> This method is a convenient short version of [api().route().delete()](./api-route-delete)

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

api.delete("/hello/:name", (ctx) -> {
    var name = ctx.getReq().getParams().get("name");

    ctx.getResp().setBody(String.format("Deleting %s", name).getBytes());

    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

api.delete("/hello/:name") { ctx ->
    val name = ctx.req.params["name"]

    ctx.resp.text("Deleting $name")

    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**match** required `String`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [create a route with path params](#create-a-route-with-path-params)

---

**...middleware** required `Middleware<HttpContext>` or `Func<HttpContext, HttpContext>`

One or more middleware functions to use as the handler for HTTP requests. Handlers can be sync or async.

---

## Examples

### Register a handler for DELETE requests

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

api.delete("/hello/:name", (ctx) -> {
    var name = ctx.getReq().getParams().get("name");

    ctx.getResp().setBody(String.format("Deleting %s", name).getBytes());

    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

api.delete("/hello/:name") { ctx ->
    val name = ctx.req.params["name"]

    ctx.resp.text("Deleting $name")

    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Chain functions as a single method handler

When multiple functions are provided they will be called as a chain. If one succeeds, it will move on to the next. This allows middleware to be composed into more complex handlers.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
api.delete("/customer/:customerId", List.of((ctx, next) -> {
    var user = ctx.getReq().getParams().get("customerId");

    // Validate the user identity
    if (user.equals("1234"))
    {
        ctx.getResp().text(String.format("User %s is unauthorised", user));
        ctx.getResp().setStatus(403);

        // Return prematurely to end the middleware chain.
        return ctx;
    }

    // Call next to continue the middleware chain.
    return next.invoke(ctx);
}, (ctx, next) -> {
    var user = ctx.getReq().getParams().get("customerId");

    ctx.getResp().text(String.format("Deleting %s", user));

    return next.invoke(ctx);
}));
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
api.delete("/customer/:customerId", listOf(Middleware { ctx, next ->
    val user = ctx.req.params["customerId"]

    // Validate the user identity
    if (user == "1234")
    {
        ctx.resp.text("User $user is unauthorised")
        ctx.resp.status = 403

        // Return prematurely to end the middleware chain.
        return@Middleware ctx;
    }

    next(ctx)
}, Middleware { ctx, next ->
    val user = ctx.req.params["customerId"];

    ctx.resp.text("Deleting $user");

    next(ctx)
}))
```

{% /tab %}

{% /tabs %}

### Access the request body

The DELETE request body is accessible from the `context.Req` object.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

api.delete("/customer/:customerId", (ctx) -> {
    var body = ctx.getReq().text();

    ...

    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

api.delete("/customer/:customerId") { ctx ->
    val body = ctx.req.text()

    ...

    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

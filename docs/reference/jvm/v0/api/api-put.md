---
title: api.put()
description: Register an API route and set a specific HTTP PUT handler on that route.
---

Register an API route and set a specific HTTP PUT handler on that route.

> This method is a convenient short version of [api().route().put()](./api-route-put)

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

api.put("/hello/:name", (ctx) -> {
    var name = ctx.getReq().getParams().get("name");

    ctx.getResp().setBody(String.format("Updating %s", name).getBytes());

    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

api.put("/hello/:name") { ctx ->
    val name = ctx.req.params["name"]

    ctx.resp.text("Updating $name")

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

**...middleware** required `Handler<HttpContext>` or `List<Handler<HttpContext>>`

One or more middleware functions to use as the handler for HTTP requests. Handlers can be sync or async.

---

## Examples

### Register a handler for PUT requests

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

api.put("/hello/:name", (ctx) -> {
    var name = ctx.getReq().getParams().get("name");

    ctx.getResp().setBody(String.format("Updating %s", name).getBytes());

    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

api.put("/hello/:name") { ctx ->
    val name = ctx.req.params["name"]

    ctx.resp.text("Updating $name")

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
api.put("/customer/:customerId", List.of((ctx, next) -> {
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

    ctx.getResp().text(String.format("Updating %s", user));

    return next.invoke(ctx);
}));
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
api.put("/customer/:customerId", Middleware { ctx, next ->
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

    ctx.resp.text("Updating $user");

    next(ctx)
})
```

{% /tab %}

{% /tabs %}

### Access the request body

The PUT request body is accessible from the `ctx.req` object.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

api.put("/customer/:customerId", (ctx) -> {
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

api.put("/customer/:customerId") { ctx ->
    val body = ctx.req.text()

    ...

    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

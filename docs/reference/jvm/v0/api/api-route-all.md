---
title: api.route.all()
description: Register a single handler for all HTTP Methods (GET, POST, PUT, DELETE, PATCH) on the route.
---

Register a single handler for all HTTP Methods (GET, POST, PUT, DELETE, PATCH) on the route.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

var route = api.route("/hello/:name");

route.all((ctx) -> {
    var name = ctx.getReq().getParams().get("name");

    ctx.getResp().setBody(String.format("Handling %s", name).getBytes());

    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

val route = api.route("/hello/:name")

route.all { ctx ->
    val name = ctx.req.params["name"]

    ctx.resp.text("Handling $name")

    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**...middleware** required `Handler<HttpContext>` or `List<Handler<HttpContext>>`

One or more functions to use as the handler for requests. Handlers can be sync or async.

---

## Notes

When using the `All()` method to register a single function as the handler for all HTTP methods, none of the other methods should be defined on that route.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

var route = api.route("/hello/:name");

route.all((ctx) -> {
    // Handle request
});

// Don't call `get()`, `post()`, etc., they're already handled by `all()`
route.get((ctx) -> {
    // Won't work
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

val route = api.route("/hello/:name")

route.all { ctx ->
    // Handle request
}

// Don't call `get()`, `post()`, etc., they're already handled by `all()`
route.get { ctx ->
    // Won't work
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Examples

### Register a method handler function

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

var route = api.route("/hello/:name");

route.all((ctx) -> {
    var name = ctx.getReq().getParams().get("name");

    ctx.getResp().setBody(String.format("Handling %s", name).getBytes());

    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

val route = api.route("/hello/:name")

route.all { ctx ->
    val name = ctx.req.params["name"]

    ctx.resp.text("Handling $name")

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
var route = api.route("/customer/:customerId");

route.all("/customer/:customerId", List.of((ctx, next) -> {
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

    ctx.getResp().text(String.format("Handling %s", user));

    return next.invoke(ctx);
}));
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
val route = api.route("/customer/:customerId")

api.all(listOf(Middleware { ctx, next ->
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
}))
```

{% /tab %}

{% /tabs %}

### Access the request body

For methods that include a request body, such as `POST` and `PUT`, you can access the body from the `ctx.req` object.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

var route = api.route("/customer/:customerId");

route.all((ctx) -> {
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

val route = api.route("/customer/:customerId")

route.all { ctx ->
    val body = ctx.req.text()

    ...

    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

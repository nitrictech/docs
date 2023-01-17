---
title: api.route()
description: Creates a new route (path) within an API.
---

Creates a new route (path) within an API.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

var route = api.route("/hello/:name");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

val route = api.route("/hello/:name")

Nitric.run()
```

{% /tab %}

{% /tabs %}

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

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

var route = api.route("/hello/:name");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

val route = api.route("/hello")

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Create a route with path params

Route paths can include dynamic parameters. These values will automatically be parsed and provided in the context object for your middleware and handlers as a `string`.

For example, if you have a customers path and you want to include a `customerId` param you would define the route like this.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

var route = api.route("/customer/:customerId");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

val route = api.route("/customer/:customerId")

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Create a route with middleware

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
api.route("/hello/:name");

var route = api.route("/customer/:customerId", (ctx, next) => {
  var user = ctx.getReq().getParams()["customerId"];

  if (user != "1234") {
    ctx.getResp().text(String.format("User %s is unauthorised", user));
    ctx.getResp().setStatus(403);

    return ctx;
  }

  return next.invoke(ctx);
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
val route = api.route("/customer/:customerId", Middleware { ctx, next ->
    val user = ctx.req.params["customerId"];

    // Validate the user identity
    if (user != "1234") {
        ctx.resp.text("User $user is unauthorised")
        ctx.resp.status = 403

        // Return prematurely to end the middleware chain.
        return@Middleware ctx
    }

    // Call next to continue the middleware chain.
    next(ctx)
})

Nitric.Run();
```

{% /tab %}

{% /tabs %}

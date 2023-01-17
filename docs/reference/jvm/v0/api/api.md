---
title: api()
description: Create APIs with the Nitric C# SDK
---

Creates a new HTTP API.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**name** required `String`

The unique name of this API within the app. Subsequent calls to `api` with the same name will return the same object.

---

**securityDefinitions** optional `Map<String, SecurityDefinition>`

Security definitions defined by this API.

---

**security** optional `Map<String, String[]>`

Security rules to apply with scopes to the entire API. Keys must match a `securityDefinition`

---

**SecurityDefinition**

A `SecurityDefinition` object is one of the following:

**JWTSecurityDefinition**

| Properties                                                                                       |
| ------------------------------------------------------------------------------------------------ |
| **issuer** `string` <br/> the issuer for the JWT tokens e.g. `https://account.region.auth0.com`. |
| **audiences** `string[]` <br/> the `aud` that will be applied to JWT tokens from the issuer.     |

---

## Notes

The `middleware` property on the `options` param is useful for applying universal middleware such as CORS headers or Auth, across an entire API from a single place.

## Examples

### Create an API

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val api = Nitric.api("main")

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Create an API with universal middleware

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var api = Nitric.INSTANCE.api("main", );

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

Nitric.api("main", ApiOptions(middleware = listOf(
  Middleware { ctx, next ->
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
  }
)))

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Create an API with a base path

If you need to put all the routes in your api below a shared base path, you can do that with the `BaseRoute` option. In this example we ensure all routes start with `/api/v1/` before the route specific path.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.ApiOptions;

var opts = new ApiOptions.Builder().basePath("/api").build();

var api = Nitric.INSTANCE.api("main", opts);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.ApiOptions

val api = Nitric.api("main", ApiOptions(path))

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Apply JWT authentication to an API

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.ApiOptions;
import io.nitric.resources.JwtSecurityDefinition;

var opts = new ApiOptions.Builder()
  // You can optionally apply security rules to the entire API
  // in this case users will require the products:read scope to access the API
  .security(Map.of("user", List.of("products:read")))
  // define a JWT security definition called 'user'
  .securityDefinitions(Map.of("user",

          new JwtSecurityDefinition(
                  "https://example-issuer.com",
                  List.of("YOUR_AUDIENCES")
          ))
  ).build();

var api = Nitric.INSTANCE.api("main", opts);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.ApiOptions
import io.nitric.resources.JwtSecurtyDefinition

val opts = ApiOptions(
    // You can optionally apply security rules to the entire API
    // in this case users will require the products:read scope to access the API
    security = (mapOf("user" to listOf("products:read"))),
    // define a JWT security definition called 'user'
    securityDefinitions =
        mapOf(
            "user" to JwtSecurityDefinition(
                "https://example-issuer.com",
                listOf("YOUR_AUDIENCES")
            )
        )
)

val api = Nitric.api("main", opts)

Nitric.run()
```

{% /tab %}

{% /tabs %}

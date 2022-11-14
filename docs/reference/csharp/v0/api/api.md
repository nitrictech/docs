---
title: api()
description: Create APIs with the Nitric C# SDK
---

Creates a new HTTP API.

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");
```

## Parameters

---

**name** required `string`

The unique name of this API within the app. Subsequent calls to `api` with the same name will return the same object.

---

**securityDefinitions** optional `Dictionary<string, SecurityDefinition>`

Security definitions defined by this API.

---

**security** optional `Dictionary<string, string[]>`

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

```C#
using Nitric.Sdk;

var api = Nitric.Api("main");
```

### Create an API with universal middleware

```C#
using Nitric.Sdk;

private HttpContext ValidateRequest(HttpContext ctx, Func<HttpContext, HttpContext> next)
{
    // Validation logic
    return next(ctx);
}

var api = Nitric.Api("main", new ApiOptions(
    Middleware: new Middleware<HttpContext>[] { ValidateRequest }
));
```

### Create an API with a base path

If you need to put all the routes in your api below a shared base path, you can do that with the `BaseRoute` option. In this example we ensure all routes start with `/api/v1/` before the route specific path.

```C#
using Nitric.Sdk;

var api = Nitric.Api("main", new ApiOptions(
    BaseRoute: "/api/v1"
));
```

### Apply JWT authentication to an API

```C#
using Nitric.Sdk;

var secureApi = Nitric.Api("main", new ApiOptions(
  // You can optionally apply security rules to the entire API         
  Security: new Dictionary<string, string[]>
  {
    // apply the 'user security definition the whole API'
    { 
      "user", 
      // Optionally apply required scopes to this api
      // in this case users will require the products:read scope to access the API
      new string[] { "products:read" } 
    },
  },
  // security requirements for your API are defined here
  SecurityDefinitions: new Dictionary<string, SecurityDefinition>
  {
    // define a security definition called 'user'
    { "user",
      new JwtSecurityDefinition(
        'https://example-issuer.com',
        new string[] { "YOUR_AUDIENCES" }
      )
    }
  }
));
```

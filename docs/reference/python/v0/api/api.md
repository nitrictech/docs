---
title: api()
description: Create APIs with the Nitric Python SDK.
---

Creates a new HTTP API.

```python
from nitric.resources import api

publicApi = api("public")
```

## Parameters

---

**name** required `string`

The unique name of this API within the app. Subsequent calls to `api` with the same name will return the same object.

---

**options** optional `object`

Additional options when creating the API.

| Properties                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **path** optional `string` <br/> base path for all routes in the API.                                                                            |
| **middleware** optional `List[Middleware]` <br/> Middleware to apply to all routes and methods of the API.                                       |
| **securityDefinitions** optional `dict[str, SecurityDefiniton]` <br/> Security definitions defined by this API.                                  |
| **security** optional `dict[str, List[str]]` <br/> Security rules to apply with scopes to the entire API. Keys must match a `securityDefinition` |

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

The `middleware` property on the `options` param is useful for applying universal middleware such as CORS headers, across an entire API from a single place.

## Examples

### Create an API

```python
from nitric.resources import api

publicApi = api("public")
```

### Create an API with universal middleware

```python
from nitric.resources import api, ApiOptions
from myapp.middleware import auth

publicApi = api("public", ApiOptions(middleware: [auth]))
```

### Create an API with a base path

If you need to put all the routes in your api below a shared base path, you can do that with the `path` option. In this example we ensure all routes start with `/api/v1/` before the route specific path.

```python
from nitric.resources import api, ApiOptions

publicApi = api("public", ApiOptions(path: "/api/v1/"))
```

### Apply JWT authentication to an API

```python
from nitric.resources import api, ApiOptions

publicApi = api("public", ApiOptions(
    security_definitions: {
        "user": JwtSecurityDefinition(
            issuer: "https://example-issuer.com"
            audiences: ['YOUR-AUDIENCES']
        )
    },
    security: {
        "user": []
    }
))
```

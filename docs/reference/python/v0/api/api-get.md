---
title: api.get()
description: Register an API route and set a specific HTTP GET handler on that route.
---

Register an API route and set a specific HTTP GET handler on that route.

```python
from nitric.resources import api
from nitric.application import Nitric

publicApi = api("public")

@publicApi.get("/customer/:customerId")
async def customer_get(ctx):
    id = ctx.req.params.customerId

    ctx.res.body = f"Getting {id}"

Nitric.run()
```

## Parameters

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [Examples](#examples)

---

**options** required `MethodOptions`

Options to configure the route such as security options

---

## Examples

### Register a handler for GET requests

```python
from nitric.resources import api
from nitric.application import Nitric

publicApi = api("public")

@publicApi.get("/customer/:customerId")
async def hello_world(ctx):
    id = ctx.req.params.customerId

    ctx.res.body = f"Getting {id}"

Nitric.run()
```

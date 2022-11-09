---
title: api.patch()
description: Register an API route and set a specific HTTP PATCH handler on that route.
---

Register an API route and set a specific HTTP PATCH handler on that route.

```python
from nitric.resources import api
from nitric.application import Nitric

publicApi = api("public")

@publicApi.patch("/customer/:customerId")
async def hello_world(ctx):
    id = ctx.req.params.customerId

    ctx.res.body = f"Updating customer {id}"

Nitric.run()
```

## Parameters

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [examples](#examples).

---

**options** required `MethodOptions`

Options to configure the route such as security options

---

## Examples

### Register a handler for PATCH requests

```python
from nitric.resources import api
from nitric.application import Nitric

publicApi = api("public")

@publicApi.patch("/customer/:customerId")
async def hello_world(ctx):
    id = ctx.req.params.customerId

    ctx.res.body = f"Updating customer {id}"

Nitric.run()
```

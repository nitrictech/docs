---
title: Python - api.methods()
description: Reference for Nitric's Python library - Register an API route that handles a set of specific HTTP verbs.
---

Register an API route that handles a set of specific HTTP verbs.

```python
from nitric.resources import api
from nitric.application import Nitric
from nitric.faas import HttpMethod

publicApi = api("public")

@publicApi.methods([HttpMethod.PUT, HttpMethod.PATCH] "/customer/:customerId")
async def customer_update(ctx):
    id = ctx.req.params.customerId

    ctx.res.body = f"Updating customer {id}"

Nitric.run()
```

## Parameters

---

**methods** required `List[HttpMethod]`

The methods that this route will handle.

---

**match** required `string`

The path matcher to use for the route. Matchers accept path parameters in the form of a colon prefixed string. The string provided will be used as that path parameter's name when calling middleware and handlers. See [examples](#examples)

---

**options** required `MethodOptions`

Options to configure the route such as security options

---

## Examples

### Register a handler for PUT and PATCH requests

```python
from nitric.resources import api
from nitric.application import Nitric

publicApi = api("public")

@publicApi.methods([HttpMethod.PUT, HttpMethod.PATCH] "/customer/:customerId")
async def hello_world(ctx):
    id = ctx.req.params.customerId

    ctx.res.body = f"Updating customer {id}"

Nitric.run()
```

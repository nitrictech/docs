---
title: topic.subscribe()
description: Subscribe a handler to a topic and receive new events for processing.
---

Subscribes to a topic.

```python
from nitric.resources import topic
from nitric.faas import EventContext

updates = topic("updates")

@updates.subscribe
async def updates_sub(ctx: EventContext):
    print(ctx.req.payload)
```

## Parameters

---

**middleware** required `Middleware`

The middleware (code) to be triggered by the topic

---

## Examples

### Subscribe to a topic

```python
from nitric.resources import topic
from nitric.faas import EventContext

updates = topic("updates")

@updates.subscribe
async def updates_sub(ctx: EventContext):
    print(ctx.req.payload)
```

## Notes

- A function may only subscribe to a topic once, if multiple subscribers are required, create them in different functions.
- A function may subscribe to OR publish to a topic but not both. This is in place to stop functions calling themselves infinitely.

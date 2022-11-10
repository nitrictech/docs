---
title: topic.publish()
description: Publish new events to the topic.
---

Publishes a topic.

```python
from nitric.resources import topic
from nitric.api import Event

updates = topic('updates').allow('publishing')

await updates.publish(Event(
  payload={'something': 'amazing happened'}
))
```

## Parameters

---

**event** required `Event`

The event to publish to the topic

| Properties                                                                      |
| ------------------------------------------------------------------------------- |
| **id** optional `string`  unique id to apply to the event.                 |
| **payload** required `dict`  payload to send with the event.               |
| **payloadType** optional `string`  a hint to the type of payload supplied. |

---

## Examples

### Publish a topic

```python
from nitric.resources import topic
from nitric.api import Event

updates = topic('updates').allow('publishing')

await updates.publish(Event(
  payload={'something': 'amazing happened'}
))
```

## Notes

- If an id is not supplied with an event, a UUID(v4) will be generated for you.
- A function may subscribe to OR publish to a topic but not both. This is in place to stop functions calling themselves infinitely.

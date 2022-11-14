---
title: topic.publish()
description: Publish new events to the topic.
---

Publish an event (push based message) to a topic.

```c#
using Nitric.Sdk;
using Nitric.Sdk.Resource;
using Nitric.Sdk.Event;

var updates = Nitric.Topic("updates").With(TopicPermission.Publishing);

updates.Publish(new Event {
  Payload = "event payload"
});
```

## Parameters

---

**event** required `Event`

The event to publish to the topic

| Properties                                                                       |
| -------------------------------------------------------------------------------- |
| **id** optional `string` unique id to apply to the event.                        |
| **payload** required `object` payload to send with the event.                    |
| **payloadType** optional `string` a hint to the type of payload supplied.        |

---

## Examples

### Publish a topic

```c#
using Nitric.Sdk;
using Nitric.Sdk.Event;
using Nitric.Sdk.Resource;

var updates = Nitric.Topic("updates").With(TopicPermission.Publishing);

updates.Publish(new Event {
  Payload = "event payload"
});
```

## Notes

- If an id is not supplied with an event a UUID(v4) will be generated for you.
- A function may subscribe to OR publish to a topic but not both.

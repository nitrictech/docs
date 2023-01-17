---
title: topic.publish()
description: Publish new events to the topic.
---

Publish an event (push based message) to a topic.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.api.events.v0.NitricEvent;
import io.nitric.resources.TopicPermission;

var api = Nitric.INSTANCE.api("main");

var topic = Nitric.INSTANCE.topic("new-user").with(TopicPermission.Publishing);

api.post("/user/:id", (ctx) -> {
    var id = ctx.getReq().getParams().get("id");
    topic.publish(new NitricEvent(Map.of("message", String.format("New user %s created", id)), "1234", "none"));
    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.api.events.v0.NitricEvent
import io.nitric.resources.TopicPermission

var api = Nitric.api("main")

var topic = Nitric.topic("new-user").with(TopicPermission.Publishing)

api.post("/user/:id") { ctx ->
    val id = ctx.req.params["id"]
    topic.publish(NitricEvent(mapOf("message" to "New user $id created"), "1234", "none"))
    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**event** required `Event`

The event to publish to the topic

| Properties                                                                |
| ------------------------------------------------------------------------- |
| **id** optional `string` unique id to apply to the event.                 |
| **payload** required `object` payload to send with the event.             |
| **payloadType** optional `string` a hint to the type of payload supplied. |

---

## Examples

### Publish a topic

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.api.events.v0.NitricEvent;
import io.nitric.resources.TopicPermission;

var api = Nitric.INSTANCE.api("main");

var topic = Nitric.INSTANCE.topic("topic").with(TopicPermission.Publishing);

api.post("/user/:id", (ctx) -> {
    var id = ctx.getReq().getParams().get("id");
    topic.publish(new NitricEvent(Map.of("message", String.format("New user %s created", id)), "1234", "none"));
    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.api.events.v0.NitricEvent
import io.nitric.resources.TopicPermission

var api = Nitric.api("main")

var topic = Nitric.topic("topic").with(TopicPermission.Publishing)

api.post("/user/:id") { ctx ->
    val id = ctx.req.params["id"]
    topic.publish(NitricEvent(mapOf("message" to "New user $id created"), "1234", "none"))
    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Notes

- If an id is not supplied with an event a UUID(v4) will be generated for you.
- A function may subscribe to OR publish to a topic but not both.

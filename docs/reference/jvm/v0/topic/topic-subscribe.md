---
title: topic.subscribe()
description: Subscribe a handler to a topic and receive new events for processing.
---

Subscribe a handler to a topic and receive new events for processing.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var topic = Nitric.INSTANCE.topic("new-user");

topic.subscribe(ctx -> {
  // process event
  return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

var topic = Nitric.topic("new-user")

topic.subscribe { ctx ->
  // process event
  ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**middleware** required `Func<EventContext, EventContext>` or `Middleware<EventContext>[]`

The middleware (code) to be triggered by the topic.

---

## Examples

### Subscribe to a topic

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var topic = Nitric.INSTANCE.topic("new-user");

topic.subscribe(ctx -> {
  // process event
  return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

var topic = Nitric.topic("new-user")

topic.subscribe { ctx ->
  // process event
  ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Subscibe to a topic with chained middleware

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var topic = Nitric.INSTANCE.topic("topic");

topic.subscribe(List.of((ctx, next) -> {
    // process event
    return next.invoke(ctx);
}, (ctx, next) -> {
    // process event
    return next.invoke(ctx);
}));

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

var topic = Nitric.topic("topic")

topic.subscribe(listOf((ctx, next) -> {
    // process event
    next(ctx);
}, (ctx, next) -> {
    // process event
    next(ctx);
}));

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Notes

- A function may only subscribe to a topic once, if multiple subscribers are required, create them in different functions.
- A function may subscribe to OR publish to a topic but not both

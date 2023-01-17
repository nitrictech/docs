---
title: schedule.every()
description: Sets the frequency and one or many handlers to be triggered.
---

Sets the frequency and one or many handlers to be triggered.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.faas.v0.Frequency;

Nitric.INSTANCE.schedule("send-reminder").every(3, Frequency.Hours, (ctx) -> {
    // do some processing
    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.faas.v0.Frequency

Nitric.schedule("send-reminder").every(3, Frequency.Hours) { ctx ->
    // do some processing
    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**rate** required `string`

The rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'days', 'hours' or 'minutes'.

**middleware** required `Middleware<EventContext>` or `Middleware<EventContext>[]`

One or more middleware functions to use as the handler which will run on defined frequency.

---

## Examples

### Create a Schedule to run every 3 minutes

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.faas.v0.Frequency;

Nitric.INSTANCE.schedule("send-reminder").every(3, Frequency.Hours, (ctx) -> {
    // do some processing
    return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.faas.v0.Frequency

Nitric.schedule("send-reminder").every(3, Frequency.Hours) { ctx ->
    // do some processing
    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Create a Schedule with multiple middleware/handlers

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.faas.v0.Frequency;

Nitric.INSTANCE.schedule("send-reminder").every(3, Frequency.Hours, List.of(
    (ctx, next) -> {
        // do some processing
        return next.invoke(ctx);
    }, (ctx, next) -> {
        // do some processing
        return next.invoke(ctx);
    }
));

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.faas.v0.Frequency

Nitric.schedule("send-reminder").every(3, Frequency.Hours, listOf(
    (ctx, next) -> {
        // do some processing
        return next.invoke(ctx);
    }, (ctx, next) -> {
        // do some processing
        return next.invoke(ctx);
    }
));

Nitric.run();
```

{% /tab %}

{% /tabs %}

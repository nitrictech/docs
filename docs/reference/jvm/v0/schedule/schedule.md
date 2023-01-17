---
title: schedule()
description: Creates a new Schedule to run a function on a defined frequency.
---

Creates a new Schedule to run a function on a defined frequency.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.faas.v0.Frequency;

var schedule = Nitric.INSTANCE.schedule("send-reminder");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.faas.v0.Frequency

val schedule = Nitric.schedule("send-reminder")

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**description** required `string`

The unique name of this Schedule within the app. Subsequent calls to `Schedule` with the same name will return the same object.

---

## Notes

- Schedules do not require access permissions to be specified.

- Currently, local execution and testing of schedules is not supported.

- You can directly test the functions that respond to scheduled triggers by sending HTTP requests to those functions with the same payload as defined in your schedule.

> Coming Soon

- Local and manual testing of schedules is on our backlog to be completed soon.

## Examples

### Create a Schedule

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.faas.v0.Frequency;

var schedule = Nitric.INSTANCE.schedule("send-reminder");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.faas.v0.Frequency

val schedule = Nitric.schedule("send-reminder")

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Create a Schedule using Cron expression

### Create a Schedule

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.faas.v0.Frequency;

var schedule = Nitric.INSTANCE.schedule("send-reminder").cron("0 0 * * 7", (ctx) -> {
  // send a reminder
  return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.faas.v0.Frequency

val schedule = Nitric.schedule("send-reminder").cron("0 0 * * 7") { ctx ->
  // send a reminder
  ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

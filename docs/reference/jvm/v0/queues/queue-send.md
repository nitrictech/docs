---
title: queue.send()
description: Send tasks to a queue.
---

Send tasks to a queue.

{% tabs query="lang" %}

{% tab label=“Java” %}
{% /tab %}

{% tab label=“Kotlin %}
{% /tab %}

{% /tabs %}

## Parameters

---

**tasks** required `Task` or `Task[]`

A task or an array of tasks to send to the queue.

---

## Examples

### Send a task to a queue

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.api.queues.v0.Task;
import io.nitric.resources.QueuePermission;

var queue = Nitric.INSTANCE.queue("batchQueue").with(QueuePermission.Send);

queue.send(
  new Task(Map.of("message", "This is a payload"), "1234", "5678", "none")
)

Nitric.INSTANCE.run()
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.api.queues.v0.Task
import io.nitric.resources.QueuePermission

var queue = Nitric.queue("batchQueue").with(QueuePermission.Send)

queue.send(
  task(mapOf("message" to "This is a payload"), "1234", "5678", "none")0
)

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Send multiple tasks to a queue

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.api.queues.v0.Task;
import io.nitric.resources.QueuePermission;

var queue = Nitric.INSTANCE.queue("batchQueue").with(QueuePermission.Send);

queue.send(
  new Task(
    Map.of("message", "This is a payload"), "1234", "5678", "none"
  ), new Task(
    Map.of("message", "This is another payload"), "1234", "5678", "none"
  )
);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.api.queues.v0.Task
import io.nitric.resources.QueuePermission

val queue = Nitric.queue("batchQueue").with(QueuePermission.Send)

queue.send(
  Task(mapOf("message" to "This is a payload"), "1234", "5678"),
  Task(mapOf("message" to "This is another payload", "1234", "5678"))
)

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Dealing with failures

In rare cases when sending tasks to a queue some tasks might fail to be sent. The response from `send()` will include an array of any tasks that failed to send. You can process this array to retry or log the error.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.api.queues.v0.Task;
import io.nitric.resources.QueuePermission;

var queue = Nitric.INSTANCE.queue("batchQueue").with(QueuePermission.Send);

var failedTasks = queue.send(
  new Task(
    Map.of("message", "This is a payload"), "1234", "5678", "none"
  ), new Task(
    Map.of("message", "This is another payload"), "1234", "5678", "none"
  )
);

failedTasks.forEach(failedTask ->  {
    System.out.println(failedTask.getMessage());
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.api.queues.v0.Task
import io.nitric.resources.QueuePermission

val queue = Nitric.queue("batchQueue").with(QueuePermission.Send)

val failedTasks = queue.send(
  Task(mapOf("message" to "This is a payload"), "1234", "5678"),
  Task(mapOf("message" to "This is another payload", "1234", "5678"))
)

failedTasks.forEach {
  println(it.message)
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

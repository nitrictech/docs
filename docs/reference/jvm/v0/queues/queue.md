---
title: queue()
description: Creates a new Queue to send and receive asynchronous tasks.
---

Creates a new Queue to send and receive asynchronous tasks.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.QueuePermission;

var queue = Nitric.INSTANCE.queue("batchQueue").with(QueuePermission.Receive, QueuePermission.Send);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.QueuePermission

val queue = Nitric.queue("batchQueue").with(QueuePermission.Receive, QueuePermission.Send)

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**name** required `string`

The unique name of this Queue within the app. Subsequent calls to `queue` with the same name will return the same object.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](../../../../access-control).

### Available permissions:

---

**sending**

This permission allows your code to send new tasks to the queue.

---

**receiving**

This permission allows your code to receive tasks from the queue.

---

### Notes

In most instances, code should either send to or receive from a queue, usually not both.

## Examples

### Create a Queue

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.QueuePermission;

var queue = Nitric.INSTANCE.queue("batchQueue").with(QueuePermission.Receive, QueuePermission.Send);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.QueuePermission

val queue = Nitric.queue("batchQueue").with(QueuePermission.Receive, QueuePermission.Send)

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Receive tasks from a queue

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.QueuePermission;

var queue = Nitric.INSTANCE.queue("batchQueue").with(QueuePermission.Receive);

var tasks = queue.receive(10);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.QueuePermission

val queue = Nitric.queue("batchQueue").with(QueuePermission.Receive)

val tasks = queue.receive()

Nitric.run()
```

{% /tab %}

{% /tabs %}

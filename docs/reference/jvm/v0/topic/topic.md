---
title: topic()
description: Creates a new Topic.
---

Creates a new Topic.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.TopicPermission;

var topic = Nitric.INSTANCE.topic("topic").with(TopicPermission.Publishing);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.TopicPermission

var topic = Nitric.topic("topic").with(TopicPermission.Publishing)

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**name** required `string`

The name of the topic to create.

## Examples

### Create a new topic

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.TopicPermission;

var topic = Nitric.INSTANCE.topic("new-user").with(TopicPermission.Publishing);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.TopicPermission

var topic = Nitric.topic("new-user").with(TopicPermission.Publishing)

Nitric.run()
```

{% /tab %}

{% /tabs %}

## See also

- [topic.subscribe()](./topic-subscribe.md)
- [topic.publish()](./topic-publish.md)

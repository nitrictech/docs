---
title: bucket.file.get()
description: Get the contents of a file from a bucket.
---

Get the contents of a file from a bucket.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Read);

var file = bucket.file("cat.png").read();

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Read)

val file = bucket.file("cat.png").read()

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Examples

### Get a file

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Read);

var file = bucket.file("cat.png").read();

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Read)

val file = bucket.file("cat.png").read()

Nitric.run()
```

{% /tab %}

{% /tabs %}

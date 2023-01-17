---
title: bucket.file.delete()
description: Delete a file from a bucket.
---

Delete a file from a bucket.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Delete);

bucket.file("cat.png").delete();

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Delete)

bucket.file("cat.png").delete()

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Examples

### Delete a file

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Delete);

bucket.file("cat.png").delete();

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Delete)

bucket.file("cat.png").delete()

Nitric.run()
```

{% /tab %}

{% /tabs %}

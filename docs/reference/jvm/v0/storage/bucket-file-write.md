---
title: bucket.file.write()
description: Write a file to a bucket.
---

Write a file to a bucket.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Write);

bucket.file("cat.png").write("This can be anything");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Write)

bucket.file("cat.png").write("This can be anything")

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**data** required `byte[]`

The data to write to the file.

---

## Examples

### Write a file

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Write);

bucket.file("cat.png").write("This can be anything");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Write)

bucket.file("cat.png").write("This can be anything")

Nitric.run()
```

{% /tab %}

{% /tabs %}

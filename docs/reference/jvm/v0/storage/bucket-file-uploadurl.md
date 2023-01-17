---
title: bucket.file.geUploadUrl()
description: Get a upload url for a file from a bucket.
---

Create a upload url for a file within a bucket.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Write);

// Get a download url that lasts 600 seconds
var url = bucket.file("cat.png").getUploadUrl(600);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Write)

// Get a download url that lasts 600 seconds
val url = bucket.file("cat.png").getUploadUrl()

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**expiry** `int`

Seconds until link expiry. Defaults to `600`, Maximum of `604800` (7 days)

---

## Examples

### Create a temporary file upload link for a user

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Write);

// Get a download url that lasts 600 seconds
var url = bucket.file("cat.png").getUploadUrl(600);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Write)

// Get a download url that lasts 600 seconds
val url = bucket.file("cat.png").getUploadUrl()

Nitric.run()
```

{% /tab %}

{% /tabs %}

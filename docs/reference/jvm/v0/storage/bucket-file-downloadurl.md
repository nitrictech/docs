---
title: bucket.file.getDownloadUrl()
description: Get a download url for a file from a bucket.
---

Create a download url for a file within a bucket.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Read);

// Get a download url that lasts 600 seconds
var url = bucket.file("cat.png").getDownloadUrl(600);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Read)

// Get a download url that lasts 600 seconds
val url = bucket.file("cat.png").getDownloadUrl()

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

### Create a readable link that is valid for the next 5 minutes

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Read);

var url = bucket.file("cat.png").getDownloadUrl(300);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Read)

val url = bucket.file("cat.png").getDownloadUrl(300)

Nitric.run()
```

{% /tab %}

{% /tabs %}

### Redirect response to an image url

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var api = Nitric.INSTANCE.api("main");

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Read);

api.get("/images/:id", (ctx) -> {
  var id = ctx.getReq().getParams().get("id");
  var url = bucket.file(id).getDownloadUrl(300);
  ctx.getResp().setStatus(303);
  ctx.getResp().getHeaders().put("Location", List.of(url))
  return ctx;
});

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val api = Nitric.api("main")

val bucket = Nitric.bucket("bucket").with(BucketPermission.Read)

api.get("/images/:id") { ctx ->
    val id = ctx.req.params["id"] ?: ""
    val url = bucket.file(id).getDownloadUrl()
    ctx.resp.status = 303
    ctx.resp.headers["Location"] = listOf(url)
    ctx
}

Nitric.run()
```

{% /tab %}

{% /tabs %}

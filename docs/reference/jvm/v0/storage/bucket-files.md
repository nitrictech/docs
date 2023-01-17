---
title: bucket.files()
description: Get a list of file references for files that exist in the bucket.
---

Get a list of file references for files that exist in the bucket.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Read);

var files = bucket.files();

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Read)

var file s= bucket.files()

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Examples

Deleting all files in a bucket

{% tabs query="lang" %}

{% tab label=“Java” %}
{% /tab %}

{% tab label=“Kotlin %}
{% /tab %}

{% /tabs %}

## Notes

This method returns a list of [File](./bucket-file) references that exist on the bucket.

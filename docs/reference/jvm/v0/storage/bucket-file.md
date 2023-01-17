---
title: bucket.file()
description: Create a reference to a file within a bucket.
---

Create a reference to a file within a bucket.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;

var bucket = Nitric.INSTANCE.bucket("images").with();

var file = bucket.file("cat.png");

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric

val bucket = Nitric.bucket("images").with()

var file = bucket.file("cat.png")

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**name** required `string`

The unique name/reference to the file.

---

## Notes

The file does not need to exist, only a reference to that file is being created.

## Available Operations

- [file.get()](./bucket-file-get)
- [file.write()](./bucket-file-write)
- [file.delete()](./bucket-file-delete)
- [file.signUrl()](./bucket-file-signurl)

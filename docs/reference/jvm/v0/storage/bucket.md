---
title: bucket()
description: Create a new bucket for storing and retrieving files.
---

Create a new bucket for storing and retrieving files.

{% tabs query="lang" %}

{% tab label=“Java” %}

```java
import io.nitric.Nitric;
import io.nitric.resources.BucketPermission;

var bucket = Nitric.INSTANCE.bucket("images").with(BucketPermission.Read, BucketPermission.Write, BucketPermission.Delete);

Nitric.INSTANCE.run();
```

{% /tab %}

{% tab label=“Kotlin %}

```kotlin
import io.nitric.Nitric
import io.nitric.resources.BucketPermission

val bucket = Nitric.bucket("images").with(BucketPermission.Read, BucketPermission.Write, BucketPermission.Delete)

Nitric.run()
```

{% /tab %}

{% /tabs %}

## Parameters

---

**name** required `string`

The unique name of this buckets within the app. Subsequent calls to `Bucket` with the same name will return the same object.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](../../../../access-control).

### Available permissions:

---

**reading**

This permission allows your function to read files from the bucket

---

**writing**

This permission allows your function to write files to the bucket

---

**deleting**

This permission allows your function to delete files from the bucket

---

## Working with files

See the following for examples on working with files in a bucket:

- [file()](./bucket-file.md)
- [file().get()](./bucket-file-get.md)
- [file().write()](./bucket-file-write.md)
- [file().delete()](./bucket-file-delete.md)
- [file().signUrl()](./bucket-file-signurl.md)

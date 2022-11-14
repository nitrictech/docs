---
title: bucket.file.write()
description: Write a file to a bucket.
---

Write a file to a bucket.

```C#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Reading);

var logo = assets.File('images/logo.png');

logo.Write(someImageData);
```

## Parameters

---

**data** required `byte[]`

The data to write to the file.

---

## Examples

### Write a file

```C#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Reading);

var logo = assets.File('images/logo.png');

logo.Write(someImageData);
```

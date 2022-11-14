---
title: bucket.file.get()
description: Get the contents of a file from a bucket.
---

Get the contents of a file from a bucket.

```c#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Reading);

var logo = assets.File('images/logo.png');

var logoData = logo.Get();
```

## Examples

### Get a file

```c#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Reading);

var logo = assets.File('images/logo.png');

var logoData = logo.Get();
```
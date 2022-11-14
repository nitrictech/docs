---
title: bucket.file.delete()
description: Delete a file from a bucket.
---

Delete a file from a bucket.

```c#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Deleting);

var logo = assets.File('images/logo.png');

logo.Delete();
```

## Examples

### Delete a file

```c#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Deleting);

var logo = assets.File('images/logo.png');

logo.Delete();
```
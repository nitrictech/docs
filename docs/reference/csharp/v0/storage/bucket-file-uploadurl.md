---
title: bucket.file.geUploadUrl()
description: Get a upload url for a file from a bucket.
---

Create a upload url for a file within a bucket.

```C#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Writing);

var logo = assets.File('images/logo.png');

// Create a read-only signed url reference for uploading
var uploadUrl = logo.GetUploadUrl();
```

## Parameters

---

**expiry** `int`

Seconds until link expiry. Defaults to `600`, Maximum of `604800` (7 days)

---

## Examples

### Create a temporary file upload link for a user

```C#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Writing);

var logo = assets.File('images/logo.png');

// Create a read-only signed url reference for uploading
var downloadUrl = logo.GetUploadUrl(300);
```

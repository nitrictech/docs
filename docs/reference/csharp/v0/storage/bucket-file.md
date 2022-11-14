---
title: bucket.file()
description: Create a reference to a file within a bucket.
---

Create a reference to a file within a bucket.

```C#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket("assets").With(BucketPermission.Reading);

var logo = assets.File("images/logo.png");
```

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

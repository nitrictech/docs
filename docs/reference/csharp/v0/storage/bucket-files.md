---
title: bucket.files()
description: Get a list of file references for files that exist in the bucket.
---

Get a list of file references for files that exist in the bucket.

```C#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket("assets").With(BucketPermission.Reading);

var files = assets.Files();
```

## Examples

Deleting all files in a bucket

```C#
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket("assets").With(BucketPermission.Reading);

var files = assets.Files();

files.ForEach(file => file.Delete());
```

## Notes

This method returns a list of [File](./bucket-file) references that exist on the bucket.

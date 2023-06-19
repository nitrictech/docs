---
title: .NET - bucket.files()
description: Reference for Nitric's .NET library - Get a list of file references for files that exist in the bucket.
---

Get a list of file references for files that exist in the bucket.

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket("assets").With(BucketPermission.Reading);

var files = assets.Files();

Nitric.Run();
```

## Examples

Deleting all files in a bucket

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket("assets").With(BucketPermission.Reading);

var files = assets.Files();

files.ForEach(file => file.Delete());

Nitric.Run();
```

## Notes

This method returns a list of [File](./bucket-file) references that exist on the bucket.

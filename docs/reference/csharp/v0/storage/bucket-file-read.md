---
title: .NET - bucket.file.read()
description: Reference for Nitric's .NET library - Read the contents of a file from a bucket.
---

Read the contents of a file from a bucket.

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Reading);

var logo = assets.File('images/logo.png');

var logoData = logo.Read();

Nitric.Run();
```

## Examples

### Read a file

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Storage;

var assets = Nitric.Bucket('assets').With(BucketPermission.Reading);

var logo = assets.File('images/logo.png');

var logoData = logo.Read();

Nitric.Run();
```

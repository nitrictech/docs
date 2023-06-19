---
title: .NET - bucket.on()
description: Reference for Nitric's .NET library - Create a new bucket notification trigger
---

Create a new bucket notification trigger when certain files are created or deleted.

```csharp
using System;
using Nitric.Sdk;
using Nitric.Sdk.Resource;
using Nitric.Sdk.Storage;
using BucketNotificationType = Nitric.Sdk.Function.BucketNotificationType;

var assets = Nitric.Bucket("assets");

var accessibleAssets = Nitric.Bucket("assets").With(BucketPermission.Reading);

// The request will contain the name of the file `Key` and the type of event `NotificationType`
assets.On(BucketNotificationType.Delete, "*", context => {
  Console.WriteLine("A file named " + context.Req.Key + "was deleted");

  return context;
});

assets.On(BucketNotificationType.Write, "/images/cat", context => {
  Console.WriteLine("A cat image was written");

  return context;
});

// If `.On()` is called with a permissioned bucket, a file reference will also be provided with the request
accessibleAssets.On(BucketNotificationType.Write, "/images/dog", context => {
  var dogImage = context.Req.File.Read();

  Console.WriteLine(dogImage.ToString());

  return context;
});

Nitric.Run();
```

## Parameters

---

**notification type** required `BucketNotificationType.Write` or `BucketNotificationType.Delete`

The notification type for a triggered event, either on a file write or a file delete.

**notification prefix filter** required `string`

The file prefix filter that must match for a triggered event. If multiple filters overlap across notifications then an error will be thrown when registering the resource.

**middleware** required `BucketNotificationMiddleware` or `BucketNotificationMiddleware[]`

The middleware (code) to be triggered by the bucket notification being triggered.

---

### Available trigger types:

**BucketNotificationType.Write**

Run when a file in the bucket is created using: `file.Write()`

**BucketNotificationType.Delete**

Run when a file in the bucket is deleted using: `file.Delete()`

### Trigger type cloud mapping

| Permission                    | AWS                 | GCP             | Azure                         |
| ----------------------------- | ------------------- | --------------- | ----------------------------- |
| BucketNotificationType.Write  | s3:ObjectCreated:\* | OBJECT_FINALIZE | Microsoft.Storage.BlobCreated |
| BucketNotificationType.Delete | s3:ObjectRemoved:\* | OBJECT_DELETE   | Microsoft.Storage.BlobDeleted |

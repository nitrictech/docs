---
title: Node.js - bucket()
description: Reference for Nitric's Node.js library - Create a new bucket for storing and retrieving files.
---

Create a new bucket for storing and retrieving files.

```javascript
import { bucket } from '@nitric/sdk';

// Create a readable/writable reference to an 'assets' bucket
const assets = bucket('assets');

assets.on('created:*', (ctx) => {
  console.log(`A file named ${ctx.req.key} was created`);
});

assets.on('deleted:/images/cat', (ctx) => {
  console.log('A cat image was deleted');
});
```

## Parameters

---

**filter** required `string`

The notification type and notification prefix filter in the form `type:filter`. If multiple filters overlap across notifications then an error will be thrown when registering the resource.

**middleware** required `BucketNotificationMiddleware` or `BucketNotificationMiddleware[]`

The middleware (code) to be triggered by the bucket notification being triggered.

---

### Available trigger types:

**created**

Run when a file in the bucket is created using: `file.write()`

**deleted**

Run when a file in the bucket is deleted using: `file.delete()`

### Trigger type cloud mapping

| Permission | AWS                 | GCP             | Azure                         |
| ---------- | ------------------- | --------------- | ----------------------------- |
| created    | s3:ObjectCreated:\* | OBJECT_FINALIZE | Microsoft.Storage.BlobCreated |
| deleted    | s3:ObjectRemoved:\* | OBJECT_DELETE   | Microsoft.Storage.BlobDeleted |

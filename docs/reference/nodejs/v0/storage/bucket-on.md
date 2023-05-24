---
title: Node.js - bucket.on()
description: Reference for Nitric's Node.js library - Create a new bucket notification trigger
---

Register a function to be called in response to bucket file changes.

```javascript
import { bucket } from '@nitric/sdk';

const images = bucket('images');

images.on('write', '/images/cats/*', (ctx) => {
  console.log(`A new cat image was written as ${ctx.req.key}`);
});
```

## Parameters

---

**trigger** required `write` | `delete`

The type of file change notifications that should trigger the handler, either write or delete.

**keyMatch** required `string`

The file keys (paths) filter to use when determining which files this handler should receive events for.

> Note: If multiple filters overlap in the same application an error will be thrown when registering the resource.

**middleware** required `BucketNotificationMiddleware` | `BucketNotificationMiddleware[]`

The middleware (callback function) to be triggered when a matching file change occurs.

---

### Available trigger types:

**write**

Run when a file in the bucket is created or updated using: `file.write()`

**delete**

Run when a file in the bucket is deleted using: `file.delete()`

#### Trigger type cloud mapping

| Notification | AWS                 | GCP             | Azure                         |
| ---------- | ------------------- | --------------- | ----------------------------- |
| write      | s3:ObjectCreated:\* | OBJECT_FINALIZE | Microsoft.Storage.BlobCreated |
| delete     | s3:ObjectRemoved:\* | OBJECT_DELETE   | Microsoft.Storage.BlobDeleted |

## Examples

### Trigger on all new or updated files in a folder

```javascript
import { bucket } from '@nitric/sdk';

const images = bucket('images');

images.on('write', '/images/cats/*', (ctx) => {
  console.log(`A new cat image was written as ${ctx.req.key}`);
});
```

### Trigger on changes to a specific file

```javascript
import { bucket } from '@nitric/sdk';

const images = bucket('images');

images.on('write', '/images/cats/tabby.png', (ctx) => {
  console.log('the tabby image was updated');
});
```

### Trigger on deleted files

```javascript
import { bucket } from '@nitric/sdk';

const images = bucket('images');

images.on('delete', '*', (ctx) => {
  console.log(`The image ${ctx.req.key} was deleted`);
});
```

### Access the modified file

When `on` is called on a bucket with `reading` access the callback's context object will automatically provide a reference to the modified file.

```javascript
import { bucket } from '@nitric/sdk';

const images = bucket('images').for('reading');

images.on('write', '/images/cats/*', async (ctx) => {
  const newFileData = await ctx.req.file.read();

  console.log(newFileData);
});
```
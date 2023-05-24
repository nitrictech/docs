---
title: Python - bucket.on()
description: Reference for Nitric's Python library - Create a new bucket notification trigger
---

Register a function to be called in response to bucket file changes.

```python
from nitric.resources import bucket

assets = bucket("assets")

@assets.on("write", "/images/cat")
def create_cat_image(ctx):
  print("A cat image was written")
```

## Parameters

---

**trigger** required `write` or `delete`

The type of file change notifications that should trigger the handler, either write or delete.

**path_match** required `string`

The file paths filter to use when determining which files this handler should receive events for.

> Note: If multiple filters overlap in the same application an error will be thrown when registering the resource.

**middleware** required `BucketNotificationMiddleware`

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

```python
from nitric.resources import bucket

assets = bucket("assets")

@assets.on("write", "/images/cats/*")
def updated_cat_image(ctx):
  print(f"A new cat image was written as {ctx.req.key}")
```

### Trigger on changes to a specific file

```python
from nitric.resources import bucket

assets = bucket("assets")

@assets.on("write", "/images/cats/tabby.png")
def updated_tabby_image(ctx):
  print("the tabby image was updated")
```

### Trigger on deleted files

```python
from nitric.resources import bucket

assets = bucket("assets")

@assets.on("delete", "*")
def delete_anything(ctx):
  print(f"The image {ctx.req.key} was deleted")
```

### Access the modified file

When `on` is called on a bucket with `reading` access the callback's context object will automatically provide a reference to the modified file.

```python
from nitric.resources import bucket

assets = bucket("assets").allow("reading")

@assets.on("write", "/images/dogs/*")
async def access_updated_file(ctx):
  new_file_data = await ctx.req.file.read()

  print(new_file_data)
```
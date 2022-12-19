---
title: Python - bucket()
description: Create a new bucket for storing and retrieving files.
---

Create a new bucket for storing and retrieving files.

```python
from nitric.resources import bucket

assets = bucket('assets').allow('reading', 'writing', 'deleting')
```

## Parameters

---

**name** required `string`

The unique name of this bucket within the app. Subsequent calls to `bucket` with the same name will return the same object.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](../../../../access-control).

### Available permissions:

---

**reading**

This permission allows your function to read files from the bucket

---

**writing**

This permission allows your function to write files to the bucket

---

**deleting**

This permission allows your function to delete files from the bucket

---

## Working with files

See the following for examples on working with files in a bucket:

- [file()](./bucket-file.md)
- [file.get()](./bucket-file-get.md)
- [file.write()](./bucket-file-write.md)
- [file.delete()](./bucket-file-delete.md)
- [file.getDownloadUrl()](./bucket-file-downloadurl)
- [file.getUploadUrl()](./bucket-file-uploadurl)

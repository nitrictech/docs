---
title: bucket.file()
description: Create a reference to a file within a bucket.
---

Create a reference to a file within a bucket.

```python
from nitric.resources import bucket

assets = bucket('assets').allow('reading')

logo = assets.file('images/logo.png')
```

## Parameters

---

**name** required `string`

The unique name/reference to the file.

---

## Notes

The file does not need to exist, only a reference to that file is being created.

## Available Operations

- [file.get()](./bucket-file-get.md)
- [file.write()](./bucket-file-write.md)
- [file.delete()](./bucket-file-delete.md)
- [file.getDownloadUrl()](./bucket-file-downloadurl)
- [file.getUploadUrl()](./bucket-file-uploadurl)

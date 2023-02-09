---
title: Node.js - bucket.file()
description: Reference for Nitric's Node.js library - Create a reference to a file within a bucket.
---

Create a reference to a file within a bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');
```

## Parameters

---

**name** required `string`

The unique name/reference to the file.

---

## Notes

The file does not need to exist, only a reference to that file is being created.

## Available Operations

- [file.read()](./bucket-file-read)
- [file.write()](./bucket-file-write)
- [file.delete()](./bucket-file-delete)
- [file.getDownloadUrl()](./bucket-file-downloadurl)
- [file.getUploadUrl()](./bucket-file-uploadurl)

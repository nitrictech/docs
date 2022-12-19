---
title: Python - bucket.file.upload_url()
description: Create a signed URL for write access to a file.
---

Create a signed url for write access to a file.

```python
from nitric.resources import bucket

assets = bucket('assets').allow('writing')

logo = assets.file('images/logo.png')

upload_url = await logo.upload_url()
```

## Parameters

---

**expiry** optional `number`
Seconds until link expiry. Defaults to `600`, Maximum of `604800` (7 days)

---

## Examples

### Create a temporary file upload link for a user

```python
from nitric.resources import bucket

uploads = bucket('uploads').allow('writing')

photo = assets.file('images/photo.png')

photo_url = await logo.upload_url()
```

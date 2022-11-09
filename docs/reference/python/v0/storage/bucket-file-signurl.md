---
title: bucket.file.signUrl()
description: Create a signed URL for access to a file.
---

Create a signed url for access to a file.

```python
from nitric.resources import bucket

assets = bucket('assets').allow('reading', 'writing')

logo = assets.file('images/logo.png')

download_url = await logo.download_url()
upload_url = await logo.upload_url()
```

## Parameters

---

**expiry** optional `number`
Seconds until link expiry. Defaults to `600`, Maximum of `604800` (7 days)

---

## Examples

### Create a readable link that is valid for the next 5 minutes

```python
from nitric.resources import bucket

assets = bucket('assets').allow('reading')

logo = assets.file('images/logo.png')

logo_url = await logo.download_url(expiry=300)
```

### Create a temporary file upload link for a user

```python
from nitric.resources import bucket

uploads = bucket('uploads').allow('writing')

photo = assets.file('images/photo.png')

photo_url = await logo.upload_url()
```

### Get an image url for rendering

```python
from nitric.resources import api, bucket
from nitric.faas import HttpContext
from nitric.application import Nitric

main_api = api('main')
images = bucket('images').allow('reading')

@main_api.get('/images/:id')
async def get_image(ctx: HttpContext):
  id = ctx.req.params['id']
  url = await images.file(id).download_url()
  ctx.res.status = 303
  ctx.res.headers['Location'] = [url]

Nitric.run()
```

---
title: Node.js - bucket.file.getDownloadUrl()
description: Reference for Nitric's Node.js library - Get a download url for a file from a bucket.
---

Create a download url for a file within a bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading', 'writing');

const logo = assets.file('images/logo.png');

// Create a read-only signed url reference for downloading
const downloadUrl = await logo.getDownloadUrl();
```

## Parameters

---

**options** `SignUrlOptions`

Additional options when creating a signed URL.

| Properties                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------- |
| **expiry** optional `number` <br/> Seconds until link expiry. <br/> Defaults to `600`, Maximum of `604800` (7 days) |

---

## Examples

### Create a readable link that is valid for the next 5 minutes

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');

const logoUrl = await logo.getDownloadUrl({
  expiry: 300,
});
```

### Redirect response to an image URL

```javascript
import { api, bucket } from '@nitric/sdk';

const mainApi = api('main');
const images = bucket('images').for('reading');

mainApi.get('/images/:id', async ({ req, res }) => {
  const { id } = req.params;
  const signedUrl = await images.file(id).getDownloadUrl();
  res.status = 303;
  res.headers['Location'] = [signedUrl];
});
```

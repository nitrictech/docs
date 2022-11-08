---
title: bucket.file.geUploadUrl()
description: Get a upload url for a file from a bucket.
---

Create a upload url for a file within a bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading', 'writing');

const logo = assets.file('images/logo.png');

// Create a read-only signed url reference for uploading
const uploadUrl = await logo.getUploadUrl();
```

## Parameters

---

**options** `SignUrlOptions`

Additional options when creating signed URL.

| Properties                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------- |
| **expiry** optional `number` <br/> Seconds until link expiry. <br/> Defaults to `600`, Maximum of `604800` (7 days) |

---

## Examples

### Create a temporary file upload link for a user

```javascript
import { bucket } from '@nitric/sdk';

const uploads = bucket('uploads').for('writing');

const photo = uploads.file('images/photo.png');

const photoUrl = await photo.getUploadUrl({
  expiry: 300,
});
```

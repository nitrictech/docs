Create a signed url for access to a file.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading', 'writing');

const logo = assets.file('images/logo.png');

// Create a read-only signed url reference for downloading or uploading
const downloadUrl = await profiles.file('profile.png').getDownloadUrl();
const uploadUrl = await profiles.file('profile.png').getUploadUrl();
```

## Parameters

---

**options** `SignUrlOptions`

Additional options when creating signed URL.

| Properties                                                                            |
| ------------------------------------------------------------------------------------- |
| **expiry** optional `number` <br/> Seconds until link expiry. <br/> Defaults to `300` |

---

## Examples

### Create a readable link that is valid for the next 10 minutes

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');

const logoUrl = await logo.getDownloadUrl({
  expiry: 600,
});
```

### Create a temporary file upload link for a user

```javascript
import { bucket } from '@nitric/sdk';

const uploads = bucket('uploads').for('writing');

const photo = uploads.file('images/photo.png');

const photoUrl = await photo.getUploadUrl();
```

### Get an image url for rendering

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

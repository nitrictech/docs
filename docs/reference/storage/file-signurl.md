Create a signed url for access to a file.

```javascript
import { bucket, FileMode } from '@nitric/sdk';

const assets = bucket('assets').for('reading', 'writing');

const logo = assets.file('images/logo.png');

// 👀 create a read-only signed url reference
const logoUrl = await logo.signUrl(FileMode.Read);
```

## Parameters

---

**mode** required `FileMode`

The mode the signed url with operate in.

Available options are:

- `FileMode.Read`
- `FileMode.Write`

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
import { bucket, FileMode } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');

const logoUrl = await logo.signUrl(FileMode.Read, {
  expiry: 600,
});
```

### Create a temporary file upload link for a user

```javascript
import { bucket, FileMode } from '@nitric/sdk';

const uploads = bucket('uploads').for('writing');

const photo = uploads.file('images/photo.png');

const photoUrl = await photo.signUrl(FileMode.Write);
```

### Get an image url for rendering

```javascript
import { api, bucket, FileMode } from '@nitric/sdk';

const mainApi = api('main');
const images = bucket('images').for('reading');

mainApi.get('/images/:id', async ({ req, res }) => {
  const { id } = req.params;
  const signedUrl = await images.file(id).signUrl(FileMode.Read);
  res.status = 303;
  res.headers['Location'] = [signedUrl];
});
```

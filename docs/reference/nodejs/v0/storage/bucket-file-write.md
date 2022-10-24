---
title: bucket.file.write()
description: Write a file to a bucket.
---

Write a file to a bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('writing');

const logo = assets.file('images/logo.png');

await logo.write(someImageData);
```

## Parameters

---

**data** required `Uint8Array`

The data to write to the file.

---

## Examples

### Write a file

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('writing');

const logo = assets.file('images/logo.png');

await logo.write(someImageData);
```

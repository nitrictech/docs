---
title: Node.js - bucket.file.delete()
description: Delete a file from a bucket.
---

Delete a file from a bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('deleting');

const logo = assets.file('images/logo.png');

await logo.delete();
```

## Examples

### Delete a file

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('deleting');

const logo = assets.file('images/logo.png');

await logo.delete();
```

---
title: Node.js - bucket.file.read()
description: Reference for Nitric's Node.js library - Read the contents of a file from a bucket.
---

Read the contents of a file from a bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');

const logoData = await logo.read();
```

## Examples

### Read a file

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const logo = assets.file('images/logo.png');

const logoData = await logo.read();
```

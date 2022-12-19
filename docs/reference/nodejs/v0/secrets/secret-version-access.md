---
title: Node.js - secret.version.access()
description: Retrieves the value from a version of a secret.
---

Retrieves the value from a version of a secret.

```javascript
import { secret } from '@nitric/sdk';

const keyRef = secret('apiKey').for('access');

const keyValue = await keyRef.latest().access();

keyValue.asString();
```

## Examples

### Access the latest version of a secret

```javascript
import { secret } from '@nitric/sdk';

const keyRef = secret('apiKey').for('access');

const keyValue = await keyRef.latest().access();

keyValue.asString();
```

### Access a specific version of a secret

```javascript
import { secret } from '@nitric/sdk';

const keyRef = secret('apiKey').for('access');

const keyValue = await keyRef.version('the-version-id').access();

keyValue.asString();
```

---
title: secret()
description: Creates a reference to a secret in the secrets manager.
---

Creates a reference to a secret in the secrets manager.

```javascript
import { secret } from '@nitric/sdk';

const keyRef = secret('apiKey').for('access');
```

## Parameters

---

**name** required `string`

The unique name of this secret within the secrets manager.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](../../../../access-control).

### Available permissions:

---

**put**

This permission allows your code to set a new latest value for a secret.

---

**access**

This permission allows your code to retrieve secret values.

---

## Examples

### Create a reference to a secret

```javascript
import { secret } from '@nitric/sdk';

const keyRef = secret('apiKey').for('put');
```

## See Also

- [secret().put()](./secret-put)
- [secret().version()](./secret-version)
- [secret().latest()](./secret-latest)
- [secret().version().access()](./secret-version-access)

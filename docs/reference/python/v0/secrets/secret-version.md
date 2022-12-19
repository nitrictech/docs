---
title: Python - secret.version()
description: Reference for Nitric's Python library - Returns a reference to a known version of a secret.
---

Returns a reference to a known version of a secret.

```python
from nitric.resources import secret

keyRef = secret('apiKey').allow('accessing')

keyValue = await keyRef.version('the-version-id')
```

## Parameters

---

**version** required `string`

The version id. This value is returned from [secret.put()](./secret-put)

---

## Examples

### Return a reference to a known secret version

```python
from nitric.resources import secret

key_ref = secret('apiKey').allow('accessing')

key_value = await key_ref.version('the-version-id')
```

## See Also

- [secret.version().access()](./secret-version-access)

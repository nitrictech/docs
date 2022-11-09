---
title: secret.put()
description: Store a new secret value.
---

Store a new secret value, creating a new [version](./secret-version) to store the value.

```python
from nitric.resources import secret

keyRef = secret('apiKey').allow('putting')

await keyRef.put(b"6c3199a3-094e-4797-bfc9-9ee2a7839286")
```

## Parameters

---

**secret** required `string` | `bytes`

The new secret value to store in the secrets manager.

---

## Notes

A new secret version is always created when calling `put()`, the versions will automatically be provided a unique id. This behavior is dependent on the underlying secrets manager.

## Examples

### Store a new secret value

```python
from nitric.resources import secret

keyRef = secret('apiKey').allow('putting')

await keyRef.put(b"6c3199a3-094e-4797-bfc9-9ee2a7839286")
```

### Get the id of a new secret version

Calling `put()` returns a promise to a reference to the new secret version. Storing the ID of the new version can be useful if you need to retrieve that specific value again in future using [version.access()](./secret-version-access)

```python
from nitric.resources import secret

keyRef = secret('apiKey').allow('putting')

await keyRef.put(b"6c3199a3-094e-4797-bfc9-9ee2a7839286")

versionId = keyRef.version
```

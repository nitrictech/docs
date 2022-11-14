---
title: secret.version.access()
description: Retrieves the value from a version of a secret.
---

Retrieves the value from a version of a secret.

```python
from nitric.resources import secret

# Get latest secret version
latest = secret("database.password").allow("accessing").latest()

# Access the latest secret version
value = await latest_version.access()
```

## Examples

### Access the latest version of a secret

```python
from nitric.resources import secret

latest = secret("database.password").allow("accessing").latest()

value = await latest.access()
```

### Access a specific version of a secret

```python
from nitric.resources import secret

key_ref = secret('apiKey').allow('accessing')

key_value = await key_ref.version('the-version-id').access()
```

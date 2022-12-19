---
title: Python - secret.latest()
description: Returns a reference to the latest version of a secret, regardless of that version's ID.
---

Returns a reference to the `latest` version of a secret, regardless of that version's ID.

```python
from nitric.resources import secret

# Get latest secret version
latest = secret("database.password").allow('accessing').latest()
```

## Notes

`latest()` is most useful when you always want the most recent secret values from the secrets manager. Database credentials and API keys are good examples of secrets where the latest value is usually what you want.

For symmetric encryption, you'll need to retrieve the version of the secret used to _encrypt_ a value when you try to _decrypt_ it again. In those cases `latest()` isn't a good choice, use [version()](./secret-version) instead.

## Examples

### Get a reference to the latest secret version

```python
from nitric.resources import secret

latest = secret("database.password").allow('accessing').latest()
```

### Access the latest value of a secret

```python
from nitric.resources import secret

latest = secret("database.password").allow('accessing').latest()

value = await latest.access()
```

> See [secret.version().access()](./secret-version-access) for more details.

---
title: Python - bucket.file.get()
description: Get the contents of a file from a bucket.
---

Get a file from a bucket.

```python
from nitric.resources import bucket

# Create a reference to an 'assets' bucket with permissions to read
assets = bucket('assets').allow('reading')

logo = assets.file('images/logo.png')

logo_data = await logo.get()
```

## Examples

### Get a file

```python
from nitric.resources import bucket

assets = bucket('assets').allow('reading')

logo = assets.file('images/logo.png')

logo_data = await logo.get()
```

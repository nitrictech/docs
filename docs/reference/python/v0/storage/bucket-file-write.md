---
title: Python - bucket.file.write()
description: Write a file to a bucket.
---

Write a file to a bucket.

```python
from nitric.resources import bucket

assets = bucket('assets').allow('reading')

logo = assets.file('images/logo.png')

logo_data = await logo.write(some_data)
```

## Parameters

---

**data** required `bytes`

The data to write to the file.

---

## Examples

### Write a file

```python
from nitric.resources import bucket

# Create a reference to an 'assets' bucket with write permissions
assets = bucket('assets').allow('writing')

logo = assets.file('images/logo.png')

logo_data = await logo.write(some_data)
```

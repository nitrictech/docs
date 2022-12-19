---
title: Python - bucket.file.delete()
description: Reference for Nitric's Python library - Delete a file from a bucket.
---

Deletes a file within a bucket.

```python
from nitric.resources import bucket

# Create a reference to an 'assets' bucket with permissions to delete
assets = bucket('assets').allow('deleting')

logo = assets.file('images/logo.png')

await logo.delete()
```

## Examples

### Delete a file

```python
from nitric.resources import bucket

assets = bucket('assets').allow('deleting')

logo = assets.file('images/logo.png')

await logo.delete()
```

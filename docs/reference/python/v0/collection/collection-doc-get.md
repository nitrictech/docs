---
title: collection.doc.get()
description: Retrieve the value of a document.
---

Retrieve the value of a document.

```python
from nitric.resources import collection

enemies = collection('profiles').allow('reading')
drakes_profile = profiles.doc('Drake Mallard')

await drakes_profile.get()
```

## Examples

### Get a document's value

```python
from nitric.resources import collection

profiles = collection('profiles').allow('reading')

drakesProfile = profiles.doc('Drake Mallard')
await drakesProfile.get()
```

## See also

- [doc().set()](./collection-doc-set.md)
- [doc().delete()](./collection-doc-delete.md)
- [doc.collection()](./collection-doc-collection.md)

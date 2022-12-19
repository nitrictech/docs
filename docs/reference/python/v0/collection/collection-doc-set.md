---
title: Python - collection.doc.set()
description: Reference for Nitric's Python library - Set the value of a document.
---

Set the value of a document.

```python
from nitric.resources import collection

enemies = collection('profiles').allow('writing')
drakes_profile = profiles.doc('Drake Mallard')

await drakes_profile.set({
  firstName: 'Drake',
  lastName: 'Mallard',
})
```

## Parameters

---

**document** required `object`

The document to set on the key

---

## Examples

### Set a document

```python
from nitric.resources import collection

enemies = collection('profiles').allow('writing')
drakesProfile = profiles.doc('Drake Mallard')

await drakesProfile.set({
  firstName: 'Drake',
  lastName: 'Mallard',
})
```

### Update a document

```python
from nitric.resources import collection

profiles = collection('profiles').allow('reading','writing')

drakesProfile = profiles.doc('Drake Mallard')
await drakesProfile.get()

await drakesProfile.set({
  firstName: 'Drake',
  lastName: 'Mallard',
})
```

## See also

- [doc().get()](./collection-doc-get.md)
- [doc().delete()](./collection-doc-delete.md)

---
title: collection.doc.collection()
description: Gets a reference to a child collection on a document.
---

Gets a reference to a child collection on a document.

```python
from nitric.resources import collection

profiles = collection('profiles').allow('reading')
drakesProfile = profiles.doc('Drake Mallard')

drakesEnemies = drakesProfile.collection('enemies')
```

## Parameters

---

**name** required `string`

The name of the child collection to reference

---

## Notes

Document collection relationships can be at most 1 deep.

```python
from nitric.resources import collection

profiles = collection('profiles').allow('reading')

profiles
  .doc('Drake Mallard')
  .collection('enemies')
  .doc('Steel Beak') // ✔️ We can go this deep
  .collection('enemies') // ❌ But not this deep
```

## See also

- [collection()](./collection.md)

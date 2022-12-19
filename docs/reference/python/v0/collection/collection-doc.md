---
title: Python - collection.doc()
description: Reference for Nitric's Python library - Get a reference to a document in the collection.
---

Get a reference to a document in the collection.

```python
from nitric.resources import collection

profiles = collection('profiles').allow('reading','writing')
drakes_profile = profiles.doc('Drake Mallard')
```

## Parameters

---

**key** required `string`

The key of the document to reference.

---

## See also

- [doc().get()](./collection-doc-get.md)
- [doc().set()](./collection-doc-set.md)
- [doc().delete()](./collection-doc-delete.md)
- [doc().collection()](./collection-doc-collection.md)

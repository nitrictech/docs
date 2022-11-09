---
title: collection.doc.delete()
description: Delete a document from a collection.
---

Delete a document from a collection.

```python
from nitric.resources import collection

profiles = collection('profiles').allow('deleting')
drakesProfile = profiles.doc('Drake Mallard')

await drakesProfile.delete()
```

## See also

- [doc().set()](./collection-doc-set.md)
- [doc().get()](./collection-doc-get.md)

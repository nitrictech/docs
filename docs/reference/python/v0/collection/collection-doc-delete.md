---
title: Python - collection.doc.delete()
description: Delete a document from a collection.
---

Delete a document from a collection.

```python
from nitric.resources import collection

profiles = collection('profiles').allow('deleting')
drakes_profile = profiles.doc('Drake Mallard')

await drakes_profile.delete()
```

## See also

- [doc().set()](./collection-doc-set.md)
- [doc().get()](./collection-doc-get.md)

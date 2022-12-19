---
title: Node.js - collection.doc()
description: Reference for Nitric's Node.js library - Get a reference to a document in the collection.
---

Get a reference to a document in the collection.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading', 'writing');

const drakesProfile = profiles.doc('Drake Mallard');
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

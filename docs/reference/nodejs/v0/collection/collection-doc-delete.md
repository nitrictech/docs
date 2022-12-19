---
title: Node.js - collection.doc.delete()
description: Delete a document from a collection
---

Delete a document from a collection.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('deleting');

const drakesProfile = profiles.doc('Drake Mallard');

await drakesProfile.delete();
```

## See also

- [doc().set()](./collection-doc-set.md)
- [doc().get()](./collection-doc-get.md)

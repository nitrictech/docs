---
title: Node.js - collection.doc.get()
description: Retrieve the value of a document.
---

Retrieve the value of a document.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading');

const drakesProfile = profiles.doc('Drake Mallard');

const drakeMallard = await drakesProfile.get();
```

## Examples

### Get a document's value

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading');

const drakesProfile = profiles.doc('Drake Mallard');

const drakeMallard = await drakesProfile.get();
```

## See also

- [doc().set()](./collection-doc-set.md)
- [doc().delete()](./collection-doc-delete.md)
- [doc.collection()](./collection-doc-collection.md)

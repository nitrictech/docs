---
title: collection.doc.set()
description: Set the value of a document
---

Set the value of a document.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('writing');

const drakesProfile = profiles.doc('Drake Mallard');

await drakesProfile.set({
  firstName: 'Drake',
  lastName: 'Mallard',
});
```

## Parameters

---

**document** required `object`

The document to set on the key

---

## Examples

### Set a document

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('writing');

const drakesProfile = profiles.doc('Drake Mallard');

await drakesProfile.set({
  firstName: 'Drake',
  lastName: 'Mallard',
});
```

### Update a document

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('writing');

const drakesProfile = profiles.doc('Drake Mallard');

const existingProfile = await drakesProfile.get();

await drakesProfile.set({
  ...existingProfile,
  firstName: 'Drake',
});
```

## See also

- [doc().get()](./collection-doc-get.md)
- [doc().delete()](./collection-doc-delete.md)

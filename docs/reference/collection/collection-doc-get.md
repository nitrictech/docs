Gets the value of a document

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading');

const drakesProfile = profiles.doc('Drake Mallard');

const drakeMallard = await drakesProfile.get();
```

## See also

- [doc().set()](./collection-doc-set.md)
- [doc().delete()](./collection-doc-delete.md)

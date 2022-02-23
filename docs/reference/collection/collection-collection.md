Get a query only sub-collection reference, this can be used to query commonly named collections across documents.

```javascript
import { collection } from '@nitric/sdk';

const enemies = collection('profiles').for('reading').collection('enemies');
```

## Parameters

---

**name** required `string`

The name of the sub-collection to reference

---

## Examples

### Create a query for a sub collection

```javascript
import { collection } from '@nitric/sdk';

const enemies = collection('profiles').for('reading').collection('enemies');

const enemiesQuery = enemies.query();
```

## See also

- [collection().query()](./collection-query.md)

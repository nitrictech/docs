Adds a new where clause to a query, which filters the data returned.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading');

const profileQuery = profiles.query().where('name', 'startsWith', 'T');
```

## Parameters

---

**field** required `string`

The document field to query

---

**operation** required `string`

The query operation to perform

Valid values are: `startsWith | == | != | >= | <= | > | <`

---

**value** required `string` or `number`

The value to compare against

---

### Notes

Where clauses combined together are always considered `AND`

## Examples

### A simple query

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading');

const profileQuery = profiles.query().where('firstName', '==', 'Drake');
```

### Combining where clauses

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading');

const profileQuery = profiles
  .query()
  .where('firstName', '==', 'Drake')
  .where('age', '>=', 21);
```

## See also

- [query().fetch()](./collection-query-fetch.md)
- [query().stream()](./collection-query-stream.md)

Set a point to resume a query from.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles');

const profileQuery = profiles.query().pagingFrom(pagingToken);
```

## Parameters

---

**pagingToken** required `unknown`

The paging token to apply to the query, tokens are returned from `query().fetch()`, when results can not be returned in a single page.

---

## See also

- [query().limit()](./collection-query-limit.md)
- [query().fetch()](./collection-query-where.md)

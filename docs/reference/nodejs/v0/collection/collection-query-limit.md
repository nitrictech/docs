---
title: Node.js - collection.query.limit()
description: Limit the number of results returned by a query.
---

Limit the number of results returned by a query.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles');

const profileQuery = profiles.query().limit(10);
```

## Parameters

---

**limit** required `number`

The limit to apply to the query

---

## See also

- [query().pagingFrom()](./collection-query-pagingfrom.md)
- [query().where()](./collection-query-where.md)

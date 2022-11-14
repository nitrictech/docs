---
title: collection.query.limit()
description: Limit the number of results returned by a query.
---

Limit the number of results returned by a query.

```python
from nitric.resources import collection

query = collection("profiles").allow('reading').query().limit(1000)
```

## Parameters

---

**limit** required `number`

The limit to apply to the query

---

## See also

- [query().pagingFrom()](./collection-query-pagingfrom.md)
- [query().where()](./collection-query-where.md)

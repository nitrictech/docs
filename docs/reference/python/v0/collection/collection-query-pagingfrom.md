---
title: collection.query.pagingFrom()
description: Set a point to resume a query from.
---

Set a point to resume a query from, this is required when continuing a paginated query response.

```python
from nitric.resources import collection

query = collection("profiles").allow('reading').query().limit(1000)

# Fetch first page
results = await query.fetch()

# Fetch next page
if results.paging_token:
    results = await query.page_from(results.paging_token).fetch()
```

## Parameters

---

**pagingToken** required `unknown`

The paging token to apply to the query, tokens are returned from `query().fetch()`, when results can not be returned in a single page.

---

## See also

- [query().limit()](./collection-query-limit.md)
- [query().fetch()](./collection-query-where.md)

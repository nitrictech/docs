---
title: Python - collection.query.fetch()
description: Reference for Nitric's Python library - Fetch paged results from a query.
---

Retrieve a page of results for a query. This is an alternative to [collection.query.stream()](./collection-query-stream)

```python
from nitric.resources import collection

query = collection("profiles").allow('reading').query()

results = await query.fetch()
```

## Examples

### Paging through results from a query

```python
from nitric.resources import collection

query = collection("profiles").allow('reading').query()

# Fetch first page
results = await query.fetch()

# Fetch next page
if results.paging_token:
    results = await query.page_from(results.paging_token).fetch()
```

## See also

- [query().where()]()
- [query().limit()]()
- [query().pagingFrom()]()

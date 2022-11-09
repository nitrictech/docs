---
title: collection.query.stream()
description: Process query results as a stream.
---

Process query results as a stream.

```python
from nitric.resources import collection

query = docs.collection("profiles").allow('reading').query()

async for doc in query.stream():
    # Process doc stream...
    print(doc.content)
```

## Examples

### Streaming results from a query

```python
from nitric.resources import collection

query = docs.collection("profiles").allow('reading').query()

async for doc in query.stream():
    # Process doc stream...
    print(doc.content)
```

## See also

- [query().where()](./collection-query-where)
- [query().limit()](./collection-query-limit)
- [query().pagingFrom()](./collection-query-pagingfrom)

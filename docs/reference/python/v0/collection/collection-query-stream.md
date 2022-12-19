---
title: Python - collection.query.stream()
description: Reference for Nitric's Python library - Process query results as a stream.
---

Process query results as a stream.

```python
from nitric.resources import collection

query = collection("profiles").allow('reading').query()

async for doc in query.stream():
    # Process doc stream...
    print(doc.content)
```

## Examples

### Streaming results from a query

```python
from nitric.resources import collection

query = collection("profiles").allow('reading').query()

async for doc in query.stream():
    # Process doc stream...
    print(doc.content)
```

## See also

- [query().where()](./collection-query-where)
- [query().limit()](./collection-query-limit)
- [query().pagingFrom()](./collection-query-pagingfrom)

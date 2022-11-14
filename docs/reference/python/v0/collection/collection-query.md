---
title: collection.query()
description: Begins a new query on a Collection.
---

Begins a new query on a Collection.

```python
from nitric.resources import collection

profiles = collection('profiles').allow('reading')

query = profiles.query()
```

## See also

- Adding filters: [query().where()](./collection-query-where)
- Limiting the results: [query().limit()](./collection-query-limit)
- Streaming results: [query().stream()](./collection-query-stream)
- Fetching results: [query().fetch()](./collection-query-fetch)

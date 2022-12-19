---
title: Python - collection.collection()
description: Get a query-only sub-collection reference, this can be used to query commonly named collections across documents.
---

Get a query-only sub-collection reference, this can be used to query commonly named collections across documents.

```python
from nitric.resources import collection

enemies = collection('profiles').allow('reading','writing').collection('enemies')
```

## Parameters

---

**name** required `string`

The name of the sub-collection to reference

---

## Examples

### Create a query for a sub collection

```python
from nitric.resources import collection

enemies = collection('profiles').allow('reading').collection('enemies')

enemiesQuery = enemies.query()
```

## See also

- [collection().query()](./collection-query)

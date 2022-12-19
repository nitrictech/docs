---
title: Node.js - collection.query()
description: Begins a new query on a Collection.
---

Begins a new query on a Collection.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles');

const profileQuery = profiles.query();
```

## See also

- Adding filters: [query().where()](./collection-query-where)
- Limiting the results: [query().limit()](./collection-query-limit)
- Streaming results: [query().stream()](./collection-query-stream)
- Fetching results: [query().fetch()](./collection-query-fetch)

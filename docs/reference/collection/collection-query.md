Begins a new query on a Collection.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles');

const profileQuery = profiles.query();
```

## See also

- Adding filters: [query().where()](./collection-query-where.md)
- Limiting the results: [query().limit()](./collection-query-limit.md)
- Streaming results: [query().stream()](./collection-query-stream.md)
- Fetching results: [query().fetch()](./collection-query-fetch.md)

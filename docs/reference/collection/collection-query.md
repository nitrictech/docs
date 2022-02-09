Begins a new query on a Collection

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles');

const profileQuery = profiles.query();
```

## See also

- [query().where()](./collection-query-where.md)
- [query().limit()](./collection-query-limit.md)
- [query().stream()](./collection-query-stream.md)
- [query().fetch()](./collection-query-fetch.md)

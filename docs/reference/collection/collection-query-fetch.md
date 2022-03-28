Fetch paged results from query.

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles');

const profileQuery = profiles.query();

const results = await profileQuery.fetch();
```

## Examples

### Paging through results from a query

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles');

const profileQuery = profiles.query();

let results = await profileQuery.fetch();

do {
  for (const doc of results.documents()) {
    // Do something with the document
    console.log(doc);
  }

  if (pagingToken) {
    profileQuery.pagingFrom(pagingToken);
    results = await profileQuery.fetch();
  }
} while (results.documents().length > 0 || results.pagingToken);
```

## See also

- [query().where()]()
- [query().limit()]()
- [query().pagingFrom()]()

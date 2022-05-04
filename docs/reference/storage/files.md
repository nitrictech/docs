Get a list of file references for files that exist on the bucket.

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('reading');

const files = assets.files();
```

## Notes

This method returns a list of [File](./file) references that exist on the bucket.

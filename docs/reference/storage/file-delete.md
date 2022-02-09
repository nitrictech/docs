Delete a file from a bucket

```javascript
import { bucket } from '@nitric/sdk';

const assets = bucket('assets').for('deleting');

const logo = assets.file('images/logo.png');

await logo.delete();
```

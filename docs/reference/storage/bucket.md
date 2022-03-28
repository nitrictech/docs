Create a new bucket for storing and retrieving files.

```javascript
import { bucket } from '@nitric/sdk';

// Create a readable/writable reference to an 'assets' bucket
const assets = bucket('assets').for('reading', 'writing', 'deleting');
```

## Parameters

---

**name** required `string`

The unique name of this buckets within the app. Subsequent calls to `bucket` with the same name will return the same object.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](./../access-control).

### Available permissions:

---

**reading**

This permission allows your function to read files from the bucket

---

**writing**

This permission allows your function to write files to the bucket

---

**deleting**

This permission allows your function to delete files from the bucket

---

## Working with files

See the following for examples on working with files in a bucket:

- [file()](./file.md)
- [file().get()](./file-get.md)
- [file().write()](./file-write.md)
- [file().delete()](./file-delete.md)
- [file().signUrl()](./file-signurl.md)

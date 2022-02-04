# Collections

## Overview

Nitric Collections simplify storing unstructured data into easily accessible documents.

### Collections

A collection in a unique collection of unstructured data that is made up of many documents. Collections can most often be thought of as a category of related documents. E.g. `countries`

### Documents

A document is a uniquely identifiable item within a collection. It can be thought of as a simple `JSON` document. E.g. if `countries` was a collection then `usa` might be a document within that collection.

### Sub-collections

A sub-collection is a collection that belongs to a single document. If we use `usa` as a parent document example then `cities` might be a sub-collection that holds cities within that country.

### Create a collection

Declaring a collection for your application can be done in a single line of config-as-code using the nitric SDK:

```javascript
import { collection } from '@nitric/sdk';

const profiles = collection('profiles').for('reading', 'writing', 'deleting');
```

### Writing a document

You can create a new document by simply using an existing collection reference to create a new document reference.

```javascript
await profiles.doc('Drake Mallard').set({
  firstName: 'Drake',
  lastName: 'Mallard',
  popularity: 10,
});
```

### Reading a document

Just like with writing, you can read a document by simple using it's reference.

```javascript
const doc = await profiles.doc('Bruce Wayne').get();
```

### Deleting a document

To delete a file that has been previously written, you use the `delete()` method on the file reference.

```javascript
await profiles.doc('Cain Marko').delete();
```

### Querying a collection

Simple queries on collections are supported as well

```javascript
const query = profiles
  .query()
  // query string prefixes
  .where('firstName', 'startsWith', 'Dra')
  // query on equality
  .where('lastName', '==', 'Mallard')
  // query on inequality
  .where('firstName', '!=', 'Bruce')
  // query on gt, lt, gte and lte as well
  .where('popularity', '>=', 7);
```

Results can be iterated either by paging or streaming

```javascript
// Paging
const results = await queue.fetch();
// Use the paging token in next query to fetch the next page
const token = results.pagingToken;

for (const doc of results.documents) {
  // do something with your documents
}

// Streaming
const stream = queue.stream();

stream.on('data', (snapshot) => {
  // Get document snapshots
});
```

### Working with subcollections

Working with subcollections is very similiar to working with a collection

```javascript
const drakeMallardEnemies = profiles.doc('Drake Mallard').collection('Enemies');
// Get a reference to a document on the sub collection
const steelBeak = duckMallardEnemies.doc('Steel Beak');
```

> nitric supports single depth of subcollection

### Querying subcollections

You can query same named subcollections across documents in a collection.

> This collection is only queryable

```javascript
const enemies = profiles.collection('enemies');

const allEnemies = enemies.query().stream();

allEnemies.on('data', (doc) => {
  // do something...
});
```

## What's next?

TODO: ================= update link below with reference page =================

- Learn more about collections and documents in our reference docs.

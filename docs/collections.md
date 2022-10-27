---
title: Collections
description: Document stores and collections
---

Nitric Collections simplify storing and querying data in easily accessible documents.

## Collections

A collection is a unique collection of unstructured data that is made up of many documents. Collections can most often be thought of as a category of related documents. E.g. `countries`

## Documents

A document is a uniquely identifiable item within a collection. It can be thought of as a simple `JSON` document. E.g. if `countries` were a collection then `usa` might be a document within that collection.

## Sub-collections

A sub-collection is a collection that belongs to a single document. If we use `usa` as a parent document example then `states` might be a sub-collection that holds states within that country.

## General usage

### Create collections

Declaring a collection for your application can be done in a single line of code using the Nitric SDK:

```javascript
import { collection } from '@nitric/sdk';

const countries = collection('Countries').for('reading', 'writing', 'deleting');
```

### Write documents

You can create a new document by using an existing collection reference to create a new document reference, then set a value for the document.

```javascript
await countries.doc('USA').set({
  name: 'United States of America',
  population: 329500000,
});
```

### Read documents

Just like with writing, you can read a document by using its reference.

```javascript
const doc = await countries.doc('USA').get();
```

### Delete documents

To delete a document that already exists, use the `delete()` method on the document reference.

```javascript
await countries.doc('USA').delete();
```

### Query collections

Simple queries on collections are supported as well.

```javascript
const query = countries
  .query()
  // query string prefixes
  .where('name', 'startsWith', 'United')
  // query on equality
  .where('name', '==', 'United States of America')
  // query on inequality
  .where('name', '!=', 'Canada')
  // query on gt, lt, gte and lte as well
  .where('population', '>=', 100000000);
```

Results can be iterated either by paging or streaming.

```javascript
// Paging
const results = await query.fetch();
// Use the paging token in next query to fetch the next page
const token = results.pagingToken;

for (const doc of results.documents) {
  // Do something with your documents
  console.log(doc.id);
}

// Streaming
const stream = query.stream();

stream.on('data', (snapshot) => {
  // Get document snapshots
});
```

## Sub-collections

### Create sub-collections

Working with a sub-collection is very similar to working with a collection, except they can be created dynamically at runtime. Simply construct a reference to a sub-collection within an existing document and you can being working with documents within that sub-collection.

```javascript
const states = countries.doc('USA').collection('States');
// Get a reference to a document on the sub collection
const stateOfColorado = states.doc('Colorado');
```

> Nitric supports a single depth for sub-collections

### Query sub-collections

You can query sub-collections across all documents in a collection when they have the same name. For example _query states from every country_.

```javascript
const allStates = countries.collection('States');
const foundStates = allStates.query().stream();

foundStates.on('data', (doc) => {
  // do something...
});
```

> This sub-collection reference is only queryable, since it's really an aggregate of all `States` sub-collections across all `Countries` documents. i.e. Query every state in every country.


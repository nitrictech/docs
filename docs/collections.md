---
title: Building Blocks - Collections
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

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { collection } from '@nitric/sdk';

const countries = collection('Countries').for('reading', 'writing', 'deleting');
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import collection

countries = collection('Countries').allow('reading', 'writing', 'deleting')
```

{% /tab %}
{% /tabs %}

### Write documents

You can create a new document by using an existing collection reference to create a new document reference, then set a value for the document.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
await countries.doc('USA').set({
  name: 'United States of America',
  population: 329500000,
});
```

{% /tab %}
{% tab label="Python" %}

```python
await countries.doc('USA').set({
  "name": "United States of America",
  "population": 329500000
})
```

{% /tab %}
{% /tabs %}

### Read documents

Just like with writing, you can read a document by using its reference.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const doc = await countries.doc('USA').get();
```

{% /tab %}
{% tab label="Python" %}

```python
doc = await countries.doc('USA').get()
```

{% /tab %}
{% /tabs %}

### Delete documents

To delete a document that already exists, use the `delete()` method on the document reference.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
await countries.doc('USA').delete();
```

{% /tab %}
{% tab label="Python" %}

```python
await countries.doc('USA').delete()
```

{% /tab %}
{% /tabs %}

### Query collections

Simple queries on collections are supported as well.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
query = countries \
  .query() \
  .where('name', 'startsWith', 'United') \
  .where('name', '==', 'United States of America') \
  .where('name', '!=', 'Canada') \
  .where('population', '>=', 100000000)
```

{% /tab %}
{% /tabs %}

Results can be iterated either by paging or streaming.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

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

{% /tab %}
{% tab label="Python" %}

```python
# Paging
results = await query.fetch()
# Use the paging token in next query to fetch the next page
token = results.pagingToken

for doc in results.documents:
  print(doc.id)

# Streaming
async for doc in query.stream():
  # Process doc stream...
  print(doc.content)
```

{% /tab %}
{% tab label="Python" %}

{% /tab %}
{% /tabs %}

## Sub-collections

### Create sub-collections

Working with a sub-collection is very similar to working with a collection, except they can be created dynamically at runtime. Simply construct a reference to a sub-collection within an existing document and you can begin working with documents within that sub-collection.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const states = countries.doc('USA').collection('States');
// Get a reference to a document on the sub collection
const stateOfColorado = states.doc('Colorado');
```

{% /tab %}
{% tab label="Python" %}

```python
states = countries.doc('USA').collection('States')
# Get a reference to a document on the sub collection
state_of_colorado = states.doc('Colorado')
```

{% /tab %}
{% /tabs %}

> Nitric supports a single depth for sub-collections

### Query sub-collections

You can query sub-collections across all documents in a collection when they have the same name. For example _query states from every country_.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const allStates = countries.collection('States');
const foundStates = allStates.query().stream();

foundStates.on('data', (doc) => {
  // do something...
});
```

{% /tab %}
{% tab label="Python" %}

```python
all_states = countries.collection('States')

async for doc in all_states.query().stream():
  # Do something
  pass
```

{% /tab %}
{% /tabs %}

> This sub-collection reference is only queryable, since it's really an aggregate of all `States` sub-collections across all `Countries` documents. i.e. Query every state in every country.

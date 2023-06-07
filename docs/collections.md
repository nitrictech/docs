---
title: Collections
description: Document stores and collections
---

Nitric provides functionality to provision and interact with collections in NoSQL databases. In these databases you store data in documents, which are then organized into collections. Collections can most often be thought of as a category of related documents. E.g. `countries`.

A document is a uniquely identifiable item within a collection. For example, if `countries` were a collection then `usa` might be a document within that collection. The documents themselves can be thought of as a simple `JSON` document.

Subcollections are collections that are stored within a document. If we use the previous example, then `states` might be a subcollection that holds states within the `usa` document. Subcollections can be thought of as an array of documents within a `JSON` document. Subcollections behave identically to collections, but unlike collections, subcollections are created at runtime rather than deploy time.

> Nitric supports a single depth for subcollections.

Below is an example of a collection, documents, and a subcollection in `JSON` format to demonstrate the relationship that each of the types have. This is not indicative of how it is actually stored in the database.

```json
// Countries collection
[
	// Country document
	{
		"id": "USA",
		"population": 329500000,
		// States subcollection
		"states": [
			// State document
			{ "id": "Alabama" },
			{ "id": "Alaska" },
			...
			{ "id": "Wyoming" }
		]
	},
	// Country Document
	{
		"id": "Canada",
		"population": 38250000
	}
]
```

## Creating Collections

Nitric allows you to define named collections. When defining collections, you can give permissions for reading, writing, or deleting documents in the collection.

Here's an example of how to create a collection, with permissions for reading, writing, and deleting:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { collection } from '@nitric/sdk';

const countries = collection('Countries').for('reading', 'writing', 'deleting');
```

When creating a collection and using TypeScript, you can add typing by specifying the type of documents that are stored in the collection. This won't do validation of the documents written to the collection, but will give you type completion when interacting.

```typescript
type Country = {
  name: string;
  population: number;
};

const countries = collection<Country>('Countries').for('reading');
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import collection

countries = collection('Countries').allow('reading', 'writing', 'deleting')
```

{% /tab %}
{% /tabs %}

## Creating Documents

Documents are created based on an ud and the contents of the document. If a document with that id already exists in the collection, then the document will be overwritten.

> Documents that are created using the Nitric SDK are compatible across cloud providers.

The below example first creates a collection that has permissions for writing. It then adds a document to that collection, with an id of `USA` and contents which describe the document.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { collection } from '@nitric/sdk';

const countries = collection('Countries').for('writing');

await countries.doc('USA').set({
  name: 'United States of America',
  population: 329500000,
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import collection

countries = collection('Countries').allow('writing')

await countries.doc('USA').set({
	"name": "United States of America",
	"population": 329500000
})
```

{% /tab %}
{% /tabs %}

If you then want to update the document, you will have to write over the existing document by referencing it by its id.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
await countries.doc('USA').set({
  name: 'United States of America',
  population: 330000000,
});
```

{% /tab %}
{% tab label="Python" %}

```python
await countries.doc("USA").set({
	"name": "United States of America",
	"population": 330000000,
})
```

{% /tab %}
{% /tabs %}

## Accessing Documents

To access documents you can either use an id lookup or a document query. An id lookup will return the exact document with that id, however you must know the id ahead of time. A query allows you to search for documents within a document that match specified criteria. Queries are discussed in "Querying Collections".

The below is an example of accessing a document from a collection.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { collection } from '@nitric/sdk';

const countries = collection('Countries').for('reading');

const country = await country.doc('USA').get();
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import collection

countries = collection("Countries").allow("reading")

country = await countries.doc("USA").get()
```

{% /tab %}
{% /tabs %}

The below is a more complete example of searching for a document based on a country name provided by a path parameter.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api, collection } from '@nitric/sdk';

const countries = collection('Countries').for('reading');

const countriesApi = api('Countries');

countriesApi.get('/country/:name', async (ctx) => {
  const id = ctx.req.params['name'];

  ctx.res.body = await countries.doc(id).get();
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api, collection

countries = collection("Countries").allow("reading")

country_api = api("Countries")

@country_api.get("/country/:name")
async def get_planet_route(ctx):
  name = ctx.req.params['name']

  ctx.res.body = await countries.doc(name).get()
```

{% /tab %}
{% /tabs %}

## Deleting Documents

## Querying Collections

Querying documents allows for searching for a set of documents that meet a certain constraint. An example of this is searching for any country that has a population of over 100 million.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const largeCountries = await countries
  .query()
  .where('population', '>', 100000000)
  .fetch();
```

{% /tab %}
{% tab label="Python" %}

```python
large_countries = (
	await countries
		.query()
		.where("population", ">", 100000000)
		.fetch()
)
```

{% /tab %}
{% /tabs %}

To limit the amount of results returned you can use `limit` on your queries. This will limit the amount of responses up to or equal to the amount provided. The following example shows searching for countries whose names start with S but only returning 10 results.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const sCountries = await countries
  .query()
  .where('name', 'startsWith', 'S')
  .limit(10)
  .fetch();
```

{% /tab %}
{% tab label="Python" %}

```python
s_countries = (
	await countries
		.query()
		.where("name", "startsWith", "S")
		.limit(10)
		.fetch()
)
```

{% /tab %}
{% /tabs %}

### Query Operators

The `where()` method takes three parameters: the field to filter on, a comparison operator, and a value. Nitric supports the following comparison operators:

- `<` less than
- `<=` less than or equal to
- `==` equal to
- `>` greater than
- `>=` greater than or equal to
- `!=` not equal to
- `startsWith`

### Compound (AND) queries

You can combine constraints with a logical `AND` by chaining multiple `where()` operations together.

The following example shows looking for a country that has over 100 million population and is not the United States of America.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const query = countries
  .query()
  .where('name', '!=', 'United States of America')
  .where('population', '>=', 100000000);

const results = await query.fetch();
```

{% /tab %}
{% tab label="Python" %}

```python
query = (
	countries
		.query()
		.where('name', '!=', 'United States of America')
		.where('population', '>=', 100000000)
)

results = await query.fetch()
```

{% /tab %}
{% /tabs %}

### Paging Results

Pagination divides results into "pages" of data which are more manageable than getting all the data at once. Once the application processes the first page, it can then process the next page, and so on. To enable an application to know when the last page ended and the new page starts, a paging token is used. The below example shows fetching 1000 documents, and then using a paging token to get the next 1000 documents.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const query = countries.query().limit(1000);

// Fetch first page
let results = await query.fetch();

let pagingToken = results.pagingToken;

// Fetch next page
if (pagingToken) {
  results = await query.pagingFrom(pagingToken).fetch();

  pagingToken = results.pagingToken;
}
```

{% /tab %}
{% tab label="Python" %}

```python
query = countries.query().limit(1000)

# Fetch first page
results = await query.fetch()

paging_token = results.paging_token

# Fetch next page
if paging_token is not None:
    results = await query.page_from(paging_token).fetch()

	paging_token = results.paging_token
```

{% /tab %}
{% /tabs %}

### Streaming Results

An alternative solution to paging is to stream the documents from the query. This way documents can be handled asynchronously rather than page by page.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const query = countries.query();

const stream = query.stream();

stream.on('data', (doc) => {
  console.log(doc.content);
});
```

{% /tab %}
{% tab label="Python" %}

```python
query = countries.query()

async for doc in query.stream():
	print(doc.content)
```

{% /tab %}
{% /tabs %}

## Creating Subcollections

Working with a subcollection is very similar to working with a collection, except they can be created dynamically at runtime. You can construct a reference to subcollection within an existing document to begin working with documents within that subcollection.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const states = countries.doc('USA').collection('States');

// Get a document from the subcollection
const stateOfColorado = await states.doc('Colorado').get();
```

{% /tab %}
{% tab label="Python" %}

```python
states = countries.doc('USA').collection('States')

# Get a document from the subcollection
state_of_colorado = await states.doc('Colorado').get()
```

{% /tab %}
{% /tabs %}

## Query Subcollections

You can query subcollections in the same way that you can query collections, using fetching, paging, or streaming.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const query = countries.doc('USA').collection('States').query();

// Fetching
const results = query.fetch();

// Paging
const results = query.pagingFrom(results.pagingToken).fetch();

// Streaming
const stream = query.stream();

stream.on('data', (doc) => {
  console.log(doc.content);
});
```

{% /tab %}
{% tab label="Python" %}

```python
query = countries.doc("USA").collection("States").query()

# Fetching
results = query.fetch()

# Paging
results = query.page_from(results.paging_token).fetch()

# Streaming
async for doc in query.stream():
	print(doc.content)
```

{% /tab %}
{% /tabs %}

You can also query common subcollections across multiple documents when they have the same name.

> This subcollection reference is only queryable, since it's really an aggregate of all `States` subcollections across all `Countries` documents. i.e. Query every state in every country.

For example, to query every state from every country, you can use the following code.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const allStates = countries.collection('States');

const results = allStates.query().fetch();
```

{% /tab %}
{% tab label="Python" %}

```python

all_states = countries.collection('States')

results = all_states.query().fetch()
```

{% /tab %}
{% /tabs %}

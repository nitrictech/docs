# Collections

## Overview

Nitric Collections simplify storing unstructured data into easily accessible documents.

### Collections

A collection in a unique collection of unstructured data that is made up of many documents. Collections can most often be thought of as a category of related documents. E.g. `countries`

### Documents

A document is a uniquely identifiable item within a collection. It can be thought of as a simple `JSON` document. E.g. if `countries` was a collection then `usa` might be a document within that collection.

### Sub-collections

A sub-collection is a collection that belongs to within a document. If we use `usa` as a parent document example then `cities` might be a sub-collection that holds cities within that country.

### Create a collection

Declaring a collection for your application can be done in a single line of config-as-code using the nitric SDK:

```javascript
import { collection } from '@nitric/sdk'

const profiles = bucket('users').for('reading', 'writing', 'deleting')
```

### Writing a document

You can create a new document by simply using an existing collection reference to create a new document reference.

```javascript
await profiles.doc("Drake Mallard").set({
	avatar: "someUrl"
});
```

### Reading a document

Just like with writing, you can read a document by simple using it's reference.

```javascript
const doc = await profiles.doc("Bruce Wayne").get();
```

### Deleting a document

To delete a file that has been previously written, you use the `delete()` method on the file reference.

```javascript
await profiles.file('users/cain-marko/profile.png').delete()
```

### Accessing files

Currently, Nitric Storage Buckets cannot be public, however, you can generate short-lived download or upload URLs with the pre-signed URLs feature. These URLs are useful when you want to provide one of your users with a temporary link to download or upload a file.

```javascript
import { storage } from '@nitric/sdk';

const signedUrl = await profiles.file('profile.png').signUrl(storage.FileMode.Read)
```

## What's next?

TODO: ================= update link below with reference page =================

- Learn more about storage, buckets and files in our reference docs.

> Nitric supports subcollections to a 1-depth

## Practical Example

```typescript
import { collection } from "@nitric/sdk"


const countryApi = api("countries")
const countries = collection("countries");


// Example entrypoint to seed our countries collection
countryApi.post("/seed", async ctx => {
	const usa = countries.doc("usa");

	await usa.set({
		name: "United States",
	});

	// Get a reference to a subcollection of the "usa"
	// document called cities
	const usaCities = usa.collection("cities");
	const newYork = usaCities.doc("new-york");

	await newYork.set({
		name: "New York",
	});
});
```

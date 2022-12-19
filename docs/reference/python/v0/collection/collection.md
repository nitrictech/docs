---
title: Python - collection()
description: Creates a new Collection.
---

Creates a new Collection.

```python
from nitric.resources import collection

profiles = collection('profiles')
```

## Parameters

---

**name** required `string`

The unique name of this Collection within the app. Subsequent calls to `collection` with the same name will return the same object.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](../../../../access-control).

### Available permissions:

---

**reading**

This permission allows your code to read and query documents from the collection.

---

**writing**

This permission allows your code to write documents to the collection.

---

**deleting**

This permission allows your code to delete documents from the collection.

---

## Examples

### Create a collection

```python
from nitric.resources import collection

profiles = collection('profiles')
```

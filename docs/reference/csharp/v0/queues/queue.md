---
title: queue()
description: Creates a new Queue to send and receive asynchronous tasks.
---

Creates a new Queue to send and receive asynchronous tasks.

```C#
using Nitric.Sdk;
using Nitric.Sdk.Queue;

var batchQueue = Nitric.Queue("batchQueue").With(QueuePermission.Writing);
```

## Parameters

---

**name** required `string`

The unique name of this Queue within the app. Subsequent calls to `queue` with the same name will return the same object.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](../../../../access-control).

### Available permissions:

---

**sending**

This permission allows your code to send new tasks to the queue.

---

**receiving**

This permission allows your code to receive tasks from the queue.

---

### Notes

In most instances, code should either send to or receive from a queue, usually not both.

## Examples

### Create a Queue

```C#
using Nitric.Sdk;
using Nitric.Sdk.Queue;

var batchQueue = Nitric.Queue("batchQueue");
```

### Receive tasks from a queue

```C#
using Nitric.Sdk;
using Nitric.Sdk.Queue;

var batchQueue = Nitric.Queue("batchQueue").With(QueuePermission.Reading);

batchQueue.Receive();
```

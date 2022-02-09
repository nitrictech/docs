Creates a new Queue to send and receive asynchronous tasks

```javascript
import { queue } from '@nitric/sdk';

const batchQueue = queue('batch').for('sending');
```

## Parameters

---

**name** required `string`

The unique name of this Queue within the app. Subsequent calls to `queue` with the same name will return the same object.

---

## Access

All Nitric resources provide access permissions you can use to specify the level of access your code needs to the resource. See here for details [Access Control documentation](./../access-control).

### Available permissions:

---

**sending**

This permission allows your code to send new tasks to the queue.

---

**receiving**

This permission allows your code to receive tasks from the queue.

---

### Notes:

In most instances code should either send to or receive from a queue, usually not both.

## Examples

### Create a Queue

```javascript
import { queue } from '@nitric/sdk';

const batchQueue = queue('batch');
```

### Receive tasks from a queue

```javascript
import { queue } from '@nitric/sdk';

const batchQueue = queue('batch').for('receiving');

await batchQueue.send([{ payload }]);
```

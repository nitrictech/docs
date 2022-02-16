## Overview

Queues and Tasks provide a scalable, decoupled, way for functions and containers to communicate asynchronously.

### Queue

A queue is a named target to which tasks can be sent. The can be thought of as a collection of tasks that are grouped together.

They're awesome for allowing serverless functions to process messages asynchronously and in batches.

### Task

A task is a form of message that can be sent to a queue. They can be thought of as a collection of data that has been queued for processing some time in the future.

## The basics

### Creating a Queue

```javascript
import { queue } from '@nitric/sdk';

const transactionQueue = queue('process-transactions').for(
  'sending',
  'receiving'
);
```

## Sending Tasks

```javascript
await transactionQueue.send([
  {
    payloadType: 'hello-world-task',
    payload: {
      message: 'hello world',
    },
  },
]);
```

## Receiving & Acknowledging Tasks

```javascript
const tasks = await transactionQueue.receive(10);

for (let task of tasks) {
  // process your tasks data
  console.log(task.paylaod);
  // aknowledge when the task is complete
  await task.complete();
}
```

<!--
## What's next?

TODO: ================= update link below with reference page =================

- Learn more about topics and events in our reference docs.
-->

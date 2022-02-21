Queues and Tasks provide a scalable, decoupled, way for functions and containers to communicate asynchronously.

### Queue

A queue is a named target to which tasks can be sent. They can be thought of as a collection of tasks that are grouped together.

They're awesome for allowing functions to process work asynchronously. Queues are often paired with [Schedules](/docs/schedules/_index.md) to support batch workloads, like nightly processes.

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

When pulling tasks off a queue, they aren't immediately deleted from the queue, they're leased. Leased tasks are hidden, preventing any other functions from receiving them until the lease expires.

When your code successfully processes a task it should `complete` the task, this permanently removes it from the queue.

If the lease expires before the task is marked as complete it will reappear in the queue and can be received again. This prevents tasks from being lost in failure scenarios, such as if your function has an error before completing the task.

```javascript
const tasks = await transactionQueue.receive(10);

for (let task of tasks) {
  // process your task's data
  console.log(task.payload);
  // acknowledge when the task is complete
  await task.complete();
}
```

## What's next?

- Learn more about queues in our [reference docs](/docs/reference/queues/queue).

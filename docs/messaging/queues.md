---
title: Queues
description: Creating and using queues with Nitric
---

Queues and Tasks provide a scalable, decoupled, way for functions and containers to communicate asynchronously.

## Queue

Queue are named targets where tasks can be sent. They can be thought of as a group of related tasks. Unlike [topics](./topics), tasks sent to a queue won't automatically trigger functions to process them. Instead, functions receive tasks from the queue by requesting them.

This makes queues awesome for processing work asynchronously, often paired with [schedules](/docs/schedules) to support batch workloads, like nightly processes.

## Task

A task is a form of message that can be sent to a queue. They can be thought of as a collection of data that has been queued for processing some time in the future.

# The basics

## Creating a Queue

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

## Receiving and Acknowledging Tasks

When pulling tasks off a queue they aren't immediately deleted, they're leased. Leased tasks are hidden, preventing other functions from receiving them unless the lease expires.

When your code successfully processes a task it should `complete` the task, this permanently removes it from the queue.

If the lease expires before the task is marked as complete it will reappear in the queue and can be received again. This prevents tasks from being lost in failure scenarios. If your function encounters an error or is terminated before completing the task it will automatically reappear on the queue to be processed again.

```javascript
const tasks = await transactionQueue.receive(10);

for (let task of tasks) {
  // process your task's data
  console.log(task.payload);
  // acknowledge when the task is complete
  await task.complete();
}
```

# What's next?

- Learn more about queues in our [reference docs](/docs/reference/queues/queue).

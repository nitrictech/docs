---
title: Messaging
description: Using Queues and Topics for async messaging with Nitric
---

## Events & Topics

Topics and Events provide a scalable, decoupled, way to communicate between functions and containers.

### Topics

A topic is a named target where events can be published. They can be thought of as a subject that your functions can discuss with each other.

They're awesome for allowing serverless functions to communicate in a stateless, scalable and highly decoupled way.

### Events

Events are messages that can be published on a topic. They can be thought of as a notification that is sent to say that something new has happened.

### Subscriptions

A subscription is something listening to a topic. You can think of it as a channel that notifies your application when something new arrives on the topic.

### Examples

#### Creating a Topic

Before events can be published or subscribed to, a topic must be defined.

```javascript
import { topic } from '@nitric/sdk';

const userCreatedTopic = topic('user-created').for('publishing');
```

#### Publishing an event

To send an event to a topic and notify all subscribers, use the `publish()` method on the topic reference.

```javascript
const data = userCreatedTopic.publish({
  payload: {
    email: 'new.user@example.com',
  },
});
```

#### Subscribing to a topic

To execute a function when new events are published you can set up subscribers. The delay between publishing an event and a subscriber being executed is usually only a few milliseconds. This makes subscribers perfect for responding to events as they happen.

```javascript
userCreatedTopic.subscribe(async (ctx) => {
  // Extract data from the event payload for processing
  const { email } = ctx.req.json();
  sendWelcomeEmail(email);
});
```

#### Limitations on Publishing and Subscribing

Nitric won't allow you to request publishing access and set up a subscriber in the same function.

```javascript
// this isn't valid
import { topic } from '@nitric/sdk';

const loopTopic = topic('infinite').for('publishing');

loopTopic.subscribe(async (ctx) => {
  await loopTopic.publish({ payload: {} });
});
```

The limitation exists to protect you from infinite loops in deployed functions where a function calls itself indirectly via a topic. These sorts of mistakes can lead to large unintentional cloud charges - something you probably want to avoid.

### Reliable event handling

If a subscriber encounters an error or is terminated before it finishes processing an event, what happens? Is the event lost?

Nitric deploys topics to cloud services that support "at-least-once delivery". Events are _usually_ delivered exactly once, in the same order that they're published. However, to prevent lost events, they're sometimes delivered more than once or out of order.

Typically, retries occur when a subscriber doesn't respond successfully, like when unhandled exceptions occur. You'll want to make sure events aren't processed again by accident or partially processed, leaving your system in an unexpected state.

Luckily, building atomic publishers and idempotent subscribers is enough to solve for this.

### Atomic publishers

Your publishers need to update your database _and_ publish associated events. If a database update fails, the events should _never_ be sent. If the database update succeeds, the events should _always_ publish. The two shouldn't occur independently (i.e. one shouldn't fail while the other succeeds).

One solution to this problem is the [Transactional Outbox Pattern](https://microservices.io/patterns/data/transactional-outbox.html).

### Idempotent subscribers

Events can be delivered more than once, but they should only be _processed_ once. To do this your subscribers need to identify and disregard duplicate events.

Usually checking for duplicate payloads or IDs is enough. When you receive an event you've seen before don't process it, skip straight to returning a `success` response from your subscriber.

```javascript
import { topic } from '@nitric/sdk';
import { isDuplicate } from '../common';

const updates = topic('updates');

updates.subscribe((ctx) => {
  if (isDuplicate(ctx.req)) {
    return ctx;
  }
  // not a duplicate, process the event
  //...
});
```

> If you're checking for duplicate IDs, make sure publishers can't resend failed events with new IDs

## Queues

Queues and Tasks provide a scalable, decoupled, way for functions and containers to communicate asynchronously.

### Queues

Queues are named targets where tasks can be sent. They can be thought of as a group of related tasks. Unlike [topics](./topics), tasks sent to a queue won't automatically trigger functions to process them. Instead, functions receive tasks from the queue by requesting them.

This makes queues awesome for processing work asynchronously, often paired with [schedules](/docs/schedules) to support batch workloads, like nightly processes.

### Tasks

A task is a form of message that can be sent to a queue. They can be thought of as a collection of data that has been queued for processing some time in the future.

### Examples

#### Creating a Queue

```javascript
import { queue } from '@nitric/sdk';

const transactionQueue = queue('process-transactions').for(
  'sending',
  'receiving'
);
```

#### Sending Tasks

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

#### Receiving and Acknowledging Tasks

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

- Learn more about topics in our [reference docs](/docs/reference/topic/topic).
- Learn more about queues in our [reference docs](/docs/reference/queues/queue).
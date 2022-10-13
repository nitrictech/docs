Topics and Events provide a scalable, decoupled, way to communicate between functions and containers.

### Topics

A topic is a named target where events can be published. They can be thought of as a subject that your functions can discuss with each other.

They're awesome for allowing serverless functions to communicate in a stateless, scalable and highly decoupled way.

### Events

Events are the messages that can be published to a topic. They can be thought of as kind of notification that is sent to say that something new has happened.

### Subscriptions

A subscription is something listening to a topic. You can think of it as a channel that notifies your application when something new arrives on the topic.

## The basics

### Creating a Topic

Before events can be published or subscribed to, a topic must be defined.

```javascript
import { topic } from '@nitric/sdk';

const userCreatedTopic = topic('user-created').for('publishing');
```

### Publishing an event

To send an event to a topic and notify all subscribers, use the `publish()` method on the topic reference.

```javascript
const data = userCreatedTopic.publish({
  payload: {
    email: 'new.user@example.com',
  },
});
```

### Subscribing to a topic

To execute a function when new events are published you can setup subscribers. The delay between publishing an event and a subscriber being executed is usually only a few milliseconds. This makes subscribers perfect for responding to events as they happen.

```javascript
userCreatedTopic.subscribe(async (ctx) => {
  // Extract data from the event payload for processing
  const { email } = ctx.req.json();
  sendWelcomeEmail(email);
});
```

### Limitation on Publishing and Subscribing

Nitric won't allow you to request publishing access and setup a subscriber in the same function.

```javascript
// this isn't valid
import { topic } from '@nitric/sdk';

const loopTopic = topic('infinite').for('publishing');

loopTopic.subscribe(async (ctx) => {
  await loopTopic.publish({ payload: {} });
});
```

The limitation exists to protect you from infinite loops in deployed functions where a function calls itself indirectly via a topic. These sorts of mistakes can lead to large unintentional cloud charges - something you probably want to avoid.

## Reliable event handling

If a subscriber encounters an error or is terminated before it finishes processing an event, what happens? Is the event lost?

Nitric deploys topics to cloud services that support "at-least-once delivery". Events are _usually_ delivered exactly once, in the same order that they're published. However, to prevent lost events, they're sometimes delivered more than once or out of order.

Typically, retries occur when a subscriber doesn't respond successfully, like when unhandled exceptions occur. You'll want to make sure events aren't processed again by accident or partially processed, leaving your system in an unexpected state.

Luckily, building atomic publishers and idempotent subscribers is enough to solve for this.

### Atomic publishers

Basically, your publishers needs to update your database _and_ publish associated events. If a database update fails, the events should _never_ be sent. If the database update succeeds, the events should _always_ publish. The two shouldn't occur independently (i.e. one shouldn't fail while the other succeeds).

One solution to this problem is the [Transactional Outbox Pattern](https://microservices.io/patterns/data/transactional-outbox.html).

### Idempotent subscribers

Events can be delivered more than once, but they should only be _processed_ once. To do this your subscribers need to identify and disregard duplicate events.

Usually checking for duplicate payloads or IDs is enough. When you receive an event you've seen before don't process it, skip straight to returning a success response from your subscriber.

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

## What's next?

- Learn more about topics in our [reference docs](/docs/reference/topic/topic).

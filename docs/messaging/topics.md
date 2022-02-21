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

Before events can be published or subscribers created a topic must be defined.

```javascript
import { topic } from '@nitric/sdk';

const userCreatedTopic = topic('user-created').for('publishing');
```

## Publishing an event

To send an event to a topic and notify all subscribers, use the `publish()` method on the topic reference.

```javascript
const data = userCreatedTopic.publish({
  payload: {
    email: 'new.user@example.com',
  },
});
```

## Subscribing to a topic

To execute a function when new events are published you can setup subscribers. The delay between publishing an event and a subscriber being executed is usually only a few milliseconds. This makes subscribers perfect for responding to events as they happen.

```javascript
userCreatedTopic.subscribe(async (ctx) => {
  // Extract data from the event payload for processing
  const { email } = ctx.req.json();
  sendWelcomeEmail(email);
});
```

## Limitation on Publishing and Subscribing

Nitric won't allow you to request publishing access and setup a subscriber in the same function.

```javascript
// this isn't valid
import { topic } from '@nitric/sdk';

const loopTopic = topic('infinite').for('publishing');

loopTopic.subscribe(async (ctx) => {
  await loopTopic.publish({ payload: {} });
});
```

The limitation exists to avoid infinite loops in deployed functions, where a function calls itself indirectly via a topic. These sorts of mistakes can lead to large unintentional cloud charges - something you probably want to avoid.

## What's next?

- Learn more about topics in our [reference docs](/docs/reference/topic/topic).

# Topics

## Overview

Topics and Events provide a scalable, decoupled, way to communicate between functions and containers.

### Topics

A topic is a named target to which events can be published. They can be thought of as a subject that your functions can discuss with each other.

They're awesome for allowing serverless functions to communicate in a stateless, scalable and highly decoupled way.

### Events

Events are the messages that can be published to a topic. They can be thought of as kind of notification that is sent to say that something new has happened.

### Subscriptions

A subscription is something listening to a topic. You can think of it as a channel that notifies your application when something new arrives on the topic.

## The basics

### Creating a Topic

```javascript
import { topic } from '@nitric/sdk';

const userCreatedTopic = topic('user-created').for('publishing');
```

## Publishing an event

```javascript
userCreatedTopic.publish({
  email: 'new.user@example.com',
});
```

## Subscribing to a topic

```javascript
userCreatedTopic.subscribe(async (ctx) => {
  const { email } = JSON.parse(ctx.req.data);
  sendWelcomeEmail(email);
});
```

## What's next?

TODO: ================= update link below with reference page =================

- Learn more about topics and events in our reference docs.

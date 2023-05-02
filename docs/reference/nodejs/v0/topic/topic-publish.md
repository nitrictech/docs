---
title: Node.js - topic.publish()
description: Reference for Nitric's Node.js library - Publish new events to the topic.
---

Publish an event (push based message) to a topic.

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates').for('publishing');

await updates.publish({
  payload: {
    something: 'amazing happened',
  },
});
```

## Parameters

---

**event** required `NitricEvent`

The event to publish to the topic

| Properties                                                                       |
| -------------------------------------------------------------------------------- |
| **id** optional `string` <br/> unique id to apply to the event.                  |
| **payload** required `Record<string, any>` <br/> payload to send with the event. |
| **payloadType** optional `string` <br/> a hint to the type of payload supplied.  |

---

**opts** optional `object`

Additional options when publishing a message to the topic.

| Properties                                                                                   |
| -------------------------------------------------------------------------------------------- |
| **delay** optional `number` <br/> A number of seconds to delay the delivery of this message. |

---

## Examples

### Publish a message

Publishing messages to a topic will push a copy of the message to each of the topic's subscribers. By default, delivery occurs without a delay.

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates').for('publishing');

await updates.publish({
  payload: {
    something: 'amazing happened',
  },
});
```

### Delaying message delivery

You can delay the delivery of messages sent to a topic. The current maximum delay is 7 days (604800 seconds).

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates').for('publishing');

const event = { payload: { example: 'delayed' } };

// 10 minute delay
await updates.publish(event, { delay: 600 });
```

## Notes

- If an id is not supplied with an event a UUID(v4) will be generated for you.
- A function may subscribe to OR publish to a topic but not both.

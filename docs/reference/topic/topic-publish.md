Publishes a topic.

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates').for('publishing');

await updates.publish({
  payload: {
    something: 'amazing happened',
  },
});
```

## Paramaters

---

**event** required `NitricEvent`

The event to publish to the topic

| Properties                                                                       |
| -------------------------------------------------------------------------------- |
| **id** optional `string` <br/> unique id to apply to the event.                  |
| **payload** required `Record<string, any>` <br/> payload to send with the event. |
| **payloadType** optional `string` <br/> a hint to the type of payload supplied.  |

---

## Examples

### Publish a topic

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates').for('publishing');

await updates.publish({
  payload: {
    something: 'amazing happened',
  },
});
```

## Notes

- If an id is not supplied with an event a UUID(v4) will be generated for you.
- A function may subscribe to OR publish to a topic but not both.

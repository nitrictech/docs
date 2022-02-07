Creates a new Schedule to run a function on a defined frequency.

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 3 hours
const reportSchedule = schedule('run-a-report').every(
  '3 hours',
  async (ctx) => {
    // do some processing
  }
);
```

## Parameters

---

**description** required `string`

The unique name of this Schedule within the app. Subsequent calls to `schedule` with the same name will return the same object.

---

## Notes:

Schedules do not require access permissions to be specified.

## Examples

### Create a Schedule

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 3 minutes
schedule('send-reminder').every('3 minutes', async (ctx) => {
  // do some processing
});

// Create a schedule that runs every 3 hours
schedule('send-reminder').every('3 hours', async (ctx) => {
  // do some processing
});

// Create a schedule that runs every 3 days
schedule('send-reminder').every('3 days', async (ctx) => {
  // do some processing
});
```

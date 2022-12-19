---
title: Node.js - schedule()
description: Creates a new Schedule to run a function on a defined frequency.
---

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

## Notes

- Schedules do not require access permissions to be specified.

- Currently, local execution and testing of schedules is not supported.

- You can directly test the functions that respond to scheduled triggers by sending HTTP requests to those functions with the same payload as defined in your schedule.

> Coming Soon

- Local and manual testing of schedules is on our backlog to be completed soon.

## Examples

### Create a Schedule

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 3 minutes
schedule('send-reminder').every('3 minutes', async (ctx) => {
  // Code which sends a reminder
});

// Create a schedule that runs every 3 hours
schedule('send-reminder').every('3 hours', async (ctx) => {
  // Code which sends a reminder
});

// Create a schedule that runs every 3 days
schedule('send-reminder').every('3 days', async (ctx) => {
  // Code which sends a reminder
});
```

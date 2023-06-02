---
title: Node.js - schedule.cron()
description: Reference for Nitric's Node.js library - Sets the cron expression and one or many handlers to be triggered.
---

Sets the cron expressions that determines when the schedule triggers and a callback to be triggered.

```javascript
import { schedule } from '@nitric/sdk';

schedule('send-reminder').cron('0 1 1 * *', async (ctx) => {
  // do some processing
});
```

## Parameters

---

**expression** required `string`

The expression that sets when the schedule will be triggered. This value should be a standard 5 value Unix cron expression, e.g. '0 1 1 \* \*'.

**middleware** required `EventMiddleware` or `EventMiddleware[]`

One or more callback functions to use as the handler which will run on the defined frequency.

---

## Examples

### Create a Schedule

```javascript
import { schedule } from '@nitric/sdk';

// every 15 minutes
schedule('check for updates').cron('0/15 * * * *', async (ctx) => {
  console.log('checking for updates');
});

// at 1:00am on the 1st of every month
schedule('delete stale data').cron('0 1 1 * *', async (ctx) => {
  console.log('clearing data');
});
```

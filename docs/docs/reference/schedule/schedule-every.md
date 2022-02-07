Sets the frequency and one or many handlers to be triggered.

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 3 hours
schedule('send-reminder').every('3 hours', async (ctx) => {
  // do some processing
});
```

## Parameters

---

**rate** required `string`

The rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'days', 'hours' or 'minutes'.

**...middleware** required `HttpMiddleware`

One or more middleware functions to use as the handler which will run on defined frequency.

---

## Examples

### Create a Schedule to run every 3 minutes

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 3 minutes
schedule('send-reminder').every('3 minutes', async (ctx) => {
  // do some processing
});
```

### Create a Schedule with multiple handlers

```javascript
import { schedule } from '@nitric/sdk';

// Create a middleware to handle report generation
async function generateReport(ctx: faas.EventContext): Promise<void> {
  // Code which generates a report
}

// Create a middleware to handle notifications
async function sendNotification(ctx: faas.EventContext): Promise<void> {
  // Code which generates a report
}

// Create a schedule that runs every 3 hours
schedule('generateReport').every('7 days', generateReport, sendNotification);
```

### Create multiple Schedules to reuse a handler

```javascript
import { schedule } from '@nitric/sdk';

// Create a middleware to handle report generation
async function generateReport(ctx: faas.EventContext): Promise<void> {
  // Code which generates a report
}

// Create a schedule that runs every hour
schedule('hourlyReport').every('1 hours', generateReport);

// Create a schedule that runs every day
schedule('dailyReport').every('1 days', generateReport);
```

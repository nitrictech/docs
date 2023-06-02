---
title: Schedules
description: Create and deploy schedules with Nitric
---

Nitric provides schedules support for writing applications that process batch tasks, reporting and other work that happens on a set cadence.

The `schedule` resource lets you define named schedules, including their frequency or cron expression and a callback to run on that schedule.

> ⚠️ Note: Schedules aren't currently supported by Nitric on Azure due to the limitations of that provider.

If you're looking for a way to perform once-off work at some point in the future, it's recommend to use [delayed messaging](./messaging#delayed-messaging) instead of schedules.

## Creating schedules

There are two ways to define schedules. Using `every` allows simple rate definitions to trigger the callback or `cron` can be used for more complex scenarios.

Here are a couple of example schedules that use both definition types:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { schedule } from '@nitric/sdk';

// Run every 5 minutes
schedule('process-transactions').every('5 minutes', async (ctx) => {
  console.log(`processing at ${new Date().toLocaleString()}`);
});

// Run at 22:00 Monday through Friday.
schedule('send-reminder').cron('0 22 * * 1-5', async (ctx) => {
  console.log(`reminder at ${new Date().toLocaleString()}`);
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import schedule

# Run every 5 minutes
@schedule("process-transactions", every="5 minutes")
async def process_transactions(ctx):
    pass
```

> Note: `cron` schedules aren't currently supported in the Python SDK

{% /tab %}
{% /tabs %}

## Using `every`

Using `every` allows for expressive schedules which run a callback as often as once per minute. The description of how often to run a schedule is known as it's `rate`.

Here are some example rate-based schedules:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { schedule } from '@nitric/sdk';

schedule('process-often').every('5 minutes', async (ctx) => {
  console.log(`processing at ${new Date().toLocaleString()}`);
});

schedule('process-sometimes').every('2 hours', async (ctx) => {
  console.log(`processing at ${new Date().toLocaleString()}`);
});

schedule('process-rarely').every('30 days', async (ctx) => {
  console.log(`processing at ${new Date().toLocaleString()}`);
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import schedule


@schedule("process-often", every="5 minutes")
async def process_often(ctx):
    pass

@schedule("process-sometimes", every="2 hours")
async def process_sometimes(ctx):
    pass

@schedule("process-rarely", every="30 days")
async def process_rarely(ctx):
    pass

```

{% /tab %}
{% /tabs %}

### Rates

Valid rates include a number followed by a frequency value e.g. `5 minutes`. The valid frequencies are `minutes`, `days` and `months`.

> In all cases the frequencies can be singular or plural, so `1 day` and `1 days` are equivalent.

## Using `cron`

Using `cron` allows for finer control of how frequently your schedules run.

The most frequently a schedule can run is once per minute, for this reason Nitric uses 5 field cron expressions with values for minute, hour, day of month, month and day of week.

Here are some example cron-based schedules:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

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

{% /tab %}
{% tab label="Python" %}

> Note: `cron` schedules aren't currently supported in the Python SDK

{% /tab %}
{% /tabs %}

### Expression format

Nitric uses traditional Unix formatted cron expressions

| Field          | Values          |
| -------------- | --------------- |
| Minute         | 0-59            |
| Hour           | 0-23            |
| Day (of month) | 1-31            |
| Month          | 1-12 or JAN-DEC |
| Day (of week)  | 0-6 or SUN-SAT  |

**Common values**

| Value | Description          |
| ----- | -------------------- |
| \*    | Wildcard (any value) |
| ,     | List separator       |
| -     | Value range          |
| /     | Step values          |

#### Nitric schedules on AWS

If you're familiar with AWS services that support cron expressions (such as EventBridge) you're probably aware that they use an alternate expression format which is incompatible with the traditional Unix format.

AWS cron expression should **not** be used with Nitric. Instead, Nitric will automatically convert standard Unix expressions into AWS expressions during deployment.

##### Converting from AWS

AWS cron expressions expect a value between 1-7 to represent day of week, while Unix expressions use a value between 0-6. Additionally, AWS expressions contain an additional (6th) field for Year (with a value between 1970-2199). Lastly, they expect a special `?` wildcard character in either the day of week or day of month field.

To convert an AWS expression to a standard Unix expression you need to do the following:

- Reduce any day of week values by 1
- Remove the year field
- Replace `?` with `*`

Here are some examples:

| AWS Expression     | Standard Expression |
| ------------------ | ------------------- |
| 0 10 \* _ ? _      | 0 10 \* \* \*       |
| 0 18 ? _ 1-5 _     | 0 18 \* \* 0-4      |
| 0 18 ? _ MON-FRI _ | 0 18 \* \* MON-FRI  |

> Note: if you're using the `year` field to control which years your expressions execute this should be moved to logic in the callback function instead.

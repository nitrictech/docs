---
title: Building Blocks - Schedules
description: Create and deploy schedules with Nitric
---

Nitric makes it easy to create functions that run on a schedule. Schedules are most useful for batch workloads, reporting and other activities that happen on a set cadence.

## Frequencies

Frequencies define when your functions should run. Nitric supports expressive schedules which run as often as once per minute. Frequencies can be configured in minutes, hours and days.

## General usage

The guide below highlights the features of Nitric Schedules.

### Create schedules

Creating schedules with Nitric can be done with a single line of code to define resources.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 5 minutes
schedule('process-transactions').every('5 minutes', async (ctx) => {
  // do some processing
});

// Create a schedule that runs every 3 hours
schedule('send-reminder').every('3 hours', async (ctx) => {
  // do some processing
});

// We can also just provide a simple singular rate as well
schedule('send-reports').every('day', async (ctx) => {
  // do some processing
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import schedule

# Create a schedule that runs every 5 minutes
@schedule("process-transactions", every="5 minutes")
async def process_transactions(ctx):
    pass

# Create a schedule that runs every 3 hours
@schedule("send-reminder", every="3 hours")
async def send_reminder(ctx):
    pass

# We can also just provide a simple singular rate as well
@schedule("send-reports", every="day")
async def send_reports(ctx):
    pass
```

{% /tab %}
{% /tabs %}

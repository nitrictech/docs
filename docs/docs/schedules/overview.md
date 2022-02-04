# Schedules

## Overview

Nitric makes it easy to create simple expressive scheduled functions.

### Frequencies

Nitric supports schedules as frequent as once per minute, available frequencies can be configured in minutes, hours and days.

## The basics

<!-- TODO: ================= update link below with example ================= -->

The guide below highlights how to create schedules, you can use it in your own project or take a look at [one of our examples](#)

### Create a schedule

Creating schedules with Nitric can be done in a single line using our `config-as-code` functionality to define resources.

```javascript
import { schedule } from '@nitric/sdk';

// Create a schedule that runs every 3 hours
schedule('transaction-processing').every('3 hours', async (ctx) => {
  // do some processing
});

// We can also just provide a simple singular rate as well
schedule('send-reports').every('day', async (ctx) => {
  // do some processing
});
```

## What's next?

<!-- TODO: ================= update link below with reference page ================= -->

- Learn more about storage, buckets and files in our reference docs.

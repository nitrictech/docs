---
title: csharp - schedule.every()
description: Reference for Nitric's csharp library - Sets the frequency and one or many handlers to be triggered.
---

Sets the frequency and one or many handlers to be triggered.

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Function;

Nitric.Schedule("send-reminder").Every(3, Frequency.Hours, context =>
{
    // do some processing
    return context;
});

Nitric.Run();
```

## Parameters

---

**rate** required `string`

The rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'days', 'hours' or 'minutes'.

**middleware** required `Middleware<EventContext>` or `Middleware<EventContext>[]`

One or more middleware functions to use as the handler which will run on defined frequency.

---

## Examples

### Create a Schedule to run every 3 minutes

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Function;

Nitric.Schedule("send-reminder").Every(3, Frequency.Minutes, context =>
{
    // do some processing
    return context;
});

Nitric.Run();
```

### Create a Schedule with multiple middleware/handlers

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Function;

// Create a middleware to handle report generation
private EventContext GenerateReport(EventContext ctx, Func<EventContext, EventContext> next)
{
    // Code to generate a report
    return next(ctx);
}

// Create a middleware to handle notifications
private EventContext SendNotification(EventContext ctx, Func<EventContext, EventContext> next)
{
    // Code to send a notification
    return next(ctx);
}

// Create a schedule that runs every 7 days
Nitric.Schedule("send-reminder").Every(7, Frequency.Days, GenerateReport, SendNotification);

Nitric.Run();
```

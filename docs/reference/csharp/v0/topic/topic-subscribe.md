---
title: topic.subscribe()
description: Subscribe a handler to a topic and receive new events for processing.
---

Subscribe a handler to a topic and receive new events for processing.

```csharp
using Nitric.Sdk;

var updates = Nitric.Topic("updates");

updates.Subscribe(context => {
  Console.WriteLine(context.Req.Payload);

  return context;
});

Nitric.Run();
```

## Parameters

---

**middleware** required `Func<EventContext, EventContext>` or `Middleware<EventContext>[]`

The middleware (code) to be triggered by the topic.

---

## Examples

### Subscribe to a topic

```csharp
using Nitric.Sdk;

var updates = Nitric.Topic("updates");

updates.Subscribe(context => {
  Console.WriteLine(context.Req.Payload);

  return context;
});

Nitric.Run();
```

### Subscibe to a topic with chained middleware

```csharp
using Nitric.Sdk;

var updates = Nitric.Topic("updates");

updates.Subscribe((context, next) =>
  {
    // Validate request

    return next(context);
  }, (context, next) => {
    Console.WriteLine(context.Req.Payload);

    return next(context);
  }
);

Nitric.Run();
```

## Notes

- A function may only subscribe to a topic once, if multiple subscribers are required, create them in different functions.
- A function may subscribe to OR publish to a topic but not both

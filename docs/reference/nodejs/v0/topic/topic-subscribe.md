---
title: Node.js - topic.subscribe()
description: Reference for Nitric's Node.js library - Subscribe a handler to a topic and receive new events for processing.
---

Subscribe a handler to a topic and receive new events for processing.

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates');

updates.subscribe(async (ctx) => {
  // Log the provided message
  console.log(ctx.req.json());
});
```

## Parameters

---

**middleware** required `EventMiddleware` or `EventMiddleware[]`

The middleware (code) to be triggered by the topic

---

## Examples

### Subscribe to a topic

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates');

updates.subscribe(async (ctx) => {
  // Log the provided message
  console.log(ctx.req.json());
});
```

## Notes

- A function may only subscribe to a topic once, if multiple subscribers are required, create them in different functions.
- A function may subscribe to OR publish to a topic but not both

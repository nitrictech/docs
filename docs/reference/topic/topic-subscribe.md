Subscribes to a topic

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates');

updates.subscribe(async (ctx) => {
    // Log the provided message
    console.log(ctx.req.json());
});
```

## Paramaters

---

**middleware** required `EventMiddleware` or `EventMiddleware[]`

The middleware (code) to be triggered by the topic

---

## Notes
 - A function may only subscribe to a function once, if multiple subscribers are required, create them in different functions.
 - A function may subscribe to OR publish to a topic but not both 
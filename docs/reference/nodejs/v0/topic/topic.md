---
title: Node.js - topic()
description: Reference for Nitric's Node.js library - Creates a new Topic.
---

Creates a new Topic.

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates');
```

## Parameters

---

**name** required `string`

The name of the topic to create.

## Examples

### Create a new topic

```javascript
import { topic } from '@nitric/sdk';

const updates = topic('updates');
```

## See also

- [topic.subscribe()](./topic-subscribe.md)
- [topic.publish()](./topic-publish.md)

---
title: topic()
description: Creates a new Topic.
---

Creates a new Topic.

```C#
using Nitric.Sdk;

var updates = Nitric.Topic("updates");
```

## Parameters

---

**name** required `string`

The name of the topic to create.

## Examples

### Create a new topic

```C#
using Nitric.Sdk;

var updates = Nitric.Topic("updates");
```

## See also

- [topic.subscribe()](./topic-subscribe.md)
- [topic.publish()](./topic-publish.md)

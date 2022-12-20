---
title: topic()
description: Creates a new Topic.
---

Creates a new Topic.

```csharp
using Nitric.Sdk;

var updates = Nitric.Topic("updates");

Nitric.Run();
```

## Parameters

---

**name** required `string`

The name of the topic to create.

## Examples

### Create a new topic

```csharp
using Nitric.Sdk;

var updates = Nitric.Topic("updates");

Nitric.Run();
```

## See also

- [topic.subscribe()](./topic-subscribe.md)
- [topic.publish()](./topic-publish.md)

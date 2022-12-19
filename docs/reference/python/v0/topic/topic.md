---
title: Python - topic()
description: Reference for Nitric's Python library - Creates a new Topic.
---

Creates a new Topic.

```python
from nitric.resources import topic

updates = topic('updates')
```

## Parameters

---

**name** required `string`

The name of the topic to create.

---

## Examples

### Create a new topic

```python
from nitric.resources import topic

updates = topic('updates')
```

## See also

- [topic.subscribe()](./topic-subscribe.md)
- [topic.publish()](./topic-publish.md)

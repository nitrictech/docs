---
title: queue.send()
description: Send tasks to a queue.
---

Sends tasks to a queue.

```python
from nitric.resources import queue
from nitric.api import Task

batch_queue = queue('batch').allow('sending')

payload = {}
await batch_queue.send(Task(payload=payload))
```

## Parameters

---

**tasks** required `Task` or `Task[]`

A task or an array of tasks to send to the queue.

---

## Examples

### Send a task to a queue

```python
from nitric.resources import queue
from nitric.api import Task

batch_queue = queue('batch').allow('sending')

payload = {}
await batch_queue.send(Task(payload=payload))
```

### Send multiple tasks to a queue

```python
from nitric.resources import queue
from nitric.api import Task

batch_queue = queue('batch').allow('sending')

tasks = [
  Task(payload={
      'type': 'Email',
      'to': 'hello@example.com',
      'subject': 'Notification',
      'message': 'A notification from Nitric',
  }),
  Task(payload={
      'type': 'SMS',
      'to': '+17200000000',
      'message': 'A text message from Nitric',
  })
]

await batch_queue.send(tasks)
```

### Dealing with failures

In rare cases when sending tasks to a queue some tasks might fail to be sent. The response from `send()` will include an array of any tasks that failed to send. You can process this array to retry or log the error.

```python
failed = await batch_queue.send(tasks)

for task in failed:
  print(task)
```

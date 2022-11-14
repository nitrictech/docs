---
title: queue.receive()
description: Receive tasks from a queue.
---

Receive tasks from a queue.

```C#
using Nitric.Sdk;
using Nitric.Sdk.Queue;

var batchQueue = Nitric.Queue("batch").With(QueuePermission.Receiving);

var tasks = batchQueue.Receive();

tasks.ForEach(task => {
  // Work on a task...

  // Complete the task
  task.Complete();
});
```

## Parameters

---

**depth** optional `int`

The maximum number of tasks to receive from the queue. Defaults to 1.

---

## Notes

### Completing tasks

Since the process is async, the queue doesn't know when a task has been completed. So failed function/containers don't result in lost tasks, tasks are not removed from a queue when they're received.

Instead, tasks are hidden and receivers are granted a temporary lease for each task they receive.

When complete, the receiver must tell the queue the task was completed successfully, which will remove it from the queue and stop it being reprocessed.

> Failing to complete a task before the lease expires will result in it being re-queued.

To notify the queue that a task was completed call the `Complete()` method on the task reference.

### Receive depth

When calling `Receive()` a depth parameter can be provided, e.g. `Receive(5)`. This will _attempt_ to receive up to 5 tasks from the queue.

However, if the queue is empty or less than 5 tasks are available on the queue, then the max available will be returned.

This means calls to receive will return between 0 and _depth_ tasks.

## Examples

### Receive tasks from a queue

```C#
using Nitric.Sdk;
using Nitric.Sdk.Queue;

var batchQueue = Nitric.Queue("batch").With(QueuePermission.Receiving);

// Receive tasks with a limit of 10
var tasks = batchQueue.Receive(10);

tasks.ForEach(task => {
  // Work on a task...

  // Complete the task
  task.Complete();
});
```

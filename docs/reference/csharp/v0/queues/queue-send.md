---
title: queue.send()
description: Send tasks to a queue.
---

Send tasks to a queue.

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Queue;

var batchQueue = Nitric.Queue("batch").With(QueuePermission.Sending);

queue.Send(new Task {
    Payload = "this is a message"
});

Nitric.Run();
```

## Parameters

---

**tasks** required `Task` or `Task[]`

A task or an array of tasks to send to the queue.

---

## Examples

### Send a task to a queue

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Queue;
using System.Collections.Generic;

var batchQueue = Nitric.Queue("batch").With(QueuePermission.Sending);

queue.Send(new Task {
    Payload = new Dictionary<string, string>() {
      { "message", "payloads can be any serializable object" }
    }
});

Nitric.Run();
```

### Send multiple tasks to a queue

```csharp
using Nitric.Sdk;
using Nitric.Sdk.Queue;
using System.Collections.Generic;

var batchQueue = Nitric.Queue("batch").With(QueuePermission.Sending);

batchQueue.Send(new Task[] {
    new Task {
        Payload = new Dictionary<string, string>() {
            { "message", "a task payload" }
        }
    }, new Task {
        Payload = new Dictionary<string, string>()
        {
            { "message", "a task payload" }
        }
    }
});

Nitric.Run();
```

### Dealing with failures

In rare cases when sending tasks to a queue some tasks might fail to be sent. The response from `send()` will include an array of any tasks that failed to send. You can process this array to retry or log the error.

```csharp
var failed = await batchQueue.Send(tasks);

failed.ForEach(failedTask => {
  Console.WriteLine(failedTask.ID);
});

Nitric.Run();
```

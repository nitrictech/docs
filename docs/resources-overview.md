---
title: Resources Overview
description: An overview of cloud resources provided by the Nitric framework
---

Nitric provides cloud-native building blocks that make it simple to declare the resources you need as part of your application code.

The Nitric deployment engine will run through your code at deployment time, interpreting resources that are declared as part of your application and creating them in the cloud you are pushing to.

## Rules

There are a few rules to keep in mind when declaring Nitric resources as part of your application.

### Don't declare resources in runtime code

Nitric needs to be aware of resources at deployment time so they can be deployed appropriately. Declaring resources at runtime means the resource won't be declared when deploying your application. Consequently, the resource will not be provisioned to the cloud.

The Nitric deployment engine does not evaluate runtime code at deployment time as this could result in unintended behavior or side effects.

A working example:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api, bucket } from '@nitric/sdk';

// ✅ This declaration will work
const files = bucket('files').for('reading');

api('public').get('/files/:name', (ctx) => {
  // ❌ This declaration will not work, as this is only called at runtime.
  const badBucket = bucket('wont-work').for('writing');
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api, bucket

public_api = api('public')

# ✅ This declaration will work
files = bucket('files').allow('reading')

@public_api.get("/files/:name")
async def get_file(ctx):
  # ❌ This declaration will not work, as this is only called at runtime.
  bad_bucket = bucket('wont-work').allow('writing')
```

{% /tab %}
{% /tabs %}

> Always declare resources outside of runtime/callback code

## Best Practices

### ✅ Re-use declarations for shared resources

When many functions share a resource it's helpful to re-use resource declaration like any other variable in your code.

For example:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```typescript
// lib/resources.ts
import { api, topic } from '@nitric/sdk';

export const publicApi = api('public');

export const updateTopic = topic('updates');
```

```typescript
// functions/api.ts
import { publicApi, updateTopic } from '../lib/resources';

const publisher = updateTopic.for('publishing');

publicApi.post('/update', (ctx) => {
  publisher.publish({
    payload: {
      test: 'message',
    },
  });
});
```

```typescript
// functions/updates.ts
import { updateTopic } from '../lib/resources';

updateTopic.subscribe((ctx) => {
  console.log('got the message');
});
```

{% /tab %}
{% tab label="Python" %}

```python
# resources.py
from nitric.resources import api, topic

public_api = api('public')
update_topic = topic('updates')

```

```python
# functions/api.py
from resources import public_api, update_topic

publisher = update_topic.allow('publishing')

@public_api.post("/update")
async def new_update(ctx):
  await publisher.publish({"test": "message"})

```

```python
# functions/updates.py
from resources import update_topic

@update_topic.subscribe
async def updates_sub(ctx):
    print(ctx.req.payload)

```

{% /tab %}
{% /tabs %}

> Sharing resources like this can avoid nasty typos, and allows easily shared references to a single resource using your IDE.

### ❌ Avoid declaring permissions for shared resources

Creating resource permissions in the same context as the resources can make those permissions leak. This is demonstrated in the below example:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```typescript
// lib/resources.ts
import { api, bucket } from '@nitric/sdk';

export const publicApi = api('public');

export const bucketOne = bucket('bucket-one').for('reading');
export const bucketTwo = bucket('bucket-two').for('reading');
```

```typescript
// functions/function-one.ts
import { publicApi, bucketOne } from '../lib/resources';

publicApi.get('bucket-one/file/:name', (ctx) => {
  // do something with the file
});
```

```typescript
// functions/function-two.ts
import { publicApi, bucketTwo } from '../lib/resources';

publicApi.get('bucket-two/file/:name', (ctx) => {
  // do something with the file
});
```

{% /tab %}
{% tab label="Python" %}

```python
# resources.py
from nitric.resources import api, bucket

public_api = api('public')

bucket_one = bucket('bucket-one').allow('reading');
bucket_two = bucket('bucket-two').allow('reading');

```

```python
# functions/function-one.py
from resources import public_api, bucket_one

@public_api.get("bucket-one/file/:name")
async def get_file(ctx):
  pass # do something with the file

```

```python
# functions/function-two.py
from resources import public_api, bucket_two

@public_api.get("bucket-two/file/:name")
async def get_file(ctx):
  pass # do something with the file

```

{% /tab %}
{% /tabs %}

In this scenario, both `function-one` and `function-two` have read access to **both** buckets, even though each function is only using one of the buckets. This is because they are declared in the same context and evaluated at the same time in each of the functions.

Resource permissions should always be declared in the scope of a single function unless the permissions required by one or more functions are identical.

> This practice can break principal of least privilege in infrastructure deployments

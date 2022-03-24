## Upgrading your project

In this section we will discuss changes and upgrade advice for users upgrading from versions of Nitric reliant on a nitric.yaml file.

### What you’ll learn

- Install the new Nitric CLI
- Upgrade existing Nitric projects

> &#x26a0;&#xfe0f; ** Info ** - Ensure all source code is safely backed up in repository.

### What's changed?

The Node SDK now uses a 'Config-as-Code' design pattern.

- Resources, permissions and configuration will infer automatically from your code.

The API definitions have minor changes to support the new pattern.

- Examples on how to use the API can be found in the [documentation](/docs).

### Why the change?

Config as code is an expressive and self-documenting pattern. Save time by not having to read through pages of documentation or manage 1000s of lines of config.

Examples include:

- Resource definition yaml
- OpenAPI 3.0 specifications
- Resource permission yaml or configuration screens

## Install the new Nitric CLI

The Nitric CLI is no longer distributed via NPM. A fresh installation is necessary.

Uninstall the existing CLI with NPM or manually if you didn't start with NPM.

```bash
  npm uninstall -g @nitric/cli
```

Remove any config folders such as '/home/user-name/.nitric'

Follow our [installation guide](/docs/installation) to set up the Nitric CLI.

## Upgrade existing Nitric projects

### If projects don't have a nitric.yaml file, where do the resources get defined?

All resources (topics, queues, collections, buckets, apis, api routes and methods, schedules and secrets) are defined by your code.

```typescript
// A topic named updates will be created on deploy
const updates = topic('updates')

// A queue named batch will be created on deploy
const batchQueue = queue('batch')

// Create an auto-scaling secure API named 'public'
const publicApi = api('public')

// Create profile with POST method on path /examples
publicApi.post('/examples', async (ctx) => {
  ...
}

// Create profile with GET method on path /examples
publicApi.get('/examples', async (ctx) => {
  ...
}
```

### Refactoring functions

Refactor functions into middleware handlers which can be executed as API methods, topic subscriptions and schedules.

> We've omitted the yaml and openAPI configuration files in this example.

#### Before

```typescript
// Start your function here
faas
  .http(async (ctx: faas.HttpContext): Promise<faas.HttpContext> => {
    // Handler code goes here
  }
```

#### After

```typescript
const publicApi = api('public');

// Create profile with post method
publicApi.post('/examples', async (ctx) => {
  // Handler code goes here
}
```

```typescript
// Create a schedule that runs every 5 minutes
schedule('process-transactions').every('5 minutes', async (ctx) => {
  // Handler code goes here
});
```

```typescript
// Subscribe to a topic
updates.subscribe(async (ctx) => {
  // Handler code goes here
});
```

### Complete refactoring example

The example is a POST request of an API which creates a record in a Collection.

We'll go from code, yaml, and OpenAPI to just code.

#### Before

**`example.ts`**

```typescript
interface Example {
  name: string;
  description: string;
}

import { faas, documents } from '@nitric/sdk';
import { uuid } from 'uuidv4';

interface CreateContext extends faas.HttpContext {
  req: faas.HttpRequest & {
    body?: Example;
  };
}

// Start your function here
faas
  .http(
    faas.json(), //  use json body parser middleware to decode data
    async (ctx: CreateContext): Promise<faas.HttpContext> => {
      const example = ctx.req.body;

      // Create a new example document
      await documents().collection('examples').doc(uuid()).set(example);
    }
  )
  .start();
```

**`nitric.yaml`**

```yaml
name: examples
# Nitric functions
functions:
  create:
    handler: functions/create.ts
# Nitric collections
collections:
  examples: {}
# Nitric APIs
apis:
  examples: api.yaml
```

**`api.yaml`**

```yaml
openapi: 3.0.0
info:
  version: 1.0.0
  title: Example API
  description: Example API
paths:
  /examples:
    post:
      operationId: examples-create
      x-nitric-target:
        name: create
        type: function
      description: Creates and persists new examples
      responses:
        '200':
          description: Successful response
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ExamplesCreate'
components:
  schemas:
    ExamplesCreate:
      type: object
      properties:
        name:
          type: string
        description:
          type: string
```

#### After

**`example.ts`**

```typescript
import { api, collection } from '@nitric/sdk';
import { uuid } from 'uuidv4';

// Create an auto-scaling secure API
const publicApi = api('public');

// Access profile collection with permissions
const examples = collection('examples').for('writing', 'reading');

// Create profile with post method
publicApi.post('/examples', async (ctx) => {
  let name = ctx.req.json().name;
  let description = ctx.req.json().age;

  // Create the new profile
  await examples.doc(name).set({ name, description });
});
```

> The api.yaml file is no longer required.

> The nitric.yaml file now only contains basic meta information such as the project name and handler paths.

```yaml
name: examples
handlers:
  - functions/*.ts
```

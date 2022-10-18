---
title: Serverless apps with Next.js and Nitric
description: Build a serverless backend for your Next.js app using Nitric framework for AWS, Google Cloud or Azure
---

## What we'll be doing

1. Create a To-do app with [Next.js](https://nextjs.org) backed by a Nitric API
2. Define our Nitric resources
3. Create handlers for the following API operations

| **Method** | **Route**    | **Description**                                     |
| ---------- | ------------ | --------------------------------------------------- |
| `GET`      | /:listid/:id | Get a specific task by its task list Id and task Id |
| `GET`      | /:listid     | Get a specific task list by its Id                  |
| `GET`      | /            | List all task lists                                 |
| `POST`     | /:listid     | Add new task to task list                           |
| `POST`     | /            | Create a new task list                              |
| `PATCH`    | /:listid/:id | Update a task                                       |
| `DELETE`   | /:listid/:id | Delete a task                                       |
| `DELETE`   | /:listid     | Delete a task list                                  |

3. Set up a proxy for the Next.js API
4. Run locally for testing
5. Deploy backend to a cloud of your choice
6. Deploy frontend to Vercel or Netlify

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- The [Nitric CLI](https://nitric.io/docs/installation)
- An [AWS](https://aws.amazon.com), [GCP](https://cloud.google.com) or [Azure](https://azure.microsoft.com) account (_your choice_)

## Getting Started

We'll start with the finished product, and follow along that way, just clone the [Nitric to-do](https://github.com/nitrictech/nitric-todo) project off of GitHub.

```bash
git clone https://github.com/nitrictech/nitric-todo.git
```

Install the dependencies with npm.

```bash
cd nitric-todo
npm install
```

Next, open the project in your editor of choice.

```bash
code .
```

## Project structure

The project is split into two main areas:

- **todo-api** - This is where the Nitric API is stored
- **web** - This is where your Next.js application is stored

## Defining Types

We add some typings for our tasks and our api request/response.

```typescript
// todo-api/types.ts

/* Base Types */
export interface Task {
  id: string;
  createdAt: number;
  name: string;
  complete: boolean;
  description?: string;
  dueDate?: number;
}

export interface TaskList {
  id: string;
  createdAt: number;
  name: string;
  tasks: Task[];
}

/* Task List */
export type Filters = Partial<Task>;

export type TaskListResponse = TaskList;

export type TaskListRequest = Omit<TaskList, 'id' | 'tasks'>;

export type TaskListPostRequest = Omit<TaskList, 'id' | 'complete'>;

/* Task Post */
export type TaskPostRequest = Omit<Task, 'id'>;

/* Task Update */
export type TaskPatchRequest = { completed: boolean };
```

## Add cloud resources to our application

Apps built with Nitric define their resources in code, you can write this in the root of any `.js` or `.ts` file, but for organization we recommend putting them together. So let's start by defining the resources we'll need to support our API in a new `resources` directory.

```typescript
// todo-api/resources/apis.ts

import { api } from '@nitric/sdk';

export const taskListApi = api('taskList');
```

Then we also want to create our collection to store our task lists. We omit the tasks so that we can instead store them as subcollections. This will ease querying individual tasks in the future.

```typescript
// todo-api/resources/collections.ts

import { collections } from '@nitric/sdk';
import { TaskList } from 'types';

type TaskCollection = Omit<TaskList, 'tasks'>;

export const taskListCol = collection<TaskCollection>('taskLists');
```

## Construct Routes

Start setting up your API routes, these can remain as empty functions until we fill them in.

```typescript
// todo-api/functions/tasks.ts

import { taskListApi } from '../resources/apis.ts';

taskListApi.get("/:listid/:id", async (ctx) => {});      // Get task with [id]
taskListApi.get("/:listid", async (ctx) => {);           // Get task list with [id]
taskListApi.get("/", async (ctx) => {});                 // Get all task lists
taskListApi.post("/:listid", async (ctx) => {});         // Post new task for task list
taskListApi.post("/", async (ctx) => {});                // Post new task list
taskListApi.patch("/:listid/:id", async (ctx) => {});    // Update task
taskListApi.delete("/:listid", async (ctx) => {});       // Delete task list
taskListApi.delete("/:listid/:id", async (ctx) => {});   // Delete task
```

We can then get our previous collection, and apply permissions to it for use within this function.

```typescript
// todo-api/functions/tasks.ts

import { taskListCol } from '../resources/collections.ts';

const taskLists = taskListCol.for('reading', 'writing', 'deleting');
```

Now that we have the collection, we can start adding tasks and task lists. We use our collection to store our task lists, and then a subcollection on each task list to store our tasks.

### Create a task list

```typescript
// todo-api/functions/tasks.ts

taskListApi.post('/', async (ctx) => {
  const { name, tasks } = ctx.req.json() as TaskListPostRequest;

  try {
    if (!name) {
      ctx.res.body = 'A new task list requires a name';
      ctx.res.status = 400;
      return;
    }

    const id = uuid.generate();

    await taskLists.doc(id).set({
      id,
      name,
      createdAt: new Date().getTime(),
    });

    // add any tasks if supplied
    if (tasks) {
      for (const task of tasks) {
        const taskId = uuid.generate();
        await taskLists
          .doc(id)
          .collection<Task>('tasks')
          .doc(taskId)
          .set({
            ...task,
            complete: false,
            createdAt: new Date().getTime(),
          });
      }
    }

    ctx.res.body = 'Successfully added task list!';
  } catch (err) {
    console.log(err);
    ctx.res.body = 'Failed to add task list';
    ctx.res.status = 400;
  }

  return ctx;
});
```

### Create a new task

We first receive the task list id, and then add a new task under the `listid -> tasks` sub collection.

```typescript
// todo-api/functions/tasks.ts

taskListApi.post('/:listid', async (ctx) => {
  const { listid } = ctx.req.params;
  const task = ctx.req.json() as TaskPostRequest;

  try {
    if (!listid) {
      ctx.res.body = 'A task list id is required';
      ctx.res.status = 400;
      return;
    }

    if (!task || !task.name) {
      ctx.res.body = 'A task with a name is required';
      ctx.res.status = 400;
      return;
    }

    const taskId = uuid.generate();

    await taskLists
      .doc(listid)
      .collection<Omit<Task, 'id'>>('tasks')
      .doc(taskId)
      .set({
        ...task,
        complete: false,
        createdAt: new Date().getTime(),
      });

    ctx.res.body = 'Successfully added task!';
  } catch (err) {
    console.log(err);
    ctx.res.body = 'Failed to add task list';
    ctx.res.status = 400;
  }

  return ctx;
});
```

### Retrieve all task lists

```typescript
// todo-api/functions/tasks.ts

import { sortByCreatedAt } from "../common/utils";
...
taskListApi.get("/", async (ctx) => {
  try {
    const taskList = await taskLists.query().fetch();

    const taskListsWithTasks = await Promise.all(
      taskList.documents.map(async (doc) => {
        const { documents: tasks } = await taskLists
          .doc(doc.id)
          .collection<Task>("tasks")
          .query()
          .fetch();

        return {
          id: doc.id,
          ...doc.content,
          tasks: tasks
            .map(({ id, content }) => ({ id, ...content }))
            .sort(sortByCreatedAt),
        };
      })
    );

    ctx.res.json(taskListsWithTasks.sort(sortByCreatedAt));
  } catch (err) {
    console.log(err);
    ctx.res.body = "Failed to retrieve taskList list";
    ctx.res.status = 400;
  }

  return ctx;
});
```

```typescript
// todo-api/common/utils.ts

import { Task } from 'types';

type CreatedAtData = Pick<Task, 'createdAt'>;

export const sortByCreatedAt = (a: CreatedAtData, b: CreatedAtData) => {
  return a.createdAt < b.createdAt ? 1 : -1;
};
```

### Retrieve a task with filters

```typescript
// todo-api/functions/tasks.ts

// Get all tasks from a task list, with filters
taskListApi.get('/:listid', async (ctx) => {
  const { listid } = ctx.req.params;
  const filters = ctx.req.query as Filters;

  try {
    const taskListRef = taskLists.doc(listid);
    let query = taskListRef.collection<Task>('tasks').query();

    // Apply filters to query before executing query;
    Object.entries(filters).forEach(([k, v]) => {
      switch (k) {
        case 'complete': {
          query = query.where(k, '==', v === 'true');
          break;
        }
        case 'dueDate': {
          query = query.where(k, '>=', v);
          break;
        }
        default: {
          query = query.where(k, 'startsWith', v as string);
          break;
        }
      }
    });

    const taskList = await taskListRef.get();
    const tasks = await query.fetch();

    ctx.res.json({
      ...taskList,
      tasks: tasks.documents
        .map((doc) => ({ id: doc.id, ...doc.content }))
        .sort(sortByCreatedAt),
    });
  } catch (err) {
    console.log(err);
    ctx.res.body = 'Failed to retrieve tasks';
    ctx.res.status = 400;
  }

  return ctx;
});
```

### Retrieve a task from a task list

```typescript
// todo-api/functions/tasks.ts

taskListApi.get('/:listid/:id', async (ctx) => {
  const { listid, id } = ctx.req.params;

  try {
    // Get our task list with id [listId]
    const taskListRef = taskListCol.doc(listid);
    // Get all tasks from the collection with id [id]
    const task = await taskListRef.collection<Task>('tasks').doc(id).get();

    ctx.res.json(task);
  } catch (err) {
    console.log(err);
    ctx.res.body = 'Failed to retrieve tasks';
    ctx.res.status = 400;
  }

  return ctx;
});
```

### Update a task

```typescript
// todo-api/functions/tasks.ts

taskListApi.patch('/:listid/:id', async (ctx) => {
  const { listid: listId, id } = ctx.req.params;
  const { completed } = ctx.req.json() as ToggleRequest;

  try {
    const taskListRef = taskLists.doc(listId);
    const taskRef = taskListRef.collection<Task>('tasks').doc(id);
    const originalTask = await taskRef.get();

    await taskListRef
      .collection<Task>('tasks')
      .doc(id)
      .set({
        ...originalTask,
        complete: completed,
      });

    ctx.res.body = 'Successfully updated task';
  } catch (err) {
    console.log(err);
    ctx.res.body = 'Failed to retrieve tasks';
    ctx.res.status = 400;
  }

  return ctx;
});
```

### Delete a task

```typescript
// todo-api/functions/tasks.ts

taskListApi.delete('/:listid/:id', async (ctx) => {
  const { listid: listId, id } = ctx.req.params;

  try {
    const taskListRef = taskLists.doc(listId);
    await taskListRef.collection('tasks').doc(id).delete();
    ctx.res.body = 'Successfully deleted task';
  } catch (err) {
    console.log(err);
    ctx.res.body = 'Failed to delete task';
    ctx.res.status = 400;
  }

  return ctx;
});
```

### Delete a task list

```typescript
taskListApi.delete('/:id', async (ctx) => {
  const { id } = ctx.req.params;

  try {
    await taskLists.doc(id).delete();
    ctx.res.body = 'Successfully deleted task list';
  } catch (err) {
    console.log(err);
    ctx.res.body = 'Failed to delete task list';
    ctx.res.status = 400;
  }

  return ctx;
});
```

### Set up API proxy

Start by create your `.env` file by renaming the `.env.example` file:

```
mv web/.env.example web/.env
```

Within the `next.config.js` you should have rewrites defined to proxy between your universal Next.js API route and your Nitric APIs. It takes the `API_BASE_URL` variable which is defined in the `.env` file.

```javascript
// web/next.config.js

module.exports = {
  reactStrictMode: true,
  api: {
    bodyParser: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  },
  // To avoid any CORs issues use Next.js as a proxy for Nitric API
  // We are working on it :)
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: `${process.env.API_BASE_URL}/apis/:path*`, // Proxy to Backend
      },
    ];
  },
};
```

## Run it!

Now that you have an API defined with handlers for each of the methods, we can test it out locally.

Test out your application with the `npm run dev` command:

```bash
cd todo-api
npm run dev
```

> _Note:_ the `dev` script in the template starts the Nitric Server using `nitric start` and runs your functions.

We can then launch the Next.js frontend in a new terminal with:

```bash
cd ../web
npm run dev
```

You can then go to `localhost:3000` to view the application. Alternatively, you can test the API directly at `localhost:9001/apis/taskList` using cURL, Postman, or any other HTTP client.

Pressing `ctrl + a + k` will end the application.

## Deploy to the cloud

### Deploy the Nitric API

Setup your credentials and any other cloud specific configuration:

- [AWS](/docs/reference/aws)
- [Azure](/docs/reference/azure)
- [GCP](/docs/reference/gcp)

Create a stack - a collection or resources identified in your project which will be deployed:

```
nitric stack new
```

```
? What do you want to call your new stack? todo
? Which Cloud do you wish to deploy to? aws
? select the region us-east-1
```

> Note: You are responsible for staying within the limits of the free tier or any costs associated with deployment.

```
nitric up
```

When the deployment is complete, go to the relevant cloud console and you'll be able to see and interact with your API.

To undeploy run the following command:

```
nitric down
```

### Deploy the Next.js App

Choose one of the following deploy buttons and make sure to update the `API_BASE_URL` variable during this setup process with the deployed api url.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nitrictech/nitric-todo&env=API_BASE_URL)

> Note: The `Netlify.toml` file in this repository includes the configuration for you to customize the `API_BASE_URL` property on the initial deploy.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nitrictech/nitric-todo)

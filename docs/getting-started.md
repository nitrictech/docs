---
title: Getting started
description: Getting started guide for an initial Nitric project
---

After installing the [Nitric CLI](/docs/installation), you can start building a project.

## Using the `new` command

The Nitric CLI's `new` command provides prompts to scaffold new projects from templates. Here's an example of creating a new project from a template:

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```bash
nitric new
? What is the name of the project? hello-world
? Choose a template: official/TypeScript - Starter
```

Navigate to the new project directory and install the dependencies:

```bash
cd hello-world

npm install
```

Your project should now look like this:

```txt
+--functions/
|  +-- hello.ts
+--node_modules/
|  ...
+--package-lock.json
+--package.json
+--nitric.yaml
+--README.md
```

{% /tab %}
{% tab label="JavaScript" %}

```bash
nitric new
? What is the name of the project? hello-world
? Choose a template: official/JavaScript - Starter
```

Navigate to the new project directory and install the dependencies:

```bash
cd hello-world

npm install
```

Your project should now look like this:

```txt
+--functions/
|  +-- hello.js
+--node_modules/
|  ...
+--package-lock.json
+--package.json
+--nitric.yaml
+--README.md
```

{% /tab %}
{% tab label="Python" %}

```bash
nitric new
? What is the name of the project? hello-world
? Choose a template: official/Python - Starter
```

Navigate to the new project directory and install the dependencies:

```bash
cd hello-world

pipenv install --dev
```

Your project should now look like this:

```txt
+--functions/
|  +-- hello.py
+--index.py
+--Pipfile
+--nitric.yaml
+--README.md
```

{% /tab %}
{% /tabs %}

## Running your app

Nitric provides a local development server offering emulated versions of cloud services, suitable for local development/testing. You can use the Nitric CLI to start the local server using the `nitric start` command.

Once the server has started, you can run your project like any other application. The starter templates, provide a recommended setup for each language.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

```bash
npm run dev
```

Take a look at the `hello.ts` file, you'll see it declares an API named `main` with a single route `GET /hello/:name`.

{% /tab %}
{% tab label="JavaScript" %}

```bash
npm run dev
```

Take a look at the `hello.js` file, you'll see it declares an API named `main` with a single route `GET /hello/:name`.

{% /tab %}
{% tab label="Python" %}

Start the Nitric server to emulate cloud services on your machine:

```bash
nitric start
```

Next, in a new terminal window, you can run your application:

```bash
pipenv run dev
```

Take a look at the `hello.py` file, you'll see it declares an API named `main` with a single route `GET /hello/:name`.

{% /tab %}
{% /tabs %}

After your function is running, it will register itself with the server. All the APIs are locally hosted under their own port which will be displayed in the CLI output:

```txt
http://localhost:<port_number>
```

in this case, the URL for the API should be:

```txt
http://localhost:4001/
```

Once the API is registered, you can test the API using cURL, your browser, or any other HTTP client:

```bash
curl http://localhost:4001/hello/John
Hello John
```

## Making updates

Most of Nitric's language templates enable hot-reloading by default, so at this point, you can start making changes to functions and see what happens.

{% tabs query="lang" %}
{% tab label="TypeScript" %}

Start by opening `functions/hello.ts` in your editor and adding a new route to the API, then save, and execute the file:

```typescript
import { api } from '@nitric/sdk';

const helloApi = api('main');

helloApi.get('/hello/:name', async (ctx) => {
  const { name } = ctx.req.params;
  ctx.res.body = `Hello ${name}`;
  return ctx;
});

// Let's add a 'goodbye' route to the API, like this:
helloApi.get('/goodbye/:name', async (ctx) => {
  const { name } = ctx.req.params;
  ctx.res.body = `Goodbye ${name}`;
  return ctx;
});
```

{% /tab %}
{% tab label="JavaScript" %}

Start by opening `functions/hello.js` in your editor and adding a new route to the API, then save, and execute the file:

```javascript
import { api } from '@nitric/sdk';

const helloApi = api('main');

helloApi.get('/hello/:name', async (ctx) => {
  const { name } = ctx.req.params;
  ctx.res.body = `Hello ${name}`;
  return ctx;
});

// Let's add a 'goodbye' route to the API, like this:
helloApi.get('/goodbye/:name', async (ctx) => {
  const { name } = ctx.req.params;
  ctx.res.body = `Goodbye ${name}`;
  return ctx;
});
```

{% /tab %}
{% tab label="Python" %}

Start by opening `functions/hello.py` in your editor and adding a new route to the API, then save, and execute the file:

```python
from nitric.resources import api
from nitric.application import Nitric

helloApi = api("main")


@helloApi.get("/hello/:name")
async def hello_world(ctx):
    name = ctx.req.params['name']

    ctx.res.body = f"Hello {name}"

@helloApi.get("/goodbye/:name")
async def hello_world(ctx):
    name = ctx.req.params['name']

    ctx.res.body = f"Goodbye {name}"

Nitric.run()
```

{% /tab %}
{% /tabs %}

After saving the file, the new route will be registered and you can test it:

```bash
curl http://localhost:4001/goodbye/John
Goodbye John
```

When you're finished testing, you can stop your application and the Nitric Server.

# Deploying the app

Now that you've implemented a basic API and tested that it works, you can deploy it to one or more cloud platforms. Applications built with Nitric can be automatically deployed and run on multiple cloud providers without any code changes.

The first step is to set up your credentials for the cloud provider.

- [AWS](/docs/reference/providers/aws)
- [Azure](/docs/reference/providers/azure)
- [GCP](/docs/reference/providers/gcp)

You'll then need to create a [stack](/docs/reference/cli#stacks) that represents your project and a deployment target.

```bash
nitric stack new
```

Follow the prompts to create a stack for your provider, this example will use `aws`.

```
? What do you want to call your new stack? dev
? Which Cloud do you wish to deploy to? aws
? select the region us-east-1
```

Now you can deploy your `dev` stack with the `up` command.

```bash
nitric up
```

Output:

```
 SUCCESS  Configuration gathered (2s)
 SUCCESS  Images built (3s)
 Deployed  Function/hello (15)
 Deployed  Stack (25s)
┌───────────────────────────────────────────────────────────────┐
| API  | Endpoint                                               |
| main | https://XXXXXXXX.execute-api.us-east-1.amazonaws.com |
└───────────────────────────────────────────────────────────────┘
```

When the deployment is complete, go to the relevant cloud console and you'll be able to see and interact with your API.

To tear down the stack use the `down` command:

```bash
nitric down
```

# What's next?

- Learn more about [APIs](/docs/apis)
- See other features in the [introduction](/docs)
- Learn more about the [concepts](/docs/concepts) of Nitric
- See SDK commands and more in our [reference docs](/docs/reference)

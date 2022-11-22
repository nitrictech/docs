---
title: Concepts
description: Initial concepts of the Nitric framework
---

Nitric is a framework for rapidly building cloud and serverless applications. It helps you define your apps in terms of the resources they need, then write the code for APIs, event subscribers and scheduled jobs. Unlike other cloud or container frameworks, apps built with Nitric can be deployed to AWS, Azure or Google Cloud all from the same code base.

The agility and portability of Nitric mean you can focus on your products, not your cloud provider.

Even though your apps are portable, they'll still make great use of fully-managed and serverless offerings from each cloud provider. Nitric deploys using services like Lambda, CloudRun, DynamoDB, FireStore, CosmosDB, SNS, Event Grid, PubSub... [the list](https://nitric.io/docs/reference) is super long. Nitric also makes sure IAM and other access are correctly configured in your deployed applications, so everything stays secure and just works.

The CLI, Server and SDKs work together to provide these features. You can read a little about each of them below to get an understanding of how it all works.

## Nitric CLI

The Nitric CLI performs 3 main tasks:

- Create new projects
- Run apps locally for testing and development
- Deploy to the cloud you choose

## Nitric SDKs

Nitric SDKs provide an Infrastructure from Code style that lets you define resources in your code. You can also write the functions that support the logic behind APIs, subscribers and schedules. Lastly, you can request the type of access you need to resources such as `publishing` for topics, without dealing directly with IAM or policy documents.

Here's an example with a few details noted:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { api, topic } from '@nitric/sdk';
import { process } from '../common/orders';

// Define a new API and give it a unique name
const orders = api('orders');
// Define a topic and request the required access (e.g. 'publishing')
const orderTopic = topic('order-updates').for('publishing');

// Create an API route handler which runs on all POST requests to the /orders path
orders.post('/orders', async (ctx) => {
  // Retrieve the POST request body as an object from the incoming context
  const order = ctx.req.json();
  // Do any work you need with the request
  const status = await process(order);
  // Publish an Event (message) to the 'order-updates' topic, so any interested handlers can subscribe.
  await orderTopic.publish({
    payload: {
      data: order,
      status,
    },
  });
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import api, topic
from nitric.application import Nitric
from common.orders import process

# Define a new API and give it a unique name
orders = api("orders")
# Define a topic and request the required access (e.g. 'publishing')
order_topic = topic("order-updates").allow("publishing")


@orders.post("/orders")
async def new_order(ctx):
  # Retrieve the POST request body as an object from the incoming context
  order = ctx.req.json()
  # Do any work you need with the request
  status = await process(order)
  # Publish an Event (message) to the 'order-updates' topic, so any interested handlers can subscribe.
  await order_topic.publish({'data': order, 'status': status})


Nitric.run()

```

{% /tab %}
{% /tabs %}

During a build, your code connects to a Nitric Server (hosted by the CLI). Functions like `api('order')` and `topic('order-updates').for('publishing')` tell the build server what resources are needed to deploy and run your app. The Server then turns those requests into appropriate resources for supported providers, such as AWS, during deployment or local run.

## Nitric Server

Nitric allows apps to use cloud-native services for activities like eventing, queues, compute, storage, documents, etc. without direct integration with cloud-specific APIs. This is achieved through the Nitric Server.

The Nitric Server implements provider-specific plugins for each of the supported services. When your code sends a request to the server, via an SDK, the Nitric Server translates the request args, resources names, etc. and forwards that request to the appropriate cloud service on your behalf.

A question we often get is _"aren't the clouds and their services different?"_ Yes, they are somewhat different, but not in any significant way that impacts functionality.

To compete with each other, cloud platforms have ended up providing a set of functionally identical base services. Across those services, the biggest differences tend to be their interfaces and how they're deployed, secured and scaled.

For that reason, you can think of Nitric to cloud providers, like an ORM to SQL databases. There are differences, but in general, most SQL databases are similar enough and ORMs provide enough abstraction and value, that they're worth using. It's the same with Nitric and cloud services; some features won't be directly accessible but, for most applications, it won't matter.

If you do need direct access to a cloud API, nothing is preventing you from importing a cloud SDK in a specific function or container that needs that low-level control, while still maintaining portability elsewhere.

If you want to learn more about how Nitric's services are implemented on individual clouds, you can read our [reference](/docs/reference) docs for details.

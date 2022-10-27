---
title: Overview
description: An overview of the Nitric frameworks
---

## Nitric

Nitric is an Open-Source Cloud Application Framework, focused on the rapid development of portable Cloud and Serverless applications, capable of running on many popular cloud environments from a single codebase. Applications built with Nitric can be developed in any language, with SDKs and Templates for TypeScript, JavaScript, Python, Java and Go.

Nitric's goal is to make cloud-native development intuitive and extremely productive, through a convention-over-configuration approach to application design and infrastructure defaults, unified cloud service APIs, container templates for rapid containerization and automated deployment to multiple cloud providers.

Regardless of your cloud development experience, Nitric strives to make cloud application development easy to learn, quick to deliver, scalable, secure and portable. Whether you're building a mobile app, REST API or multi-tenanted SaaS application, Nitric is ready to amplify your efforts, helping you move fast while maintaining the choice of how & where you run your applications.

## Where Nitric applications can run

- AWS _(in preview)_
- Google Cloud _(in preview)_
- Azure _(in development)_
- DigitalOcean _(in preview)_
- Local _(for development/testing)_

## How is Nitric different?

There are already great frameworks and tools to independently solve the problems of cloud development or portability. However, portable options often prohibit the use of managed cloud services, since they're typically proprietary and lead to lock-in. Alternatively, development frameworks assist with rapidly building applications for the cloud, including the use of managed services, but the result is an application that will only run on a single cloud platform.

Nitric is unique in its ability to allow the development of applications, which use the fully-managed services of each cloud provider, while maintaining application portability between those providers, and their equivalent services, from a single codebase.

Instead of integrating directly with cloud provider APIs for services such as compute, events, queues, documents, storage and caching, Nitric provides a single set of APIs for every supported service. These APIs are fulfilled by a lightweight translation layer, connecting to those services on your behalf. Translation is implemented via plugins, enabling complete flexibility without changing application code.

> Learn about the cloud service [APIs offered by Nitric](reference/providers) and how they run in each cloud.

Additionally, Nitric provides a common Request/Response interface, ensuring requests are consistent regardless of the cloud provider or the source. This includes both HTTP and asynchronous event-based requests.

### Ready for Scale

Nitric encourages and assists in the use of stateless and asynchronous techniques to achieve massive scalability. Built around Serverless technologies, applications on Nitric scale horizontally by default, including scaling to zero when volume drops off (on supported clouds), meaning you pay only for what you need and scale to meet peak demands.

### Open Source

When it comes to application portability, we believe in opening up cloud technologies and reducing technology lock-in. We also believe the opinions and contributions of the community lead to better software and faster innovation. That's why Nitric is free and open source.

## Next Steps

Start by installing the [Nitric CLI](/docs/installation), and try out a [Tutorial](/docs/quick-start) to get started!

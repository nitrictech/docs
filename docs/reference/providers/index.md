---
title: Providers
description: Details on the cloud providers supported by Nitric
---

Nitric apps have access to important cloud features. These features are provided by the Nitric Server as APIs and are used via our SDKs.

Here is a list of features offered by Nitric and primary services used to provide them:

| **Feature**                                        | **AWS**                                              | **Azure**                                  | **Google Cloud**               | **Local**                                               |
| -------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------ | ------------------------------ | ------------------------------------------------------- |
| [APIs](/docs/apis)                                     | [API Gateway](./aws/apis)                  | [API Management](./azure/apis)   | API Gateway                    | [Custom](https://github.com/nitrictech/dev-api-gateway) |
| [Collections](/docs/collections)                       | [DynamoDB](./aws/collections)              | [Cosmos DB](./azure/collections) | FireStore                      | BoltDB                                                  |
| [Messaging: Topics](/docs/messaging#topics)            | [SNS](./aws/topics)                        | [Event Grid](./azure/topics)     | PubSub                         | Custom                                                  |
| [Messaging: Queues](/docs/messaging#queues)            | [SQS](./aws/queues)                        | [Storage Queues](./azure/queues) | PubSub<br/>_Pull Subscription_ | Custom                                                  |
| [Schedules](/docs/schedules)                           | [CloudWatch Event Bridge](./aws/schedules) | 🚧 _In Progress_                            | Cloud Scheduler                | _currently unavailable_                                 |
| [Secrets](/docs/secrets)                               | [Secrets Manager](./aws/secrets)           | [Key Vault](./azure/secrets)     | Secret Manager                 | Custom                                                  |
| [Storage](/docs/storage#buckets)                       | [S3](./aws/storage)                        | [Blob Storage](./azure/storage)  | Cloud Storage                  | MinIO                                                   |
| Compute _(Handlers)_<br/>_APIs, Schedules, Topics_ | Lambda                                               | Container Apps                             | CloudRun                       | Docker                                                  |

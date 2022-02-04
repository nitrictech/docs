Nitric is a portable, provider independent runtime for cloud-native and serverless applications. Using Nitric, applications take advantage of cloud-native services for activities like eventing, queues, compute, storage, secrets, etc. without direct integration to cloud specific APIs.

This decoupling enables applications to remain portable between cloud-providers and alternate deployment options such as Kubernetes or stand-alone servers, from a single codebase.

## Portability

Software should be portable, but one downside of serverless apps is that they usually aren't. Serverless apps end up tied to the provider hosting the serverless platform. Write an AWS Lambda Function, it can't run on Azure Functions; integrate with Azure EventGrid, you can't switch to Google PubSub. All that, despite there being no technical limitations preventing portability.

### Aren't the clouds and their services different?

Sort of, but not really. To compete with each other, every cloud has ended up providing a set of functionally identical base services. The biggest difference is just the interfaces to those services. You can kind of think of Nitric to a cloud provider, like an ORMs to SQL database. There are some differences, but in general most SQL databases are similar enough and ORMs provide enough abstraction and value, that they're worth using. It's exactly the same with Nitric and cloud services; some features won't be directly accessible, but for many applications that won't matter. If you need to dig deeper, there is nothing preventing you from importing a cloud SDK in the specific function or container that needs that low-level control.
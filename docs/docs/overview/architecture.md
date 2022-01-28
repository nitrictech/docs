# Architecture

Nitric is an open source cloud application development framework. It leverages open standards, existing tools and cloud provider APIs/SDKs wherever possible to provide a everything needs to go from concept to product for cloud and SaaS applications.

The guiding principals of the Nitric Framework are:
 - Open Source Foundations
 - Convention-over-configuration
 - Configuration-as-code
 - Serverless first
 - Language agnostic, provider agnostic, and fully portable


TODO: ========= Insert NEW architecture image here =========

You can think of Nitric like a virtual cloud platform, providing features like serverless functions, APIs, data and file storage, eventing and security all without coupling to a specific provider like AWS, Google Cloud or Microsoft Azure. Instead, applications built with the framework can be deployed to any of these providers or even self-hosted.

Our SDK and CDK ensure that fully-managed and proprietary services from cloud providers like AWS can be used, without coupling your application directly to those providers. Everything we build is open source, so you stay in control of your application and how it's deployed.

Nitric's API are fulfilled by provider-specific plugins, ensuring flexibility and forwards compatibility with new services and technologies. Pick from our of our pre-built plugins such as the AWS Documents plugins running on DynamoDB, or build your own for any technology you choose.
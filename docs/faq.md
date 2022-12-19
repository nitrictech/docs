---
title: Frequently Asked Questions (FAQ)
description: Frequently asked questions about Nitric.
---

## Do I need to deploy to a cloud to test my applications?

Nope, the Nitric CLI can run applications for development and testing directly on your machine.

## Other programming languages

Nitric's API is built on gRPC. We provide a Node.js SDK, but gRPC also provides support and code generation for many other languages.

## What about data portability?

Nitric helps with code and application portability across cloud providers and the managed services they offer. When considering moving or sharing data we recommend looking into traditional data migration strategies or new multi-cloud services, e.g. MongoDB multi-cloud clusters, Vendia Share, etc.

## How do I use a Cloud/API/Service that you don't support?

We never want to restrict access in Nitric apps. For services/APIs/etc. that we don't support you'll continue to be able to directly target those services in your code. While this may result in coupling between applications and cloud providers, continuing to use the bulk of Nitric's APIs keeps that to a minimum.

Additionally, being an Open Source project, you're welcome to contribute additional services and plugins to the Nitric project to permanently add support for these integrations.

## How do I view my deployments on the Pulumi dashboard?

To view your deployments on the Pulumi dashboard, you will need a Pulumi access token. You can get this token by logging into Pulumi on the browser and going to your profile settings. Under the 'Access Tokens' tab click 'Create token'.

Add the environment variable to your `~/.zshrc` or `~/.bashrc` as:

```
PULUMI_ACCESS_TOKEN=access_token
```

## More questions?

Come and chat on [GitHub](https://github.com/nitrictech/nitric/discussions).

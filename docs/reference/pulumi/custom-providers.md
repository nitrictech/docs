---
title: Building Nitric providers using Pulumi
description: Create your own Infrastructure from Code experience with deployments powered by Pulumi
---

If you're not already familiar with the basics of nitric providers detailed overview on how nitric providers work under the hood can be found [here](../providers/custom/building-custom-provider.md).

Nitric's providers are simple programs that implement a plugin interface backed by gRPC. A nitric provider is a simple server that will be started by the nitric CLI at deploy time and will be provided with a cloud specification to deploy any way the provider sees fit.

![nitric pulumi diagram](/docs/assets/img/nitric-pulumi.png)

Nitric providers can be written using any language, but for now we'd recommend using Go to make use of existing nitric pulumi custom resources and generated protobuf contracts in the nitric core repository.




For reference implementations see the nitric [AWS](https://github.com/nitrictech/nitric/tree/develop/cloud/aws), [GCP](https://github.com/nitrictech/nitric/tree/develop/cloud/gcp) and [Azure](https://github.com/nitrictech/nitric/tree/develop/cloud/azure) provider implementation in the nitric github repository.


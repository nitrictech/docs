---
title: Building Nitric providers using Pulumi
description: Create your own Infrastructure from Code experience with deployments powered by Pulumi
---

If you're not already familiar with the basics of nitric providers detailed overview on how nitric providers work under the hood can be found [here](../providers/custom/building-custom-provider.md).

Nitric's providers are simple programs that implement a plugin interface backed by gRPC. A nitric provider is a simple server that will be started by the nitric CLI at deploy time and will be provided with a cloud specification to deploy any way the provider sees fit.

![nitric pulumi diagram](/docs/assets/img/nitric-pulumi.png)

Nitric providers can be written using any language, but for now we'd recommend using Go to make use of existing nitric pulumi custom resources and generated protobuf contracts in the nitric core repository.

A simple gRPC deployment server, that include pulumi automation API references to get started

```go
type DeployServer struct {
}

func (d *DeployServer) Up(request *deploy.DeployUpRequest, stream deploy.DeployService_UpServer) error {
    // Nitric provides details such as stack and project name on the request, but you're free to change these up to suit your needs
    pulumiStack, err := auto.UpsertStackInlineSource(context.TODO(), "<your_stack_name>", "<you_stack_project>", func(ctx *pulumi.Context) error {
        // 👇 Your pulumi program goes here...
        for _, res := range request.Spec.Resources {
            // Requested resources are provided as part of the deployment request
        }
    })

    if err != nil {
		return err
	}

    res, err := pulumiStack.Up(context.TODO(), optup.ProgressStreams(messageWriter))
	if err != nil {
		return err
	}

    // send final results
    // err = stream.Send(...)

	return err
}

func (d *DeployServer) Down(request *deploy.DeployDownRequest, stream deploy.DeployService_DownServer) error {
    // Nitric provides details such as stack and project name on the request, but you're free to change these up to suit your needs
    s, err := auto.UpsertStackInlineSource(context.TODO(), "<your_stack_name>", "<your_project_name>", nil)
	if err != nil {
		return status.Errorf(codes.Internal, err.Error())
	}

	// destroy the stack
	_, err = s.Destroy(context.TODO(), optdestroy.ProgressStreams(dsMessageWriter))
	if err != nil {
		return err
	}
}
```

For complete example implementations check out our [AWS](https://github.com/nitrictech/nitric/tree/develop/cloud/aws), [GCP](https://github.com/nitrictech/nitric/tree/develop/cloud/gcp) and [Azure](https://github.com/nitrictech/nitric/tree/develop/cloud/azure) providers in the nitric github repository.

If you'd like to see more work in this space including the development of [CDKs](../providers/custom/building-custom-provider#future-features) to make scaffolding and building nitric providers even easier let us know over at our github discussions or drop us a line over at our discord.
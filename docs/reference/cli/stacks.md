---
title: Stacks
description: Understanding Nitric stacks
---

## Stacks

A Nitric stack represents a pairing of a project and its deployment target. A project may have multiple stacks as the deployment target is broken down into a cloud provider e.g. `aws` and a region e.g. `us-east-1`.

If your project needs to deploy to `aws` in two regions `us-east-1` and `eu-west-1`, you'll have two stack definitions in your project.

## Creating a stack

To create a stack use the new command from your project root. Each stack name must be unique within the project.

```bash
nitric stack new
```

Follow the prompts to create a stack for your provider.

```
? What do you want to call your new stack? aws-stack
? Which Cloud do you wish to deploy to? aws
? select the region us-east-1
```

The stack definition will be created in the root of your project as a YAML file prefixed with `nitric-` e.g. `nitric-aws-stack.yaml`

```yaml
name: aws-stack
provider: aws
region: us-east-1
```

Once you have created a stack, you're ready to deploy and undeploy to your deployment target. See the [CLI docs](/docs/reference/cli) for available commands.

## Updating a stack definition

You are free to manually edit the stack definition if required, ensure that both the provider and region values are valid or simply run the `nitric stack new` command again.

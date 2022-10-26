---
title: Nitric CLI
description: Reference docs for the Nitric CLI
---

The Nitric CLI allows you to build, develop, and deploy your serverless application.

To verify your [installation](/docs/installation) run `nitric version`. The output should look something like this:

```
Go Version: go1.17.8
Go OS/Arch: darwin/amd64
Git commit: fce97c9
Build time: 2022-03-23T14:05:59+1100
Nitric CLI: v1.1.0-develop.14-98-gfce97c91c5bce6eeb864194e592134322b52d8e5
```

To get a list of the available commands, run the following command:

```
nitric help

Usage:
  nitric [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  down        Undeploy a previously deployed stack, deleting resources
  feedback    Provide feedback on your experience with nitric
  help        Help about any command
  info        Gather information about Nitric and the environment
  list        List all project stacks and their status
  new         Create a new project
  run         Run your project locally for development and testing
  stack       Manage stacks (the deployed app containing multiple resources e.g. collection, bucket, topic)
  up          Create or update a deployed stack
  version     Print the version number of this CLI

Flags:
  -h, --help                   help for nitric
  -o, --output stringEnumVar   output format (default table)
  -v, --verbose int            set the verbosity of output (larger is more verbose) (default 1)

Use "nitric [command] --help" for more information about a command.
```

## Common Commands

There are a few common commands that you will use frequently:

- `nitric new` creates a new project
- `nitric stack new` creates a new stack within a project
- `nitric start` runs the Nitric server locally
- `nitric up` deploys your stack to the cloud
- `nitric down` destroys your stack from the cloud

## Getting Started

### Projects

To start a new project with nitric, run the `nitric new` command.

```
nitric new
```

This will walk through creating the project, including the name and what template you want to start from.

The command will also create a `nitric.yaml` file. This file contains the configuration for your project. The handlers key is list of globs for your functions. The handlers should point to all functions you want to run or deploy.

```yaml
name: my-project
handlers:
  - functions/*.ts
```

### Stacks

Creating a new stack will create a configuration for a particular cloud. You can have multiple stacks for one project.

```
nitric stack new
```

This will create a `nitric-stackName.yaml` file that contains the configuration for deploying to the cloud. Some providers will have different config, here's an example of an aws stack:

```yaml
# nitric-my-aws-stack.yaml
name: my-aws-stack
provider: aws
region: us-east-1
```

> Note: the cloud configuration is separate to the cloud credentials.
> You will still have to set your cloud credentials on your first deployment by following the guide in the cloud's section in the reference documentation.

## Development

When you are done developing your application and you want to run and test it locally, you can use the `nitric start` command.

```
nitric start

SUCCESS  Started Local Services! (5s)
Local running, use ctrl-C to stop
```

This will run the Nitric server for local testing. You can then run your function files directly to register them with the server. This will output a local endpoint so that you can test your apis.

If you make changes whilst it is running, just re-run your function files and the changes will be reflected in the server output.

## Deployment

### Deploying the Stack

Once you have tested your application locally and you're ready to deploy, you can do `nitric up`. This command can be optionally supplied with the name of a stack with the `-s` or `--stack` argument. However, the stack will be auto-detected if there is only one or options will be presented if there are multiple. This will set the cloud configuration for that particular deployment.

If this is your first deployment, you will have to set up your cloud credentials before deploying to the cloud. You can find the guides for these in the cloud's section in the reference documentation. The AWS guide is [here](/docs/reference/providers/aws).

```
nitric up
```

> Each of the cloud providers deployments take different amounts of time.

The deployment output will look something like:

```
 SUCCESS  Configuration gathered (11s)
 SUCCESS  Images built (34s)
 Deployed  Group/nitric-project-stack (3s)
 Deployed  Repository/nitric-stack-func (2s)
 Deployed  Role/funcLambdaRole (6s)
 Deployed  Table/nitric-collection (9s)
 Deployed  RolePolicyAttachment/funcLambdaBasicExecution (3s)
 Deployed  RolePolicy/funcListAccess (3s)
 Deployed  RolePolicy/func-c0c5f70007b3733c39d198bd674bbde4 (3s)
 Deployed  Image/func-image (1m36s)
 Deployed  Image/func (1m38s)
 Deployed  Function/func (43s)
 Deployed  AWSLambda/func (2m22s)
 Deployed  Api/nitric-api (11s)
 Deployed  Stack/nitric-project-nitric-stack-func (2m37s)
 Deployed  Permission/nitric-apifunc (43s)
 Deployed  Stage/func-listDefaultStage (1m4s)
 Deployed  Stack (4m8s)
┌────────────────────────────────────────────────┐
| API     | Endpoint                             |
| apiName | https://apiName-region.amazonaws.com |
└─────────────────────────────────────────────── ┘
```

### Destroying the Deployment

If you make changes and want to redeploy, you don't have to take the application down, you can just redeploy and it will find the difference. However, if you do want to destroy the application completely, you can use the `nitric down` command.

```
nitric down
```

> This will prompt you again before destroying the stack.

This output will look something like:

```bash
? Warning - This operation will destroy your stack, all deployed resources will be removed. Are you sure you want to proceed? Yes
 Deleted  Stage/func-listDefaultStage (3s)
 Deleted  Permission/nitric-apifunc (3s)
 Deleted  Api/nitric-api (5s)
 Deleted  RolePolicyAttachment/funcLambdaBasicExecution (1s)
 Deleted  Function/func (2s)
 Deleted  RolePolicy/func-c0c5f70007b3733c39d198bd674bbde4 (2s)
 Deleted  RolePolicy/funcListAccess (2s)
 Deleted  Role/funcLambdaRole (6s)
 Deleted  Repository/nitric-stack-func (2s)
 Deleted  Group/nitric-project-stack (2s)
 Deleted  Table/nitric-collection (4s)
 Deleted  Stack (57s)
```

### Listing Deployments

To get information about your deployed stacks, use the `nitric list` command.

This will provide give information about its name, its deployment status, when it was last updated, the resource count, and a url to view the deployment on the pulumi console (will require a pulumi account).

## Info

To get information about the CLI version you are using, you can use:

```
nitric version
```

To get more detailed information about the Nitric runtime, you can use:

```
nitric info
```

For information regarding individual commands, use the `--help` argument on any of the CLI commands. Alternatively you can run:

```
nitric help
```

For more verbose input, specify a verbosity level with `--verbose`. The larger the number, the more verbose.

## Feedback

If you want to provide feedback on the CLI or the framework in general, you can use the `nitric feedback` command. This will template a github issue for you to submit. Alternatively, you can open an issue manually [here](https://github.com/nitrictech/cli/issues/new/choose).

```
? What is the name of the repo? cli
? What kind of feedback do you want to give? bug
? How would you like to title your feedback? Nitric list command
? Please write your feedback <Received>
INFO  Please create a github issue by clicking on the link below
[link to generated github issue]
```
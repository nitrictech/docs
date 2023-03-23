---
title: Deployment
description: How to deploy Nitric applications
---

## Managed Nitric with Deploy

[Nitric Deploy](https://deploy.nitric.io) is the fastest way to deploy your Nitric application with no configuration.

When managing your application with Nitric Deploy, the platform detects the presence of nitric and runs `nitric up` to the cloud you've set up in your Nitric Deploy environment and fully manages your deployment including:

- Integrate with GitHub to connect your repositories
- Build Nitric Framework applications
- Clone a sample project to see how it works
- Configure multiple Stacks for each project (e.g. Production & Staging)
- Connect & deploy your apps to your own AWS account

With more on the way...

## Self-Hosting

You can self-host nitric deployments in your own CI/CD as well using the Nitric CLI.

### Configuring Pulumi

The current providers in nitric for AWS, GCP and Azure all use [Pulumi](https://pulumi.com) under the hood for their deployments, so Pulumi will need to be configured to persist your stack state and to run the deployment to the cloud of your choice.

#### Configuring cloud credentials

You will need to configure your cloud credentials for your CI/CD pipeline to allow nitric to create resources in your cloud account, instructions on doing this can be found in our provider documentation for each of the clouds: [AWS](/docs/reference/providers/aws), [GCP](/docs/reference/providers/gcp) and [Azure](/docs/reference/providers/azure)

#### Configuring State Backend

For nitric to maintain the state of your deployment between runs you will also need to configure a backend for Pulumi to store its stack state. For this, you can use either [Pulumi's managed service](https://www.pulumi.com/docs/intro/concepts/state/#logging-into-the-pulumi-service-backend), or you could use one of the other state [backends](https://www.pulumi.com/docs/intro/concepts/state/#logging-into-a-self-managed-backend) they provide support for.

## Configuring Deployment

When deploying the application, you can add extra configuration for specific functions or a global function. This configuration is individualized for each stack file. Below is an example of config added to a GCP stack to augment the memory, timeout, and telemetry sampling percentage.

```yaml
name: project
provider: gcp
region: australia-southeast1
project: project-id-123456
config:
  default:
    memory: 1024
    telemetry: 10
  functions/hello.ts:
    timeout: 30
```

You can point config to all functions, or to a specific function. Either by using the `default` key or the function name i.e. `functions/hello.ts`. The following configurations can be made:

- `memory`: The memory of the compute instance in MB. Defaults to 512.
- `timeout`: The max running time of the function in seconds. Defaults to 15.
- `telemetry`: The percentage of requests to be sampled for tracing. Defaults to 0%.

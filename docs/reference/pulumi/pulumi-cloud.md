---
title: Using Pulumi Cloud as a Backend
description: Use pulumi cloud as a state backend when deploying your nitric applications
---

Nitric uses the [Pulumi Automation API](https://www.pulumi.com/automation/) for it's out of the box provider plugins, this can be a bit confusing at first as there is no need to create a workspace along with your project to manage your stacks. These stacks are instead managed by the program that uses the automation API to interact with Pulumi to get your infrastructure deployed, this could come in the form of a CLI, API or even plugins to other software.

Despite these differences this does not change how you can integrate nitric with Pulumi cloud and use it as a state backend for your stack infrastructure. You can get started quickly and try this out with the following steps

## Get the nitric CLI and scaffold a new project

You can get the nitric CLI by following the instructions [here](). Once its setup you can scaffold a new project by running:

```bash
nitric new
```

And following the prompts to create your new project. Once that's jump into that directory with

```bash
cd <your_project_name>
```

## Create a new nitric stack for your preferred cloud provider

To create a configure new stack run

```
nitric stack new
```

And select the cloud you'd like to deploy to and follow the prompts to configure it.


## Make sure pulumi is configured

If you don't have the pulumi CLI setup make sure you do. You can check if you're logged in with by running:

```bash
pulumi whoami
```

If you need to login to your pulumi cloud account you can do so with

```bash
pulumi login
```

Once that's setup you can simply run

```bash
nitric up
```

Within your project directory and wait until the project has finished deploying. You can also follow your deployment on the [Pulumi cloud dashboard](https://app.pulumi.com)


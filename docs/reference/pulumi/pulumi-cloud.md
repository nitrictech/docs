---
title: Using Pulumi Cloud as a Backend
description: Use Pulumi Cloud as a state backend when deploying your Nitric applications
---

Nitric uses the [Pulumi Automation API](https://www.pulumi.com/automation/) for its pre-built provider plugins. At first, this may cause some confusion as there is no requirement to create a workspace for managing stacks alongside your project. Instead, the program that interacts with Pulumi via the automation API handles the management of these stacks, which could take the form of a CLI, API, or plugins for other software.

Despite these differences, it does not change how you integrate Nitric with Pulumi Cloud and use it as a state backend for your stack infrastructure. You can get started quickly and try this out with the following steps:

## Get the Nitric CLI and scaffold a new project

You can get the Nitric CLI by following the instructions [here](https://nitric.io/docs/installation). Once its set up you can scaffold a new project by running:

```bash
nitric new
```

And follow the prompts to create your new project. Once that's done, jump into that directory with:

```bash
cd <your_project_name>
```

## Create a new Nitric stack for your preferred cloud provider

To create and configure a new Nitric stack run:

```
nitric stack new
```

This above command will prompt you to set up and configure the cloud you want to deploy to.

## Make sure Pulumi is configured

If you don't have the Pulumi CLI set up take a look at their [installation documentation](https://www.pulumi.com/docs/get-started/install/). You can check if you're logged in with by running:

```bash
pulumi whoami
```

If you need to login to your Pulumi Cloud account you can do so with:

```bash
pulumi login
```

Once that's set up you can simply run:

```bash
nitric up
```

Within your project directory and wait until the project has finished deploying. You can also follow your deployment on the [Pulumi Cloud dashboard](https://app.pulumi.com)

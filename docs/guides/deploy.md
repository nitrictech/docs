---
title: Deploying your first project with Nitric Deploy
description: Nitric Deploy builds and deploys the right infrastructure from your code in your chosen cloud.
---

## What we'll be doing

In this guide, we'll walk through the steps of getting started with [Nitric Deploy](https://deploy.nitric.io). You'll deploy a new project in just a few minutes.

1. Sign in to Nitric Deploy
2. Create an organization
3. Set up AWS credentials
4. Create or import a project
5. Create an environment
6. Configure environment variables
7. Deploy your project
8. View the logs

<br/>

## Sign in to Nitric Deploy

> Nitric Deploy is currently in preview. [Request access](https://deploy.nitric.io/signup) using your GitHub account email address.

Nitric Deploy can be accessed by navigating to https://deploy.nitric.io - you'll be greeted by our sign in screens. Follow the prompts to sign in with GitHub.

<img alt="Nitric Deploy sign in screen" src="../../assets/img/guides/deploy/sign-in.png" height="337.5" />
<img alt="Signing into Nitric Deploy with GitHub" src="../../assets/img/guides/deploy/sign-in-3.png" height="337.5" />

<br/>

## Create an organization

Organizations allow you to group your projects. For example, I have an organization which contains all of my demo projects.

Let's create a new organization and give it a name.

<img alt="Creating an organization in Nitric Deploy" src="../../assets/img/guides/deploy/add-org-2.png" height="337.5" />
<img alt="An organization created in Nitric Deploy" src="../../assets/img/guides/deploy/add-org.png" height="337.5" />

<br/>

## Set up AWS credentials

The next step is to set up our AWS credentials with our new organization. Navigate to Settings -> Credentials and click **Create Credential**.

You'll need to name and store your AWS credentials.

> If you're unsure about what these are or how to get them, see the [Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) documentation from AWS.

> Only valid credentials will work here.

<img alt="Adding AWS credentials in Nitric Deploy" src="../../assets/img/guides/deploy/add-org-credentials.png" height="337.5" />
<img alt="AWS credentials created in Nitric Deploy" src="../../assets/img/guides/deploy/add-org-credentials-2.png" height="337.5" />

<br/>

## Create or import a project

Projects can be imported from existing Git repositories or we can scaffold a new project for you from one our of templates.

<img alt="An organization in Nitric Deploy with no projects created" src="../../assets/img/guides/deploy/add-project.png" height="337.5" />
<img alt="Import a Git repo or clone a template in Nitric Deploy" src="../../assets/img/guides/deploy/add-project-2.png" height="337.5" />

### Existing projects

In order to import an existing project, it must have been scaffolded by using the Nitric CLI. Your projects _must_ contain a valid `nitric.yaml` file for it to function correctly.

<img alt="Configure a Nitric project from a GitHub repo" src="../../assets/img/guides/deploy/add-project-existing.png" height="337.5" />

### Scaffold a new project

Our template projects will give you a starting point with a basic REST API.

> Your new project will be scaffolded in the repository you select.

<img alt="Creating a new Nitric project" src="../../assets/img/guides/deploy/add-project-new.png" height="337.5" />

In both of the scenarios you'll need to choose a production branch. This is the branch which Nitric Deploy will watch for any push events and trigger a deployment.

You'll also need to specify which directory the Nitric source code is in - by default this would be the root directory `./` but could be a few levels deeper if you are working in an existing monorepo.

<br/>

## Configure environment variables

If your project requires variables, they can be added in project settings.

> Changes to variables will require a redeploy, which can be triggered from the project's home.

<img alt="Add environment variables for production and staging" src="../../assets/img/guides/deploy/new-environment-variable.png" height="337.5" />

<br/>

## Create an environment

An environment represents a deployed instance of your application in a specific AWS account and region. You can have one or more environments based on the development workflow you follow (e.g. dev, staging, prod), or if you need environments in other regions or using different credentials.

> Once you've created an environment, Nitric Deploy will automatically initiate your first cloud deployment.

<img alt="A project in Nitric Deploy with no environments created" src="../../assets/img/guides/deploy/new-environment.png" height="337.5" />

<img alt="Create a stack environment for your project" src="../../assets/img/guides/deploy/new-environment-2.png" height="337.5" />

<br/>

## Deploy your project

Your project will automatically deploy when you create your environment for the first time, and the right cloud infrastructure will be automatically provisioned. It will also deploy each time you push to the `linked branch` selected when creating your environment.

Once you see the deployment tick over to success with a 'tick' you'll also notice that your preview / production URL is displayed. You can use this to access your deployed API.

If you scaffolded a template project then you can test the API out with the following command.

```bash
curl https://{url}/hello/user
```

<img alt="A stack deployed with Nitric Deploy infrastructure automation" src="../../assets/img/guides/deploy/deploy-2.png" height="337.5" />

<br/>

## View the logs

By clicking on 'view latest build' we can see the details and retrieve the deployment log information.

<img alt="Cloud deployment logs in Nitric Deploy" src="../../assets/img/guides/deploy/deploy-logs.png" height="337.5" />

That's it! With just a few clicks, you've deployed a project to your cloud and don't have to manage environments or infrastructure state.

## Whats next?

Try one of the following activities to keep going with Nitric:

- Update your code and push to the configured branch
- Get started on one of our [guides](/docs/reference) to build a new project with the Nitric CLI
- [Join our Discord](https://discord.gg/Webemece5C) to ask questions or get help with your next project

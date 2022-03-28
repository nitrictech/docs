## Setting up CI/CD with [Nitric](https://nitric.io) and [GitHub actions](https://github.com/features/actions) 
GitHub has comprehensive documentation which can guide you through advanced workflows.

Here we'll walk through the simple example of deploying a Nitric project to AWS.

## Lets start by getting our workflow setup

In your project you'll want to create a yaml file which contains your workflow config. You can name this file anything you like, in this example we've gone with 'deploy-aws.yaml'.

## Full example

```yaml
name: Sample configuration to deploy to AWS
on:
  workflow_dispatch:
  push:
    branches:
      - main
env:
  PULUMI_CONFIG_PASSPHRASE: ${{ secrets.PULUMI_ACCESS_TOKEN }}          
  PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
jobs:
  update:
    name: Update
    runs-on: ubuntu-latest
    steps:
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-region: ${{ secrets.AWS_REGION }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      - name: Install Nitric CLI
        uses: nitrictech/setup-nitric@v1
        with: 
          version: 1.2.1
      - name: Install dependencies
        uses: pulumi/setup-pulumi@v2          
      - name: Checkout project 
        uses: actions/checkout@v3
      - name: Resolve packages
        run: npm install
      - name: Deploy stack to aws
        run: nitric up -s dev -v0
```

## Breaking it down

Edit the config file and start by defining a name.

```yaml
name: Sample configuration to deploy to AWS
```

Setup action triggers

Action triggers tell your workflow when to run.

- workflow_dispatch 
    - This is a trigger which allows you to run the workflow from github.com within the action
- push -> branches -> main 
    - This will trigger this workflow each time a push is performed on the main branch

```yaml
on:
  workflow_dispatch:
  push:
    branches:
      - main
```
Configure the environment properties required by Nitric's dependency Pulumi as GitHub secrets.

- PULUMI_ACCESS_TOKEN

    - You can get a pulumi access token by logging into pulumi on the browser and going to your profile settings. Under the 'Access Tokens' tab click 'Create token'.

- PULUMI_CONFIG_PASSPHRASE

    - For interaction free experiences, Pulumi also requires a passphrase to be configured. Your passphrase is used to generate a unique key used to encrypt configuraiton and state values. E.g. 'my-secret-password'

```yaml
env:
  PULUMI_CONFIG_PASSPHRASE: ${{ secrets.PULUMI_CONFIG_PASSPHRASE }}          
  PULUMI_ACCESS_TOKEN: ${{ secrets.PULUMI_ACCESS_TOKEN }}
```

Intialize your workflow with a name and set where it will be run.
> Note: Nitric currently only supports ubuntu-latest. 

```yaml
jobs:
  update:
    name: Deploy
    runs-on: ubuntu-latest
```

Next setup your AWS action with the following credentials as GitHub secrets:
- AWS_ACCESS_KEY_ID 
- AWS_SECRET_ACCESS_KEY
- AWS_REGION

You'll obtain both of these keys from the amazon console, an example region would be us-east-2.

```yaml
    steps:
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-region: ${{ secrets.AWS_REGION }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

Install Nitric and dependencies to the runner:

```yaml
      - name: Install Nitric CLI
        uses: nitrictech/setup-nitric@v1
        with: 
          version: 1.2.1
      - name: Install dependencies
        uses: pulumi/setup-pulumi@v2
```

Finally, checkout your project and run the up command to deploy your project. In this project we've initialized a stack which deploys to AWS named dev with the command `nitric up -s dev -v0`

```yaml        
      - name: Checkout project 
        uses: actions/checkout@v3
      - name: Resolve packages
        run: npm install
      - name: Deploy stack to aws
        run: nitric up -s dev -v0
```

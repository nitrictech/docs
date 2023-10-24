export const description = 'Migrating your application away from Nitric Deploy'

# Deploying with Nitric Deploy

<Note>
The public preview phase for Nitric Deploy has concluded, and we're no longer accepting sign-ups at this time. We are incredibly thankful for the support and feedback we've received from our preview participants. This feedback has been invaluable in helping us improve both Nitric Deploy and the open-source Nitric Framework.

We're hard at work on the future of the open-source Nitric Framework and other services from the Nitric team. We appreciate your interest and encourage you to follow our latest announcements elsewhere on this site, [GitHub](https://github.com/nitrictech/nitric) and [Discord](https://discord.gg/Webemece5C).

</Note>

## Migrating from Nitric Deploy

In this guide, we'll walk you through the steps to migrate from Nitric Deploy to a CI utilizing the Nitric Framework.

The good news is that Nitric Deploy was built to leverage the capabilities of the Nitric Framework, making the transition straightforward. This also means that you won't have to make any changes to the app code which you've already written.

Each CI (GitHub, Azure, etc.) is slightly different. However, they all follow a similar pattern and set of steps:

- Set up an actionable event triggered by a 'git push' to your desired branch
- Nominate an runtime OS for your CI
- Install code dependencies and build the application
- Install Nitric and its dependencies.
- Configure environment variables

Click [here](https://nitric.io/docs/guides/getting-started/github-actions) for a guide on setting up a GitHub Actions.

> Note: Please reach out on [Discord](https://discord.gg/Webemece5C) if you encounter any difficulties or if you would like instructions on migrating to other CI solutions.

## Pulumi Configuration

The above steps assume that you'll be using the OpenSource framework to handle your deployments. If you're looking for a `destroy` operation then you'll need to gain access to the Pulumi stack.

Navigate to the `settings` tab of your project in the Pulumi dashboard. The export commands will look similar to the following:

```bash
# Pulumi.yaml
echo "name: cold-pond" > Pulumi.yaml
echo "runtime: nodejs" >> Pulumi.yaml

# Pulumi.cold-pond-aws.yaml
pulumi stack select usr/cold-pond/cold-pond-aws
pulumi config refresh
```

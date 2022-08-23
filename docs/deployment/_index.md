## Managed Nitric with Deploy

[Nitric Deploy](https://deploy.nitric.io) is the fastest way to deploy your Nitric application with no configuration.

When managing your application with Nitric Deploy, the platform detects the presence of nitric and runs `nitric up` to the cloud you've setup in your Nitric Deploy environment and fully manages your deployment including:

- Full serverless infrastructure state management
- Push to deploy from Git
- And more coming soon...

## Self-Hosting

You can self-host nitric deployments in your own CI/CD as well using the Nitric CLI.

### Configuring Pulumi

The current providers in nitric for AWS, GCP and Azure all use pulumi under the hood for their deployments, so pulumi will need to be configured to persist your stack state and to run the deployment to the cloud of your choice.

#### Configuring cloud credentials

You will need to configure your cloud credentials for your CI/CD pipeline in order to allow nitric to create resources in your cloud account, instructions on doing this can be found in our provide documentation for each of the clouds: [AWS](/docs/reference/aws), [GCP](/docs/reference/gcp) and [Azure](/docs/reference/azure)

#### Configuring State Backend

In order for nitric to maintain the state of your deployment between runs you will also need to configure a backend for pulumi to store it's stack state. For this you can use either [pulumi's managed service](https://www.pulumi.com/docs/intro/concepts/state/?utm_campaign=&utm_term=&utm_medium=ppc&utm_source=adwords&hsa_grp=136279040283&hsa_cam=15160582074&hsa_mt=&hsa_net=adwords&hsa_ver=3&hsa_acc=1926559913&hsa_ad=597773591016&hsa_src=g&hsa_tgt=aud-1644651262469:dsa-1655465286641&hsa_kw=&gclid=Cj0KCQjwr4eYBhDrARIsANPywCi0LaRbJ4pg-AVRGEvlb-91-cFR1Jw_hRjJqNR-5lvBwZtxOPJkacsaAmEVEALw_wcB#logging-into-the-pulumi-service-backend), or you could use one of the the other state [backends](https://www.pulumi.com/docs/intro/concepts/state/?utm_campaign=&utm_term=&utm_medium=ppc&utm_source=adwords&hsa_grp=136279040283&hsa_cam=15160582074&hsa_mt=&hsa_net=adwords&hsa_ver=3&hsa_acc=1926559913&hsa_ad=597773591016&hsa_src=g&hsa_tgt=aud-1644651262469:dsa-1655465286641&hsa_kw=&gclid=Cj0KCQjwr4eYBhDrARIsANPywCi0LaRbJ4pg-AVRGEvlb-91-cFR1Jw_hRjJqNR-5lvBwZtxOPJkacsaAmEVEALw_wcB#logging-into-a-self-managed-backend) they provide support for.

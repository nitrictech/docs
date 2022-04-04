AWS Serverless Application Model (SAM) is an abstraction layer for CloudFormation that makes it simpler to write serverless applications in AWS. 
The SAM CLI enables local development and testing that closely resembles a Lambda environment.

Both AWS SAM and Nitric try solve the problem of infrastructure as code to simplify serverless application development. However, there are some major differences in the building and configuration of the two frameworks.

## TLDR
The major differences with SAM are:
- Only supports AWS.
- Configuration is defined in a separate YAML file.
- Transpiles to CloudFormation.
- Does not support queues, secrets, buckets, or schedules without writing extensions in CloudFormation configuration.
- Although SAM is open source, CloudFormation is not.
- Configuration artifacts must be stored in an S3 Bucket.
- Manually configure IAM policies to follow best practice.

## Building

### SAM

Building with SAM requires both the configuration in the template yaml, as well as the code that will be executed in the lambda.

```yaml
Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function 
    Properties:
      CodeUri: hello_world/
      Handler: app.lambda_handler
      Runtime: nodejs14.x
      Events:
        HelloWorld:
          Type: Api 
          Properties:
            Path: /helloWorld
            Method: get
```

Then your code might look something like this for a simple hello world application:

```typescript
function lambdaHandler(event, context) {
  return JSON.stringify({
      statusCode: 200,
      body: {
          message: "Hello World",
      },
  })
}
```

This gets much more complicated if you want to interact with other AWS resources, where you would use the AWS CDK.

### Nitric

Nitric uses config as code, which means all your cloud resources are provisioned and interacted with entirely through code.

```typescript
import { api, bucket } from '@nitric/sdk';

const newApi = api("test-bucket");
const newBucket = bucket("test-bucket").for("reading");

newApi.get('/hello', (ctx) => {
  ctx.body = newBucket.file("test-file").read();
  return ctx;
});
```

## IAM Policies

An important distinction is the approach to least-privilege IAM permissions. 

SAM's least-privilege permissions are written explicitly in the template configuration. The responsibility is on the user to make sure the policies provided follow AWS best practice.

```yaml
...
Policies:
  - SQSPollerPolicy:
      QueueName:
        !GetAtt MyQueue.QueueName
```

Nitric follows each cloud provider's best practice and assigns the roles under the hood based on a verb, i.e. 'reading', 'writing', 'deleting'. This means you choose what resources each function has access to, directly in the code you write.

```typescript
queue("test-queue").for("sending", "receiving");
```

## Testing

Testing using a local run has a lot of overlap:
- Has hot reloading.
- Builds containers locally.
- Starts a local API Gateway.
- Can configure development environment variables.
- Resembles the cloud environment.

Writing unit and integration tests can be different between the two as AWS provides their own testing framework provided in the CDK. On the other hand, any testing framework can be used to test Nitric applications.

SAM's local run is done using:

```
sam local start-api
```

And Nitric's is done using:

```
nitric run
```


## Deploying

The deployment between Nitric and AWS SAM is somewhat similar, however the obvious caveat is that AWS SAM can only deploy to AWS, whereas Nitric can deploy to AWS, GCP, and Azure.

### SAM

To deploy with SAM you can use the guided prompt. This will go over all the options and build a configuration file that remains in your project for future deployments.

```
sam deploy --guided
```

Then to bring the stack down:

```
aws cloudformation delete-stack --stack-name stack-name --region region
```

### Nitric

Nitric's stack configuration will have already been set when the project was created. Therefore, to deploy with Nitric all thats needed is:

```
nitric up -s stack-name
```

Then to bring the stack down:

```
nitric down -s stack-name
```
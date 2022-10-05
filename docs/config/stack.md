## Stack Configuration

### Function Config

Functions can be configured with memory and timeout requirements per function, a default can also be set for all functions in a stack that do not have their own configuration.

**Example**

```yaml
functions:
  default:
    # Set functions to have 512 MB of memory
    memory: 512
    # Set functions to have a timeout of 30 seconds
    timeout: 30
  # Set the memory and timeout for a specific function
  functions/hello-world.ts:
    memory: 1024
    timeout: 15
```

> This configuration goes in the stack file e.g. `nitric-<stack>.yaml`

### Default values

When function configuration is not specified the default depends on the cloud provider being deployed to:

| provider | memory | timeout |
| -------- | ------ | ------- |
| aws      | 128    | 15      |
| gcp      | 512    | 15      |
| azure    | 128    | 15      |

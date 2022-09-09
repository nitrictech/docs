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


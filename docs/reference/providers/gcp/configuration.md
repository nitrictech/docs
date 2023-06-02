---
title: GCP Configuration
description: Configuring your GCP stacks
---

# Complete Example with comments

```yaml
# The name of your GCP stack
name: my-gcp-stack-name
# The target GCP region to deploy to
# See available regions:
# https://cloud.google.com/run/docs/locations
region: my-gcp-stack-region
# ID of the google cloud project to deploy into
gcp-project-id: my-gcp-project-id

# All configuration below is optional

# The timezone that deployed schedules will run with
# Format is in tz identifiers:
# https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
schedule-timezone: Australia/Sydney # Available since v0.27.0

# Configure your deployed functions/services
config:
  # How functions without a type will be deployed
  default:
    # configure a sample rate for telemetry (between 0 and 1) e.g. 0.5 is 50%
    telemetry: 0
    # configure functions to deploy to Google Cloud Run
    cloudrun: # Available since v0.26.0
      # set 512MB of RAM
      # See cloudrun configuration docs here:
      # https://cloud.google.com/run/docs/configuring/memory-limits
      memory: 512
      # set a timeout of 15 seconds
      # https://cloud.google.com/run/docs/configuring/request-timeout
      timeout: 15
      # The maximum number of instances to scale down to
      # https://cloud.google.com/run/docs/configuring/min-instances
      min-instances: 0
      # The maximum number of instances to scale up to
      # https://cloud.google.com/run/docs/configuring/max-instances
      max-instances: 10
      # Number of concurrent requests that each instance can handle
      # https://cloud.google.com/run/docs/configuring/concurrency
      concurrency: 80
  # Additional deployment types
  # You can target these types by setting a `type` in your project configuration
  big-service:
    telemetry: 0
    cloudrun:
      memory: 1024
      timeout: 60
      min-instances: 2
      max-instances: 100
      concurrency: 1000
```

> Missing something? Let us know by raising an issue in [github](https://github.com/nitrictech/nitric) or by dropping us a line on [discord](https://discord.com/invite/Webemece5C)

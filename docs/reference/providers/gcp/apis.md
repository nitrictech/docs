---
title: APIs
description: How Nitric deploys APIs to Google Cloud
---

Nitric APIs are deployed to GCP using [API Gateway](https://cloud.google.com/api-gateway).

## GCP Resources

The following resources are created when deploying APIs to GCP:

- [API Gateway](https://cloud.google.com/api-gateway)
- [Cloud Run](https://cloud.google.com/run)
- [GCR](https://cloud.google.com/container-registry)

## Deployment

During deployment, the Nitric CLI builds your API's routes, methods, and handlers. They are built as follows:

- Files containing handler functions, such as [api.post()](/docs/reference/api/api-post), are built into container images.
- Built container images are pushed to the [Google Container Registry](https://cloud.google.com/container-registry) as private images
- Container Images are deployed as Cloud Run applications.
- All route/handler mappings are built into an Open API v2 (Swagger) definition file (Google Cloud API Gateway does not support v3).
  - Your applications will be routed to using Google Clouds Open API Extensions `x-google-backend`.
- The API definition and Resource Group is deployed to API Gateway.

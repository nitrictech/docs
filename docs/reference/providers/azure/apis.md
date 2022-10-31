---
title: APIs
description: How Nitric deploys APIs to Azure
---

Nitric APIs are deployed to Azure using [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/).

## Azure Resources

The following resources are created when deploying APIs to Azure:

- API Management Service
- Container Apps
- ACR Images
- Azure Resource Group

## Notes

The resource group stores metadata about the resources.
All metadata is stored in the region nominated by the region which you have configured.

Azure Container Apps are currently in preview in the US East 2 region.

## Deployment

During deployment Nitric's CLI builds your API's routes, methods and handlers will be built as follows:

- Files referenced under `functions` in `nitric.yaml` are built into container images
- Built container images are pushed to the [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) as private images
- Container Apps are setup to run the containers
- All route/handler mappings are built into an Open API v3 definition file
- The API definition and Resource Group is deployed as an API Management hosted API

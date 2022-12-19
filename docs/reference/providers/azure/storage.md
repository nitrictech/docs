---
title: Azure Resources - Storage
description: How Nitric deploys Storage with Azure
---

Nitric Storage are deployed to Azure using [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/).

## Azure Resources

The following resources are created when deploying Storage to Azure:

- Blob Container
- Azure Resource Group

## Deployment

> Note: Azure Storage 'Containers' are synonymous with 'Buckets' in other cloud platforms.

During deployment Nitric's CLI creates your Storage Buckets:

- Each Bucket declaration in your app is deployed as a Blob Container in Azure
- Container Apps are configured to enable access to Storage Containers

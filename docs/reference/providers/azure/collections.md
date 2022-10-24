---
title: Collections
description: How Nitric deploys Collections to Azure
---

Nitric Collections are deployed to Azure using [Azure Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/).

## Azure Resources

The following resources are created when deploying Collections to Azure:

- MongoDB Collection
- Azure Resource Group

## Deployment

During deployment Nitric's CLI builds your Collections as follows:

- The collections definition and resource group are deployed as a MongoDB Collection.

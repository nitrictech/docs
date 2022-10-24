---
title: Secrets
description: How Nitric deploys Secrets to Azure
---

Nitric Secrets are deployed to Azure using [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/).

## Azure Resources

- An Azure Key Vault instance per app

> Unlike AWS Secrets Manager and GCP Secret Manager, which are both secrets services. Azure Key Vault requires 'Vault' resources to be created before secrets can be stored. For this reason, Nitric will create a Vault for each of your applications during deployment if it doesn't already exist.

## Deployment

During deployment Nitric's CLI builds your Secrets will be built as follows:

- If secrets are referenced anywhere in your application a Key Vault instance will be deployed
- Container Apps are configured to permit access the Key Vault instance

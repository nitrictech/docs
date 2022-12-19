---
title: AWS Resources - Storage
description: How Nitric deploys Storage to AWS
---

Nitric Storage is deployed to AWS using [Amazon S3](https://aws.amazon.com/s3/).

## AWS Resources

The following resources are created when deploying Storage Buckets to AWS:

- S3 Buckets
- IAM Policies and Permissions

## Deployment

During deployment Nitric's CLI creates buckets for your stack:

- Declared Buckets are created in S3
- IAM policies are created enabling Functions to access S3 objects

---
title: AWS Resources - Collections
description: How Nitric deploys Collections to AWS
---

Nitric Collections are deployed to AWS using [Amazon DynamoDB](https://aws.amazon.com/dynamodb).

## AWS Resources

Each Nitric Collection will result in the creation of a DynamoDB Table. When sub-collections are added new tables aren't needed, instead a single-table design is used to improve read and query performance. For this reason collections must be defined at build time but sub-collections can be created dynamically.

## Deployment

During deployment Nitric's CLI deploys your collections:

- Declared collections are deployed as DynamoDB tables
- Appropriate partition and sort keys are set on the table to enable Nitric's query and retrieval features
- IAM policies are setup enabling declared access by functions

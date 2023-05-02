---
title: Pulumi
description: How nitric integrates with Pulumi
---

Nitric's cloud deployments are built on a pluggable interface known as [providers](../providers). All of Nitric's core providers [aws](../providers/aws), [gcp](../providers/gcp) and [azure](../providers/azure) are powered by [Pulumi](https://pulumi.com). When using these providers you can [integrate nitric into your existing Pulumi setup](./pulumi-cloud.md), as easily as you could with your own Pulumi programs.

You can also extend these providers using the Pulumi automation API to [write your own Nitric providers](./custom-providers.md).


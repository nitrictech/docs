---
title: GCP Provider Overview
description: The Google Cloud provider for Nitric
---

The officially supported Nitric Google Cloud Platform (GCP) Provider.

## Status: _Preview_

## Usage

The GCP provider is supported by the Nitric SDKs and CLI by default. However, credentials for a GCP account will be required when using the [up command](/docs/reference/cli) from the CLI.

## Google CLI Installation

Installing the GCP CLI assists with credentials setup. You can install it using these summarized instructions, for more options see the [Google docs](https://cloud.google.com/sdk/docs/install).

### Windows

Download & install the [latest CLI release](https://cloud.google.com/sdk/docs/install#windows).

### Linux

```
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-378.0.0-linux-x86_64.tar.gz
```

### macOS

Download & install the [latest CLI release](https://cloud.google.com/sdk/docs/install#mac).

### GCP Credentials

Authorize gcloud to access the Cloud Platform with Google user credentials:

```
gcloud auth login
```

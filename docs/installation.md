---
title: Installation
description: Basic installation instructions for the Nitric Framework
---

## Prerequisites

Nitric relies on functionality from the following projects to help retrieve plugins, containerize and deploy your application.

Please follow these links to the official installation steps for each.

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Pulumi](https://www.pulumi.com/docs/reference/cli/)

## Installing the Nitric CLI

### macOS

`nitric` is available via [homebrew](https://brew.sh/)

```bash
brew install nitrictech/tap/nitric
```

### Windows

`nitric` is available via [scoop](https://scoop-docs.vercel.app/)

```
scoop bucket add nitric https://github.com/nitrictech/scoop-bucket.git
scoop install nitric
```

### Linux

`nitric` can be downloaded as a scripted install via curl.

```bash
curl https://nitric.io/install | bash
```

### Manual

You can download pre-compiled binaries from the [releases](https://github.com/nitrictech/cli/releases) page and copy them into your desired location

## What's next

Checkout out our [concepts](/docs/concepts) page for a quick overview of Nitric.

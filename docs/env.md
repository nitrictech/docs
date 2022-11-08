---
title: Environment Variables
description: How to use Environment Variables in Nitric projects
---

.env files can be used to configure properties such as runtime ids, API keys, etc.

> Note: If you're looking for more secure ways to store values you might consider the [secrets manager](/docs/secrets) or in an [object store](/docs/storage).

## What order are `.env` files loaded in?

Nitric will automatically load your .env files in the following order.

```bash
nitric run
```

1. .env
2. .env.development
3. any file you pass in via "--env-file"

```bash
nitric up
```

1. .env
2. .env.production
3. any file you pass in via "--env-file"

Values in .env are overwritten by .env.development if it exists and so forth. Options 1 & 2 must be stored in the root directory of your project.

## Nitric Deploy

It's easy to set up environment variables in Nitric Deploy, here's a simple guide to get you started.

[Setting up environment variables](/docs/guides/deploy#configure-environment-variables) in Nitric Deploy.

> We don't recommend you commit your .env files to your git repository, Nitric Deploy will overwrite these files.

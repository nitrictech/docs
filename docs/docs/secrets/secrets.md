# Secrets

## Overview

Nitric Secrets makes securely storing, updating and retrieving sensitive values like database credentials and API keys a breeze.

### Secrets

Secrets are values stored in an encrypted Secrets Manager, usually containing sensitive data such as the username and password used to access a database. Since credentials and keys tend to change over time, Nitric Secrets act as a virtual storage location for these values with version control baked in.

### Versions

Each secret will contain at least a "latest" version, along with any historical versions of that secret's value. This ensures values, such as encryption keys, can be rotated without losing access to the key used with previously encrypted data.

### Values

Values are the secret data attached to a specific secret version, such as the current encryption key or database credentials.

### The relationship between Secrets, Versions and Values

The schema below illustrates this for a secret named db.password with two versions:

```
+- Secret [ 'db.password' ]
   |
   +- SecretVersion [ '7F5F86D0-D97F-487F-A5A0-11BAAD00F777' ]
   |  |
   |  +- SecretValue [ 'bleak_dearest_hanged_reigns' ]
   |
   +- SecretVersion [ '0581BBD9-C67F-4E8F-849D-38E52CAEE0EB' ]
      |
      +- SecretValue [ 'crummy_goofed_caddy_radiant' ]
```

It should be noted that the version ids are for illustration only. The specific id/numbering strategy depends on the underlying secrets manager.

## The basics

TODO: ================= update link below with example =================

The guide introduces the features of Nitric Secrets, you can use it in your own project or take a look at [one of our examples](#)

### Create a secret

Creating a new secret can be done in a single line, when a new secret is created a new version is automatically generated.

```javascript
import { secrets } from '@nitric/sdk';

// Create a new secret
const mySecret = await secrets()
  .secret('my-secret')
  .put("ssshhhhh.... it's a secret");

// We can get the version id of our newly created secret using version()
mySecret.version();
```

> Secret versioning is automatic. Every time you `put` a new secret value a new version will be created and set as the `latest` version.

### Access a secret

Accessing the contents of a secret version can be done my calling the `access()` method.

```javascript
// access the latest version of a secret
const latestSecret = await secrets().secret("my-secret").latest().access()

// access a known version of a secret
const theSecret = await secrets()
  .secret('my-secret')
  .version('version-id')
  .access();
```

## What's next?

<!-- TODO: ================= update link below with reference page ================= -->

- Learn more about secrets in our reference docs.

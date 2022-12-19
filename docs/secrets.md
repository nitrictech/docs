---
title: Building Blocks - Secrets
description: Securely store and retrieve secrets values with Nitric
---

Nitric Secrets makes securely storing, updating and retrieving sensitive values like database credentials and API keys easy.

You can also choose to store these values as [environment variables](/docs/env).

## Secrets

Secrets are values stored in an encrypted Secrets Manager, usually containing sensitive data such as the username and password used to access a database. Since credentials and keys tend to change over time, Nitric Secrets act as a virtual storage location for these values with version control baked in.

## Versions

Each secret will contain at least a "latest" version, along with any historical versions of that secret's value. This ensures values, such as encryption keys, can be rotated without losing access to the key used with previously encrypted data.

## Values

Values are the secret data attached to a specific secret version, such as the current encryption key or database credentials.

## The relationship between Secrets, Versions and Values

The schema below illustrates the relationship between secrets, versions and values for a secret named db.password with two versions:

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

> Version IDs are for illustration only. The specific id/numbering strategy depends on the underlying secrets manager of the cloud provider.

## General usage

### Create secrets

Before sensitive values can be stored a secret must be defined.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { secret } from '@nitric/sdk';

// Create a new secret
const apiKey = secret('api-key').for('put', 'access');
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import secret

# Create a new secret
api_key = secret("api-key").allow("accessing")
```

{% /tab %}
{% /tabs %}

### Store secret values

To store or update the latest version of a secret, use the `put()` method on the secret reference.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
const latestVersion = await apiKey.put('a new secret value');

// We can get the version ID of our newly stored value
latestVersion.version;
```

{% /tab %}
{% tab label="Python" %}

```python
latest = api_key.put("a new secret value")

# We can get the version ID of our newly stored value
latest.version
```

{% /tab %}
{% /tabs %}

> Secret versioning is automatic. Every time you `put` a new secret value a new version will be created and set as the `latest` version.

### Access a secret value

Accessing the contents of a secret version can be done by calling the `access()` method. The `latest()` method ensures we always get the latest value of a secret. This is the best option for retrieving credentials or API keys, where the latest is the only valid version.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
// access the details of the latest version of a secret
const latest = await apiKey.latest().access();

// Retrieve the value of the secret as a string
latest.asString();
```

{% /tab %}
{% tab label="Python" %}

```python
# access the details of the latest version of a secret
latest = await api_key.latest().access()

# Retrieve the value of the secret as a string
str(latest)
```

{% /tab %}
{% /tabs %}

### Access a specific version of a secret

If you need a previous version of a secret's value (not latest) you can use the `version()` method to specify the exact version ID. This is useful when you need a version that was used at a particular point in time.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
// access the details of a known version of a secret
const specific = await apiKey.version('version-id').access();

// Note, you can also retrieve the value of the secret as a byte array
specific.asBytes();
```

{% /tab %}
{% tab label="Python" %}

```python
# access the details of a known version of a secret
specific = await api_key.version('version-id').access()

# Note, you can also retrieve the value of the secret as a byte array
bytes(specific)
```

{% /tab %}
{% /tabs %}

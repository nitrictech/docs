# Secrets

## Overview

Nitric Secrets make securely storing, updating and retrieving secret values like database credentials and API keys a breeze.

### Secrets

Secrets are values stored in an encrypted Secrets Manager, usually containing sensitive data such as the username and password used to access a database. Since credentials and keys tend to change over time, Nitric Secrets act as a virtual storage location for these values with version control baked in.

### Versions

Each secret will contain at least contain a "latest" version, along with any historical versions of that secret's value. This ensures values, such as encryption keys, can be rotated without losing access to the key used with previously encrypted data.

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

The guide below highlights the features of Nitric Storage, you can use it in your own project or take a look at [one of our examples](#)

### Create a bucket

Creating buckets with the Nitric SDK is just one line when using our `config-as-code` functionality to define resources. In the example below we declare that our function depends on a bucket named "profiles" and needs access to be able to `read`, `write` and `delete` files in the bucket:

```javascript
import { bucket } from '@nitric/sdk'

const profiles = bucket('profiles').for('reading', 'writing', 'deleting')
```

### Writing files

You can write files to a bucket using pre-signed URLs, which you can read about below, or directly from your application code.

```javascript
// Example byte array
const profileImg = new Uint8Array()

await profiles.file('users/drake-mallard/profile.png').write(profileImg)
```

### Reading files

Just like with writing, you can read files with pre-signed URLs, or directly in your code.

```javascript
const bytes = await profiles.file('users/bruce-wayne/profile.png').read()
```

### Deleting files

To delete a file that has been previously written, you use the `delete()` method on the file reference.

```javascript
await profiles.file('users/cain-marko/profile.png').delete()
```

### Accessing files

Currently, Nitric Storage Buckets cannot be public, however, you can generate short-lived download or upload URLs with the pre-signed URLs feature. These URLs are useful when you want to provide one of your users with a temporary link to download or upload a file.

```javascript
import { storage } from '@nitric/sdk';

const signedUrl = await profiles.file('profile.png').signUrl(storage.FileMode.Read)
```

## What's next?

TODO: ================= update link below with reference page =================

- Learn more about storage, buckets and files in our reference docs.
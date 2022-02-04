# Storage

## Overview

Nitric Storage simplifies securing storing and retrieving large files.

### Buckets

Buckets are unique, isolated repositories for files. You can think of a bucket like a hard drive partition in a traditional system. You'll want to create new buckets when the files are being stored for different purposes or with varied access control requirements. For example, you might create an "uploads" bucket for accepting file uploads from your users, or a "profiles" bucket for storing user profile images.

### Files

Files are any sort of binary files, common examples include documents (.doc, .pdf), images (.gif, .jpg) or videos (.mp4, .mkv). Using buckets to store these larger files, instead of in other data persistance systems like SQL or document databases, can improve performance.

### Folders

Most cloud object/blob storage services act like key/value pairs where the key is the filename and the value is the file data. Including paths in filenames allows you organize files within bucket, just like folders would be used in local storage. For example the a file named `profile.png` could be stored in the folder `images/default` by providing the full filepath when writing or reading the file e.g. `image/default/profile.png`.

## The basics

TODO: ================= update link below with example =================

The guide below highlights the features of Nitric Storage, you can use it in your own project or take a look at [one of our examples](#)

### Create a bucket

Creating buckets with the Nitric SDK is just one line when using our `config-as-code` functionality to define resources. In the example below we declare that our function depends on a bucket named "profiles" and needs access to be able to `read`, `write` and `delete` files in the bucket:

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('reading', 'writing', 'deleting');
```

### Writing files

You can write files to a bucket using pre-signed URLs, which you can read about below, or directly from your application code.

```javascript
// Example byte array
const profileImg = new Uint8Array();

await profiles.file('users/drake-mallard/profile.png').write(profileImg);
```

### Reading files

Just like with writing, you can read files with pre-signed URLs, or directly in your code.

```javascript
const bytes = await profiles.file('users/bruce-wayne/profile.png').read();
```

### Deleting files

To delete a file that has been previously written, you use the `delete()` method on the file reference.

```javascript
await profiles.file('users/cain-marko/profile.png').delete();
```

### Accessing files

Currently, Nitric Storage Buckets cannot be public, however, you can generate short-lived download or upload URLs with the pre-signed URLs feature. These URLs are useful when you want to provide one of your users with a temporary link to download or upload a file.

```javascript
import { storage } from '@nitric/sdk';

const signedUrl = await profiles
  .file('profile.png')
  .signUrl(storage.FileMode.Read);
```

## What's next?

TODO: ================= update link below with reference page =================

- Learn more about storage, buckets and files in our reference docs.

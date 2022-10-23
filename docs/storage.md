---
title: Storage
description: Working with files and storage in Nitric
---

Nitric Storage simplifies securely storing and retrieving large files.

## Files

Files are any sort of binary files, common examples include documents (.doc, .pdf), images (.gif, .jpg) or videos (.mp4, .mkv). Using buckets to store these larger files, instead of in other data persistence systems, like SQL or document databases, can improve performance.

## Buckets

Buckets are isolated repositories for files. You can think of a bucket like a hard drive partition in a traditional system. You'll want to create new buckets when files are being stored for different purposes or with varied access control requirements. For example, you might create an "uploads" bucket for accepting file uploads from your users, or a "profiles" bucket for storing user profile images.

## Folders

Most cloud object/blob storage services act like key value systems where the keys are filenames and values are file data. Including paths in filenames allows you to organize files within a bucket, just like folders would be used in local storage. For example, a file named `profile.png` could be stored in the folder `images/default` by providing the full filepath when writing or reading the file e.g. `image/default/profile.png`.

# The basics

The guide below highlights the features of Nitric Storage.

## Create a bucket

Creating buckets with the Nitric SDK is just one line of code. In the example below we declare a bucket named `profiles`, and specify that our function needs access to `read`, `write` and `delete` files in the bucket:

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('reading', 'writing', 'deleting');
```

## Listing Files

To list files in a bucket, use the `files()` method on the bucket reference. This returns a list of `File` references so the below methods can be called on the returned references.

```javascript
const files = await profiles.files();
```

## Writing files

You can write files to a bucket directly from your application code or by using [pre-signed URLs](#accessing-files).

```javascript
// Example byte array
const profileImg = new Uint8Array();

await profiles.file('users/drake-mallard/profile.png').write(profileImg);
```

## Reading files

Just like with writing, you can read files directly in your code, or using [pre-signed URLs](#accessing-files).

```javascript
const bytes = await profiles.file('users/bruce-wayne/profile.png').read();
```

## Deleting files

To delete an existing file, use the `delete()` method on the file reference.

```javascript
await profiles.file('users/cain-marko/profile.png').delete();
```

## Accessing files

You can generate short-lived download or upload URLs with the pre-signed URLs feature. These URLs are useful when you want to provide temporary links to download or upload a file.

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('reading', 'writing');

// Get pre-signed URLs for downloading or uploading
const downloadUrl = await profiles.file('profile.png').getDownloadUrl();
const uploadUrl = await profiles.file('profile.png').getUploadUrl();
```

# What's next?

- Learn more about storage in our [reference docs](/docs/reference/storage/bucket).

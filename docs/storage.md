---
title: Storage
description: Working with files and storage in Nitric
---

Nitric provides storage support for securely storing and retrieving large files in the cloud.

## Definitions

### Files

Files refer to binary files, such as documents (.doc, .pdf), images (.gif, .jpg), or videos (.mp4, .mkv). It is common for these files to be referred to as BLOBs, which stands for Binary Large Objects.Storing these types of files in buckets, as opposed to other data persistence systems like SQL or document databases, can improve performance.

### Buckets

Buckets serve as isolated repositories for files. To illustrate, think of a bucket as a partition on a traditional hard drive system. Creating separate buckets becomes necessary when storing files for distinct purposes or with varying access control requirements. For instance, you might establish an "uploads" bucket to handle user file uploads or a "profiles" bucket specifically designed for storing user profile images.

### Folders

Most cloud object/blob storage services function as key-value systems, where the keys represent filenames and the values contain the actual file data. By incorporating paths within filenames, you can organize files within a bucket, similar to how folders are utilized in local storage. For example, if you have a file named `profile.png`, you can store it in the folder `images/default` by specifying the complete file path when reading or writing the file, e.g., `images/default/profile.png`.

## Create Buckets

Nitric enables you to define named buckets with customizable permissions. When defining a bucket, you can specify permissions for reading, writing, and deleting files within the bucket. In the example below, we declare a bucket named `profiles` and indicate that our function requires access to read, write, and delete files within that bucket:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('reading', 'writing', 'deleting');
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket('profiles').allow('reading', 'writing', 'deleting')
```

{% /tab %}
{% /tabs %}

## File references

You can obtain a reference to a `File` within a bucket by either using its name or by listing all the files present in the bucket. Once you have a reference to a file, you can perform various operations on it, including retrieving its contents, writing new content to it, or deleting it.

To get a reference to a specific file in a bucket, use the `file()` method on the bucket reference. This returns a `File` reference so other operations can be performed on the file.

> No network calls are made when you get a file reference using `file()`

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('reading');

const profilePicture = profiles.file('users/bruce-wayne/profile.png');
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket("profiles").allow("reading")

profile_picture = profiles.file("users/bruce-wayne/profile.png")
```

{% /tab %}
{% /tabs %}

To list all files in a bucket, use the `files()` method on the bucket reference. The function must have `read` permissions to list the files within a bucket.

> A network call is made when you list files using `files()`

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```typescript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').allow('reading');

const files = await profiles.files();

files.forEach((file) => {
  console.log(file.name);
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket("profiles").allow("reading")

files = await profiles.files()

for file in files:
	print(file.name)
```

{% /tab %}
{% /tabs %}

## Read files

You can read the contents of a file directly from your application code using the `read()` method on a file reference. The contents of the file are returned as a byte array.

> If a file with that name does not exist when `read()` is called a `NOT_FOUND` error will be thrown.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('reading');

const image = await profiles.file('users/bruce-wayne/profile.png').read();
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket("profiles").allow("reading")

image = await profile.file("users/bruce-wayne/profile.png").read()
```

{% /tab %}
{% /tabs %}

## Write files

You can write the contents of a file directly from your application code using the `write()` method on a file reference. If the file doesn't exist then it will create a new one, if it does exist then it will overwrite the previous data.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('writing');

const profileImage = 'image data';

await profiles.file('users/bruce-wayne/profile.png').write(profileImage);
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket("profiles").allow("writing")

profileImage = b"image data"

await profile.file("users/bruce-wayne/profile.png").write(profileImage)
```

{% /tab %}
{% /tabs %}

## Delete files

You can delete a file directly from your application code using the `delete()` method on a file reference.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('deleting');

await profiles.file('users/bruce-wayne/profile.png').delete();
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket("profiles").allow("deleting")

await profile.file("users/bruce-wayne/profile.png").delete()
```

{% /tab %}
{% /tabs %}

## Signed URLs

The signed URL feature enables you to generate temporary URLs for downloading or uploading files. These URLs include authentication information in the query string, allowing users without credentials to access the file. They are particularly useful when you need to share temporary links for file downloads or uploads.

You have the option to customize the expiration time of the URL by specifying a duration in seconds, ranging from 0 to 604,800 (a week). To obtain a download URL, the function needs to have `read` permissions on the bucket. For an upload URL, the function needs to have `write` permissions on the bucket.

> It's important to note that anyone with the signed URL can access or modify the file. Hence, it's crucial to exercise caution and only share the URL with trusted users.

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles').for('reading', 'writing');

// Get pre-signed URLs for downloading or uploading

const downloadUrl = await profiles.file('profile.png').getDownloadUrl({
  expiry: 3600, // Defaults to 600 (10 minutes)
});

const uploadUrl = await profiles.file('profile.png').getUploadUrl({
  expiry: 3600, // Defaults to 600 (10 minutes)
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket('profiles').allow('reading', 'writing')

download_url = await profiles.file('profile.png').download_url()

upload_url = await profiles.file('profile.png').upload_url()
```

{% /tab %}
{% /tabs %}

## Bucket Notifications

Bucket notifications are functions that subscribe to changes in your bucket's files. You can configure these notifications to trigger specifically when a file is written or deleted. Additionally, you can apply filters based on file prefixes to specify which files should trigger a notification. When the function is triggered, it receives event data that includes details about the changed file, such as whether it was written or deleted, and the file's name.

To illustrate, suppose we want to trigger a function whenever a new profile image is uploaded to a bucket. In this case, we can use the following code snippet:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles');

// Filter for 'write' events for files starting with '/users/images'
profiles.on('write', '/users/images', (ctx) => {
  console.log(`new profile image for ${ctx.req.key} was created`);
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket("profiles")

# Filter for 'write' events for files starting with '/users/images'
@profiles.on("write", "/users/images")
def image_written(ctx):
	print(f"new profile image for {ctx.req.key} was written")
```

{% /tab %}
{% /tabs %}

If we instead wanted to trigger the function whenever any file was deleted from the bucket, we would use the following snippet:

{% tabs query="lang" %}
{% tab label="JavaScript" %}

```javascript
import { bucket } from '@nitric/sdk';

const profiles = bucket('profiles');

// Filter for 'delete' events for any file
profiles.on('delete', '*', (ctx) => {
  console.log(`${ctx.req.key} was deleted`);
});
```

{% /tab %}
{% tab label="Python" %}

```python
from nitric.resources import bucket

profiles = bucket("profiles")

# Filter for 'delete' events for any file
@profiles.on("delete", "*")
def file_deleted(ctx):
	print(f"{ctx.req.key} was deleted")
```

{% /tab %}
{% /tabs %}

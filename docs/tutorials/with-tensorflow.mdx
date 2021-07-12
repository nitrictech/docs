## Introduction
TensorFlow is an open source platform for machine learning. It has a flexible libary of tools and an active community which enables developers of ML to easily build and deploy ML applications. Combining this power with the Nitric framework, we can build a tensorflow image classifier efficiently, that can be distributed to any cloud.

For this tutorial you will require Node. To check if you have Node installed, run this command in your terminal:

```bash
node -v
```

If Node is installed, it should produce a version number like `v14.16.0`. You will also require python and pip.

```bash
python -m pip --version
```

If python and pip are installed, it will produce 'pip 21.1.3 from /where/pip/is/installed'

It is also assumed that you have already installed the Nitric CLI. If not visit the [installation instructions](../installation.mdx).

## Project set up
For this project we will make a simple website where a dataset url can be inputted to train an image classifier remotely using the Nitric framework and tensorflow.

Using the Nitric CLI we start by creating the project.

```bash
nitric make:project nitric-image-classifier
```

Next we'll be asked if we want an initial service in the project and what template the service will use. We will use the python template to create a tensorflow image-classifier.

```bash
? Include an example service? (Use arrow keys)
  function/nodets12
  function/nodejs12
❯ function/python37
  function/java11
  function/golang15
  function/php8
  server/nextjs-typescript
```

Next, we'll be asked for a name for the service. We will name it `train-model`.

```bash
? Name for the example service? train-model
✔ Making Project nitric-image-classifier
✔ Making Service train-model
```

The project structure should now look like this:

```bash
nitric-image-classifier
|-- .nitric
|   |-- templates
|       |-- function
|           |-- python37
|               |-- template
|                   |-- index.py
|                   |-- requirements.txt
|               |-- .gitignore
|               |-- Dockerfile
|               |-- Dockerfile.dockerignore
|               |-- README.md
|-- train-model
|   |-- index.py
|   |-- requirements.txt
|-- nitric.yaml
```

### Understanding the structure
For this project we will need a site and 3 services: one responsible for requesting training, one responsible for training, and one responsible for updating the site status.

We will build the site in a later step, but for now build the services using the `nitric make:service` command. We have already built one in the make project step, so only the training requester and status updater are required.

```bash
nitric make:service
? Service template function/nodets12
? Service name training-requester
✔ Making Service training-requester
```
```bash
nitric make:service
? Service template function/nodets12
? Service name status-updater
✔ Making Service status-updater
```

The site starts the communication, by calling the training requester to make a model with the specified dataset. The requester will return an ID, and it is the sites responsiblity to maintain that ID for when accessing the model and its training status. The flow of communication looks like so:

<img
  height="600"
  src="../../assets/img/tensorflow-sequence.svg"
  alt="Tensorflow Sequence"
/>

As seen in the sequence diagram, the project will also require a bucket, KV store and queue. It will also need to publish an event between the `training-requester` and the `train-model` services. These are simply added in the `nitric.yaml` file, as seen below:

```yaml
name: nitric-image-classification
services:
  train-model:
    path: train-model
    runtime: function/python37
    triggers:
      topics:
        - new-model
  training-requester:
    path: training-requester
    runtime: function/nodets12
  status-updater:
    path: status-updater
    runtime: function/nodets12
topics:
  new-model: {}
buckets:
  datasets: {}
queues:
  training-queue: {}
```

The above changes sets up a bucket, topic, and queue. The service `train-model` will also be updated to be subscribed to the `new-model` topic. This means that when the `training-requester` fires an event, the `train-model` service will be listening waiting for that topic to be updated.

## Building the Services
### Building the Model Training
For this service we set up a simple image classification model using tensorflow. 

Throughout the training process there will be status logs pushed to the KV store. When these are pushed, they overwrite the previous logs, therefore, whenever the browser polls for a status with the ID, they will get the most recent log. 

```python
#index.py
import tensorflow as tf
import pathlib
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
from nitric.faas import start, Trigger
from nitric.api import Storage, KeyValueClient, Queueing

async def trainNewModel(id, dataset_url):
    kvClient = KeyValueClient('training-updates')

    file_name = dataset_url.split('/')[-1].split('.')[0]
    await kvClient.put(id, { "update": "Loading Images..." })
    data_dir = tf.keras.utils.get_file(fname=file_name, origin=dataset_url, untar=True, cache_dir="nitric", cache_subdir="buckets/datasets")
    await kvClient.put(id, { "update": "Images Loaded! Starting image preprocessing..." })
    data_dir = pathlib.Path(data_dir)

    batch_size = 32
    img_height = 180
    img_width = 180

    train_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir,
        validation_split=0.2,
        subset="training",
        seed=123,
        image_size=(img_height, img_width),
        batch_size=batch_size)

    val_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir,
        validation_split=0.2,
        subset="validation",
        seed=123,
        image_size=(img_height, img_width),
        batch_size=batch_size)

    class_names = train_ds.class_names
    await kvClient.put(id, { "update": "Images processed! Classes found: %s. Building model..."%class_names })

    AUTOTUNE = tf.data.AUTOTUNE

    train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
    val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

    num_classes = len(class_names)

    model = Sequential([
        layers.experimental.preprocessing.Rescaling(1./255, input_shape=(img_height, img_width, 3)),
        layers.Conv2D(16, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),
        layers.Conv2D(32, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),
        layers.Conv2D(64, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),
        layers.Dropout(0.2),
        layers.Flatten(),
        layers.Dense(128, activation='relu'),
        layers.Dense(num_classes)
    ])

    await kvClient.put(id, { "update": "Model Built! Compiling..." })
    model.compile(optimizer='adam',
                    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                    metrics=['accuracy'])

    await kvClient.put(id, { "update": "Model Compiled! Training model..." })
    epochs = 1
    model.fit(
        train_ds,
        validation_data=val_ds,
        epochs=epochs
    )
    await kvClient.put(id, { "update": "Training Complete! Saving model..." })
    model.save('trained_model.h5')
    saved_model = open('trained_model.h5', 'rb')
    storage_client = Storage()
    model_bytes = saved_model.read()
    await storage_client.bucket('datasets').file(id + '-model.h5').write(model_bytes)
    await kvClient.put(id, { "update": "Model Saved!" })
```
At the end of this function call, the final saved model is being written to the bucket. This model is saved as a HDF5 file and can then be used later on to make image predictions.

We now need to write the FaaS handler to go along with this service. This service is set up with the intention that is triggered by the `new-model` topic. The `new-model` topic will be triggered by the training requester, which also pushes a new task onto the queue. Thus, when the train-model service is triggered, there will always be a task it can use. This design has fault tolerance, as if the service fails and doesn't complete the task, a new service can still complete the task.

```python
# Called on new-model topic being triggered
async def handler(trigger: Trigger):
    # Get Event off of the queue
    queueClient = Queueing()
    for task in await queueClient.queue("training-queue").receive():
        id = task.id

        # Get training information from bucket
        storageClient = Storage()
        dataset_url = await storageClient.bucket('datasets').file(id + "-url").read()

        kvClient = KeyValueClient("training-updates")
        await kvClient.put(id, { "update": "Training Starting..." })
        await trainNewModel(id, dataset_url.decode('utf-8')) #takes the name of a dataset
        await kvClient.put(id, { "update": "Model trained!" })

        await task.complete()
    return "Model trained"

if __name__ == "__main__":
    start(handler)
```
### Building the Training Requester
The training requester takes in a dataset URL and returns a unique ID. It uses this ID as an identifier for the services to access the correct storage and the correct status logs.

On a request to this service it will write the dataset URL to a bucket with the ID as a prefix. It will then write a status update to the KV store with the ID as the key. It then pushes a new task to the `training-queue` and finally fires an event to the `train-model` service to poll the queue.

```ts
//index.ts
import { faas, StorageClient, KeyValueClient, QueueClient, EventClient } from "@nitric/sdk";

interface TrainingRequest {
  dataset_name: string;
  dataset_url: string; 
}

// Start your function here
faas.start(async (request: faas.NitricTrigger<TrainingRequest>): Promise<string> => {
  const { dataset_url } = request.dataAsObject();
  const id = uuid();

  //Write information to bucket
  const storage_client = new StorageClient();
  await storage_client.write('datasets', `${id}-url`, Buffer.from(dataset_url));

  //Write to KV Store
  const kv_client = new KeyValueClient('training-updates');
  await kv_client.put(id, {
    update: 'Training Pending...'
  });

  //Send task to queue
  const queue_client = new QueueClient();
  await queue_client.send('training-queue', { id: id });

  const event_client = new EventClient();
  event_client.publish("new-model", {
    payload: {
      id: id,
      worker_index: 0,
      value: "Train new model please :)"
    }
  });

  return id;
});

//Get uuid utility function
function uuid(): string {
  function func(){
    return ( ( ( 1+Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
  }
  return (func() + func() + "-" + func() + "-3" + func().substr(0,2) + "-" + func() + "-" + func() + func() + func()).toLowerCase();
}
```

### Building the Status Updater
Finally, we will write the status updater. This service takes an ID when it receives a request and will return the latest status from the KV store. 

```ts
//index.ts
import { faas, KeyValueClient } from "@nitric/sdk";

interface StatusRequest {
  id: string;
}

//Returns the latest status
faas.start(async (request: faas.NitricTrigger<StatusRequest>): Promise<string> => {
  const { id } = request.dataAsObject();
  const kv_client = new KeyValueClient('training-updates');
  const document = await kv_client.get(id);
  return JSON.stringify(document);
});
```
## Building the site
The site will be a simple form that accepts a dataset url and a button to submit the training request. It will then have a field where the status is updated. We will create a folder called `training-site` with an `index.html` and an `index.js`.

One optional step is to add a CSS file `index.css` to make our app look beautiful. You can find the full contents of this file <a href="https://raw.githubusercontent.com/nitrictech/docs/main/assets/tutorial-styles.css" target="_blank" rel="noopener noreferrer">here.</a>

Once this has been added, it needs to be registered as part of the Nitric stack. This is simply done by going to the `nitric.yaml` file and adding a site.

```yaml
sites:
  predictor:
    path: training-site
    assetPath: ./
```

We will then start writing our files.

```html
<!--index.html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ML Models</title>
    <link rel="stylesheet" type="text/css" href="index.css" media="screen" />
  </head>
  <body>
    <div class="center">
      <div class="container grid">
        <h1>Nitric + Tensorflow</h1>
        <div class="field">
          <label for="dataset_url">Dataset URL:</label>
          <input
            id="dataset_url"
            type="text"
            value="https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz"
          />
        </div>
        <button class="primary" id="train">
          Train Model <div class="loader">🤖</div>
        </button>
        <div style="background-color: #fcefde; height: 150px; overflow: scroll; overflow-x: hidden;" id="status-section">
          <p style="font-size: 1.1rem;" id="status-update"> </p>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```
The `index.js` file will handle making a request, and then awaiting status updates. 

First we will write a function that is called when a request is made for a model to be trained. This function will make a POST request to the `training-requester` service with the dataset URL the user has provided, and recieves a response containing an ID. This ID is then used when polling for the current status of that model.
```js
//index.js
async function trainModel() {
  var datasetUrl = document.getElementById('dataset_url').value;
  //Make sure the inputs aren't null or empty
  if (!datasetUrl ){
    alert("Dataset URL must be provided");
    return;
  }
  //Make call to train
  try {
    const rawResponse = await fetch('/train/', {
      method: "POST",
      body: JSON.stringify({
        dataset_url: datasetUrl
      })
    });
    awaitStatus(await rawResponse.text());
  } catch (error) {
    alert(error.message)
  }
}
document.getElementById('train').addEventListener("click", trainModel)
```

The second function `awaitStatus` is in a loop, that polls that status update every 500ms. This can be lowered for more frequent polling, but increases the network traffic. The function makes a HTTP request, with the id, to the status updater. It responds with the status update, and then appends this to the status section of the site if this is a new update.

```js
//index.js
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

async function awaitStatus(id){
  const statusForm = document.getElementById('status-section')
  while(true){
    await waitFor(500);
    //Makes a request to the status updater
    const statusUpdate = await fetch('/status/', {
      method: "POST",
      body: JSON.stringify({
        id: id,
      })
    });
    const statusText = await statusUpdate.text();
    const status = document.getElementById('status-update')
    //Checks if this new status is not the same as the previous
    if (status.innerHTML !== statusText) {
      status.id = ""
      //Creates a new element, and appends it to the form
      const newStatus = document.createElement('p')
      newStatus.innerHTML = statusText;
      newStatus.id = "status-update";
      newStatus.className = "status-message";
      statusForm.appendChild(newStatus)
    }
    //When the model is trained, stops polling the status updater.
    if (statusText === "Model Trained!"){
      break;
    }
  }
}
```
### Setting up the Entrypoints
For each of our services, we want an entrypoint that is relative to the site. This functionality is added in the `nitric.yaml` file by using the entrypoints key. We don't need an entrypoint for the `train-model` service as that is triggered via its topic subscription.
```yaml
entrypoints:
  main:
    paths:
      /:
        target: training-site
        type: site
      /train/:
        target: training-requester
        type: service
      /status/:
        target: status-updater
        type: service
```

### Launch!

Now that we have all the logic in place, we can run our app:

```bash
nitric run
```

And then click and open the `main` entrypoint localhost url and you should see the completed app:

```bash
✔ Starting Entrypoints
 Service            Port  
 ────────────────── ───── 
 status-updater     49152 
 train-model        49153 
 training-requester 49154 
 Entrypoint Url                    
 ────────── ────────────────────── 
 main       http://localhost:63562 
```

<img
  height="600"
  src="../../assets/img/tensorflow-tutorial.jpg"
  alt="Greeter React App"
/>

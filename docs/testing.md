---
title: Testing
description: How to test Nitric applications
---

This section goes over different techniques for testing Nitric applications locally, and in the cloud.

We attempt to make the local run of nitric as similar as possible to the cloud environments, so these tests should act the same locally as they do in the cloud. However, running them on the cloud may incur costs.

## Unit testing

A unit test is testing small sections of logically isolated code, usually a function, subprogram, method or property. Unit tests provide confidence in the code that has been written. This confidence gives you the ability to create new features, without fear of breaking older code.

It is important that unit tests are fast, replicable, and isolated. It shouldn't touch or talk to a database, network, or file system, and should be able to run parallel to any other test.

### Writing the API

We will write a small API to do some testing on.

First, define the resources:

```ts
// resources/apis.ts
import { api } from '@nitric/sdk';

export const helloApi = api('main');
```

```ts
// resources/buckets.ts
import { bucket } from '@nitric/sdk';

export const imageBucket = bucket('images');
```

The trick for unit testing is that we want to define our functions separately from the routes, as testing anonymous functions in the route callback is difficult. Thus, we'll split them like this:

```ts
// functions/hello.ts
import { imageBucket } from '../resources/buckets';
import { helloApi } from '../resources/apis';

export const imageWriter = imageBucket.for('writing');

export const handleHello = async (ctx: any) => {
  const { name } = ctx.req.params;

  ctx.res.body = `Hello ${name}`;

  return ctx;
};

export const handleAddImage = async (ctx: any) => {
  const { name } = ctx.req.params;

  await imageWriter.file(name).write(Buffer.from(name));

  ctx.res.body = `Successfully added '${name}' image to bucket!`;

  return ctx;
};

helloApi.get('/:name', handleHello);
helloApi.post('/:name', handleAddImage);
```

### Writing the Tests

#### Asserting

Put the unit tests in a test directory, and name it `unit.test.ts`. The logic being split into separate functions makes it very easy to test our API.

We are first testing that if the function is passed a context with a set name parameter, it should return the same context, but with a body added to the response. The function handleHello is asynchronous, therefore we await it, expecting it to resolve to the expected value.

```ts
import { handleHello } from '../functions/hello';

describe('Testing Hello Function', () => {
  const ctx = { req: { params: { name: 'Test' } }, res: { body: '' } };

  describe('Given we want a greeting', () => {
    test('responds with Hello Test', async () => {
      await expect(handleHello(ctx)).resolves.toEqual({
        ...ctx,
        res: {
          body: 'Hello Test',
        },
      });
    });
  });
});
```

#### Mocking

Our next function handleAddImage becomes more complex because it uses a bucket. This will need to be mocked as we want our unit tests to be fast, replicable, and isolated. By mocking a production system, we have an isolated environment that won't be affected by changes in the system. The trade-off is that the unit tests won't catch system-level failures. However, this is covered by [integration tests](#integration-testing).

We'll go over it section by section, but here is the full example of these tests:

```typescript
  ...

  describe('Given we want to add a new image to a bucket', () => {

    let writerSpy;
    let bucketSpy;
    let handleAddImage;
    beforeAll(async () => {
      writerSpy = jest.spyOn(File.prototype, 'write');
      bucketSpy = jest.spyOn(BucketResource.prototype, 'for');

      // Doing dynamic imports to mock the BucketResource.for
      const helloModule = await import('../functions/hello');
      handleAddImage = helloModule.handleAddImage;
    })

    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeEach(() => {
      jest.clearAllMocks();
    })

    test('adds a new image to the bucket', async () => {
      writerSpy.mockResolvedValue();

      await expect(handleAddImage(ctx))
        .resolves.toEqual({
          ...ctx,
          res: {
            body: "Successfully added 'Test' to user collection"
          }
        })

      expect(writerSpy).toBeCalledTimes(1)
    });

    test('throws an error', async () => {
      writerSpy.mockRejectedValue(new Error('Mock error'))

      await expect(handleAddImage(ctx)).rejects.toEqual(Error('Mock error'))

      expect(writerSpy).toBeCalledTimes(1)
    });
  });
```

Let's start by looking at the mocks. These are done in the beforeAll function, which means it happens before all the tests are run.

The functions to create a bucket 'for' and the call to write to a bucket 'write' will make gRPC calls on the backend. This means that they need to be mocked, as there is nothing for it to call to, and thus will result in an UNAVAILABLE error. We mock these using jest's spyOn functions on the object prototype.

This works fine for mocking the `write` method as it's within the `handleAddImage` function, but the `for` method is called when the module is imported. Therefore, we add a dynamic import after `for` is mocked.

```ts
import { File, BucketResouce } from '@nitric/sdk';

...

let writerSpy;
let bucketSpy;
let handleAddImage;
beforeAll(async () => {
  writerSpy = jest.spyOn(File.prototype, 'write');
  bucketSpy = jest.spyOn(BucketResource.prototype, 'for');

  // Doing dynamic imports to include the BucketResource.for method mock
  const helloModule = await import('../functions/hello');
  handleAddImage = helloModule.handleAddImage;
})
```

We also add `afterAll` and `beforeEach` functions to reset the mocks.

```ts
afterAll(() => {
  jest.resetAllMocks();
});

beforeEach(() => {
  jest.clearAllMocks();
});
```

Now that we have the mocks, we can use them for the tests. The first test is testing that the function will succeed. On a success, the promise will both resolve and have a success message in the body of the context's response.

Update the mock so that it resolves, and check that the `write` function was only called once. The mock can change in the test, as it will be reset before the next test is run.

```ts
test('adds a new image to the bucket', async () => {
  writerSpy.mockResolvedValue();

  await expect(handleAddImage(ctx)).resolves.toEqual({
    ...ctx,
    res: {
      body: "Successfully added 'Test' to user collection",
    },
  });

  expect(writerSpy).toBeCalledTimes(1);
});
```

The next test will instead test a write failure. The failure may be caused by any number of reasons, and therefore we should make sure our function is fit to handle them when they occur.

Change the mock this time so that it rejects with a new error. Still check that the write was called once.

```ts
test('throws an error', async () => {
  writerSpy.mockRejectedValue(new Error('Mock error'));

  await expect(handleAddImage(ctx)).rejects.toEqual(Error('Mock error'));

  expect(writerSpy).toBeCalledTimes(1);
});
```

### Running the tests

The tests can now be run. Add to your `package.json` a test script.

```json
"scripts": {
  "test": "jest"
}
```

You can then run the tests locally with:

```bash
npm run test
```

The output should be something like this:

```
  Testing Hello Function
    Given we want a greeting
      ✓ responds with Hello Test (4 ms)
    Given we want to add a new image to a bucket
      ✓ adds a new image to the bucket (5 ms)
      ✓ throws an error (3 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        4.292 s, estimated 7 s
Ran all test suites.
✨  Done in 6.18s.
```

## Integration Testing

Integration tests are important for your systems as they catch system-level issues that unit tests miss, and are faster than end-to-end tests.

When writing these tests we want to make sure that these tests are reliable, able to be reproduced and can isolate our system failures. This is why we want to use a testing framework like [jest](https://jestjs.io/), and use an HTTP testing library like [supertest](https://github.com/visionmedia/supertest).

```
npm install --save-dev jest supertest @types/jest @types/supertest
```

### Writing the API

We will write a small API to do some testing on.

First, define the resources:

```ts
// resources/apis.ts
import { api } from '@nitric/sdk';

export const helloApi = api('main');
```

```ts
// resources/buckets.ts
import { bucket } from '@nitric/sdk';

export const imageBucket = bucket('images');
```

Then define our routes and our functions:

```ts
// functions/hello.ts
import { imageBucket } from '../resources/buckets';
import { helloApi } from '../resources/apis';

export const imageWriter = imageBucket.for('writing');

export const handleHello = async (ctx: any) => {
  const { name } = ctx.req.params;

  ctx.res.body = `Hello ${name}`;

  return ctx;
};

export const handleAddImage = async (ctx: any) => {
  const { name } = ctx.req.params;

  await imageWriter.file(name).write(Buffer.from(name));

  ctx.res.body = `Successfully added '${name}' image to bucket!`;

  return ctx;
};

helloApi.get('/:name', handleHello);
helloApi.post('/:name', handleAddImage);
```

### Writing the Tests

We will put the integration test in a test directory, and name it `integration.test.ts`. For the test, we want to create an agent using supertest. We'll point the agent at the URL of our API.

```ts
// tests/integration.test.ts
import supertest from 'supertest';

describe('Testing Hello Api', () => {
  const api = supertest('http://localhost:4001');
});
```

We can then add some tests to hit this API. We'll start with testing the `GET /:name` route.

This request has the name parameter set to 'test'. This means we expect the response to be 'Hello test' and the status code to be 200. We get the done function as a parameter from the test callback, and call that when the test is resolved or encounters errors. This is to stop timeouts on the test, as we are testing an async operation.

```ts
// tests/integration.test.ts
import supertest from 'supertest';
import assert from 'assert';

describe('Testing Hello Api', () => {
  const api = supertest('http://localhost:4001');

  describe('Given a request to GET /:name', () => {
    test('responds with Hello test', (done) => {
      api
        .get('/test')
        .expect(200)
        .then((res) => {
          assert.equal(res.text, 'Hello test');
          done();
        })
        .catch((err) => done(err));
    });
  });
});
```

We can add another test case for hitting the `POST /:name` route. This will need to test whether the response from the API resolves correctly, as well as whether the image bucket was updated. It makes a post request to our route and then checks the response just like the last one. Additionally, this test reads from the bucket to verify that the correct content was written.

> Make sure you remove the call to done from the assertion in the api route. Otherwise, the bucket test will not be run.

```ts
// tests/integration.test.ts
import supertest from 'supertest';
import assert from 'assert';
import { imageBucket } from '../resources/buckets';

describe('Testing Hello Api', () => {
  const api = supertest('http://localhost:4001')

  ...

  describe('Given a request to POST /:name', () => {
    test('adds a new image to the bucket', (done) => {
      api
        .post('/test')
        .expect(200)
        .then(res => {
          assert.equal(res.text, "Successfully added 'test' image to bucket!")
        })
        .catch(err => done(err))

      imageBucket
        .for('reading')
        .file('name')
        .read()
        .then(val => {
          assert.equal(val.toString(), 'test')
          done();
        })
        .catch((err) => done(err));
    })
  });
});
```

### Running the tests

There are two options for running our tests:

1. We run them locally
2. We run them against a deployed API

#### Local Tests

For a local run, we need to first run the local API, then run the tests. Add to your `package.json` a test script.

```json
"scripts": {
  "test": "jest"
}
```

We can then start the API with `nitric start` and then run your function code.

And then in a separate terminal, run the tests:

```
npm run test
```

This will produce the output:

```
  Testing Hello Api
    Given a request to GET /:name
      ✓ responds with Hello test (4 ms)
    Given a request to POST /:name
      ✓ adds a new image to the bucket (5 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.292 s, estimated 5 s
Ran all test suites.
✨  Done in 5.18s.
```

#### Deployed Tests

We attempt to make the local run of nitric as similar as possible to the cloud environments, so these tests should act the same locally as they do on the cloud. However, running them on the cloud may incur costs.

When you have an API deployed to the cloud, most cloud providers have a feature in the console to do endpoint testing. However, the tests are often just checking if the API resolves to a 200 status code. The process we are following here will lead to much more robust testing and a lot more confidence in your cloud application.

Now for testing. The obvious first step before running our tests is to [deploy](./getting-started#deploying-the-app) the resources.

```
nitric up
```

Then, to test against the deployed API, we just want to swap out our supertest agent host from the localhost endpoint to our deployed endpoint. This new endpoint will look something like this:

```ts
// tests/integration.test.ts
const api = request('https://testerapi.us-east-1.amazonaws.com');
```

To invoke our tests we can do `npm run test` locally. This will run the tests against the deployed instance and return your test results.

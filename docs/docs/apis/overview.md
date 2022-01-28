# APIs

## Overview



## Creating a new API

APIs are easy to declare with the nitric SDK

```typescript
import { api } from "@nitric/sdk";


const userApi = api("user");
```


## Full CRUD Example

```typescript
import { api } from "@nitric/sdk";


const userApi = api("user");

// Create a new user
userApi.post("/user", async (ctx) => {

});

// List users
userApi.get("/user", async (ctx) => {

});

// Update an existing user
userApi.patch("/user/:userId", async (ctx) => {
	const { userId } = ctx.req.params;
});

// Get an existing user
userApi.get("/user/:userId", async (ctx) => {
	const { userId } = ctx.req.params;
});

// Delete an existing user
userApi.delete("/user/:userId", async (ctx) => {
	const { userId } = ctx.req.params;
});
```
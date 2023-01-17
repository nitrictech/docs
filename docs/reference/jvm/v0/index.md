---
title: Nitric's JVM SDK
description: Using Nitric with JVM languages
---

This SDK reference provides documentation for the functions and methods in Nitric's JVM library.

The library provides the ability to define and interact with cloud resources, as well as build application logic like functions/handlers.

## Installation

If you used a Nitric starter template for JVM to scaffold your project, then the library will already be included in the dependencies. Using starter templates is the recommended installation option since it ensures the other files and configuration needed are also set up.

However, you can also install the SDK using Jitpack.

### Gradle

```kotlin
// build.gradle.kts

...
repositories {
  maventCentral()
  maven {
    url = uri("https://jitpack.io")
  }
}

dependencies {
  implementation("com.github.nitrictech:jvm-sdk:v0.1.0")
}
...
```

## Source

The source for the SDK is available on [GitHub](https://github.com/nitrictech/jvm-sdk).

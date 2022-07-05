Our Nitric SDKs communicate with the Nitric membrane over gRPC. Using gRPC and protocol buffers provides the Nitric framework with the flexibility of supporting multiple languages, without rewriting the entire framework from scratch.

The following language runtimes are currently supported or are in development:

| Language Runtime                                   | Support        |
| -------------------------------------------------- | -------------- |
| [Node.js](https://github.com/nitrictech/node-sdk)  | Full Support   |
| [Go](https://github.com/nitrictech/go-sdk)         | In Preview     |
| [JVM](https://github.com/nitrictech/jvm-sdk)       | In Preview     |
| [Python](https://github.com/nitrictech/python-sdk) | In Development |

If a language you want isn't listed, feel free to develop it yourself. Nitric is completely [open source](https://github.com/nitrictech) so you can use any of the other SDKs linked above as a reference. If there are any further questions, contact us and let us know what you're looking for.

To start adding support for a language, check out the [protocol definitions](https://github.com/nitrictech/nitric/tree/main/contracts), and look at how to compile the base sdks for your specific language on the [protobuf docs](https://developers.google.com/protocol-buffers).

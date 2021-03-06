# brawlify-api-client-angular

![Version 1.0.1](https://img.shields.io/badge/version-1.0.1-informational) ![License: MIT](https://img.shields.io/badge/license-MIT-green)

Package for an angular client of the Brawlify API

Automatic generation using Swagger, with the tool swagger-codegen-cli.

Disclaimer: This content is not affiliated with, endorsed, sponsored, or specifically approved
by Supercell nor Brawlify and neither Supercell nor Brawlify are responsible for it.
or more information see Supercell's Fan Content Policy:
[supercell.com/en/fan-content-policy/](https://supercell.com/en/fan-content-policy/).

## Installation

```sh
npm install @javgat/brawlify-api-client-angular@1.0.0 --save
```

It's possible that the installation fails due to peer dependencies.

In order to solve this, instead install it with:

```sh
npm install @javgat/brawlify-api-client-angular@1.0.0 --save --legacy-peer-deps
```

## Generation

The file "/swagger.yml" must contain the Swagger 2.0 specifications for the API

The file "/config-codegen.json" must contain the codegen configuration.

The script "/generate_api.sh" generates the contents of "/brawlify-api-client-angular",
updating the source code and json files.

The script "/publish_api.sh" builds the package and uploades it to the npmjs server.

### Requirements

- java
- swagger-codegen-cli
- sh
- jq

#### Java and swagger-codegen-cli

One must have in the root directory the latest 2.x.x stable version for swagger codegen,
with the name 'swagger-codegen-cli.jar'. It can be downloaded from
[github.com/swagger-api/swagger-codegen/tree/v2.4.24#prerequisites]
(https://github.com/swagger-api/swagger-codegen/tree/v2.4.24#prerequisites).

Java jre must be installed in order to execute the swagger-codegen-cli. The default-jre
should work correctly.

#### sh

sh is required in order to execute the *.sh scripts.

#### jq

The command jq [stedolan.github.io/jq/](https://stedolan.github.io/jq/) is needed too, in order
to solve package definition problems caused by using swagger-codegen-cli with a modern angular version.

It will be used so the information in file package_old.json will be preserve into the new package.json
that will be generated, except for the version number.
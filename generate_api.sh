#!/bin/sh
java -jar swagger-codegen-cli.jar generate -i swagger.yml -l typescript-angular -o brawlify-api-client-angular -c config_codegen.json
version_brawlify_json=$(cat brawlify-api-client-angular/package.json | jq .version | tr -d \")
cat brawlify-api-client-angular/package_old.json | jq --arg v "$version_brawlify_json" '(. | .version?) |= $v' > brawlify-api-client-angular/package.json

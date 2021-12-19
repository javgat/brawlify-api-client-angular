#!/bin/sh
cd brawlify-api-client-angular
npm install
npm run build
npm publish ./dist --access=public

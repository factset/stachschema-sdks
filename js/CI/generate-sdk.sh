#!/bin/bash
set -e

BASE_PATH=/js
PACKAGE_PATH=packages/stach

rm -f $BASE_PATH/$PACKAGE_PATH/stach.js
rm -f $BASE_PATH/$PACKAGE_PATH/stach.d.ts

echo Removed old generated code

cd $BASE_PATH
yarn install --inline-builds
node generate.js

echo Produced new generated code

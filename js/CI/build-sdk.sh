#!/bin/bash
set -e

BASE_PATH=/src

cd $BASE_PATH

if [ -d node_modules ]
then
  rm -rf node_modules
fi

yarn install --inline-builds
yarn run build
yarn run test

echo Built package

#!/bin/bash
set -e

SCHEMA_PATH=/schema # Location of Protobuf schema
BASE_PATH=/r # Base location of R generated classes
PACKAGE_PATH=factset.protobuf.stach

rm -f $BASE_PATH/$PACKAGE_PATH/**/*.proto

echo Removed old schema files

mkdir -p $BASE_PATH/$PACKAGE_PATH/inst
cp -R $SCHEMA_PATH $BASE_PATH/$PACKAGE_PATH/inst

echo Copied new schema files
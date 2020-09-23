#!/bin/bash
set -e

SCHEMA_PATH=/schema # Location of Protobuf schema
BASE_PATH=/python/fds.protobuf.stach # Base location of Python generated classes
PACKAGE_PATH=fds/protobuf/stach

rm -f $BASE_PATH/$PACKAGE_PATH/**/*_pb2.py

echo Removed old generated code

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH -iname "*.proto")
protoc --proto_path $SCHEMA_PATH --python_out $BASE_PATH $PROTOFILES

for f in $(find $BASE_PATH/fds -type d -maxdepth 10); do
	cd "$f"
	touch __init__.py
done;

echo Produced new generated code
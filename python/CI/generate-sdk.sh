#!/bin/bash
set -e

SCHEMA_PATH=/schema # Location of Protobuf schema
BASE_PATH_V3=/python/fds.protobuf.stach.v3 # Base location of Python generated classes
BASE_PATH_V2=/python/fds.protobuf.stach.v2 # Base location of Python generated classes
PACKAGE_PATH_V3=v3/fds/protobuf/stach/v3
PACKAGE_PATH_V2=v2/fds/protobuf/stach/v2

# echo Removed old generated code
rm -f $BASE_PATH_V2/$PACKAGE_PATH_V2/**/*_pb2.py
rm -f $BASE_PATH_V3/$PACKAGE_PATH_V3/**/*_pb2.py

mkdir -p "$BASE_PATH_V3"
mkdir -p "$BASE_PATH_V2"

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH_V3 -iname "*.proto")
protoc --proto_path $SCHEMA_PATH/v3 --python_out $BASE_PATH_V3 $PROTOFILES

for f in $(find $BASE_PATH_V3/fds/protobuf/stach/v3 -type d -maxdepth 10); do
	touch "$f/__init__.py"
done;

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH_V2 -iname "*.proto")
protoc --proto_path $SCHEMA_PATH/v2 --python_out $BASE_PATH_V2 $PROTOFILES

for f in $(find $BASE_PATH_V2/fds/protobuf/stach/v2 -type d -maxdepth 10); do
	touch "$f/__init__.py"
done;

echo Produced new generated code

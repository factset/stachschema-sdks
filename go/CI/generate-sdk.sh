#!/bin/bash
set -e

SCHEMA_PATH=/schema # Location of Protobuf schema
BASE_PATH=/golang/v2 # Base location of Go generated classes
PACKAGE_PATH=fds/protobuf/stach

rm -f $BASE_PATH/$PACKAGE_PATH/go.mod
rm -f $BASE_PATH/$PACKAGE_PATH/go.sum
rm -f $BASE_PATH/$PACKAGE_PATH/**/*.pb.go

echo Removed old generated code

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH -iname "*.proto")
protoc --proto_path $SCHEMA_PATH --go_out paths=source_relative:$BASE_PATH $PROTOFILES

cd $BASE_PATH/$PACKAGE_PATH
go mod init github.com/factset/stachschema/go/v2/fds/protobuf/stach
go build

echo Produced new generated code
#!/bin/bash
set -e

SCHEMA_PATH=/schema # Location of Protobuf schema
BASE_PATH=/dotnet/Schema # Base location of C# generated classes
PACKAGE_PATH=fds/protobuf/stach

rm -f $BASE_PATH/$PACKAGE_PATH/**/*.g.cs

echo Removed old generated code

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH -iname "*.proto")
protoc --proto_path $SCHEMA_PATH --csharp_out $BASE_PATH/$PACKAGE_PATH --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach.V2 $PROTOFILES

echo Produced new generated code
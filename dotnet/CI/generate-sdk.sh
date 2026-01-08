#!/bin/bash
set -e
ls -laR dotnet

BASE_PATH_V1=dotnet/v1/Schema # Base location of dotnet generated classes for v1
BASE_PATH_V2=dotnet/v2/Schema # Base location of dotnet generated classes for v2
BASE_PATH_V3=dotnet/v3/Schema # Base location of dotnet generated classes for v3

SCHEMA_PATH=schema # Location of Protobuf schema
PACKAGE_PATH_V1=v1/fds/protobuf/stach
PACKAGE_PATH_V2=v2/fds/protobuf/stach/v2
PACKAGE_PATH_V3=v3/fds/protobuf/stach/v3

find "$BASE_PATH_V1" -name '*.g.cs' -type f -delete
find "$BASE_PATH_V2" -name '*.g.cs' -type f -delete
find "$BASE_PATH_V3" -name '*.g.cs' -type f -delete

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH_V1 -iname "*.proto")
protoc --proto_path $SCHEMA_PATH/v1 --csharp_out $BASE_PATH_V1 --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach $PROTOFILES

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH_V2 -iname "*.proto")
protoc --proto_path $SCHEMA_PATH/v2 --csharp_out $BASE_PATH_V2 --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach.V2 $PROTOFILES

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH_V3 -iname "*.proto")
protoc --proto_path $SCHEMA_PATH/v3 --csharp_out $BASE_PATH_V3 --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach.V3 $PROTOFILES

echo Produced new generated code
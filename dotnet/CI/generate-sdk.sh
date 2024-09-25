#!/bin/bash
set -e

SCHEMA_PATH=/schema # Location of Protobuf schema
BASE_PATH=/dotnet/Schema # Base location of C# generated classes
PACKAGE_PATH=fds/protobuf/stach

SCHEMA_PATH_v1=/schema/v1 # Location of Protobuf schema
BASE_PATH_v1=/dotnet/v2/Schema # Base location of C# generated classes

SCHEMA_PATH_v2=/schema/v2 # Location of Protobuf schema
BASE_PATH_v2=/dotnet/v2/Schema # Base location of C# generated classes

SCHEMA_PATH_v3=/schema/v3 # Location of Protobuf schema
BASE_PATH_v3=/dotnet/v3/Schema # Base location of C# generated classes


rm -f $BASE_PATH/$PACKAGE_PATH/**/*.g.cs

# new code to remove the v1,v2,v3 generated sdk code folders
rm -f $BASE_PATH_v1/$PACKAGE_PATH/**/*.g.cs
rm -f $BASE_PATH_v2/$PACKAGE_PATH/**/*.g.cs
rm -f $BASE_PATH_v3/$PACKAGE_PATH/**/*.g.cs

echo Removed old generated code

# commenting old code
# PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH -iname "*.proto")
# protoc --proto_path $SCHEMA_PATH --csharp_out $BASE_PATH/$PACKAGE_PATH --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach.V3 $PROTOFILES


# Generating multiple SDK projects for stach, stach.v2 and stach.v3
PROTOFILES=$(find $SCHEMA_PATH_v1/$PACKAGE_PATH -iname "*.proto")
protoc --proto_path $SCHEMA_PATH_v1 --csharp_out $BASE_PATH_v1/$PACKAGE_PATH --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach $PROTOFILES

PROTOFILES=$(find $SCHEMA_PATH_v2/$PACKAGE_PATH -iname "*.proto")
protoc --proto_path $SCHEMA_PATH_v2 --csharp_out $BASE_PATH_v2/$PACKAGE_PATH --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach.V2 $PROTOFILES

PROTOFILES=$(find $SCHEMA_PATH_v3/$PACKAGE_PATH -iname "*.proto")
protoc --proto_path $SCHEMA_PATH_v3 --csharp_out $BASE_PATH_v3/$PACKAGE_PATH --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach.V3 $PROTOFILES


echo Produced new generated code

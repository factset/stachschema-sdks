#!/bin/bash
set -e

BASE_PATH=/src/v3/Schema # Base location of C# generated classes
PACKAGE_PATH=Schema.csproj

dotnet build --configuration Release $BASE_PATH/$PACKAGE_PATH

echo Built package
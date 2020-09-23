#!/bin/bash
set -e

BASE_PATH=/src/Schema # Base location of C# generated classes
ARTIFACTS_PATH=/dotnet/artifacts

if [ -d $ARTIFACTS_PATH ]
then 
  rm -rf $ARTIFACTS_PATH/*
fi

mkdir -p $ARTIFACTS_PATH

cp -rf $BASE_PATH/bin/Release/*.nupkg $ARTIFACTS_PATH
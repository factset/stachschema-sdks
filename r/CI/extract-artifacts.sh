#!/bin/bash
set -e

BASE_PATH=/src # Base location of schema files
ARTIFACTS_PATH=/r/artifacts

if [ -d $ARTIFACTS_PATH ]
then 
  rm -rf $ARTIFACTS_PATH/*
fi

mkdir -p $ARTIFACTS_PATH

cp -rf $BASE_PATH/*.tar.gz $ARTIFACTS_PATH
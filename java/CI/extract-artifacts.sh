#!/bin/bash
set -e

BASE_PATH=/src/v3 # Base location of Java generated classes
ARTIFACTS_PATH=/java/artifacts

if [ -d $ARTIFACTS_PATH ]
then 
  rm -rf $ARTIFACTS_PATH/*
fi

mkdir -p $ARTIFACTS_PATH

cp -rf $BASE_PATH/target/* $ARTIFACTS_PATH
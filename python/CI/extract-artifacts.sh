#!/bin/bash
set -e

BASE_PATH=/src/fds.protobuf.stach.v2 # Base location of Python generated classes
ARTIFACTS_PATH=/python/artifacts

if [ -d $ARTIFACTS_PATH ]
then 
  rm -rf $ARTIFACTS_PATH/*
fi

mkdir -p $ARTIFACTS_PATH

cp -rf $BASE_PATH/dist/* $ARTIFACTS_PATH
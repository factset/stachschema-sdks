#!/bin/bash
set -e

BASE_PATH=/src/v2 # Base location of Go generated classes
PACKAGE_PATH=fds/protobuf/stach

cd $BASE_PATH/$PACKAGE_PATH
go build

echo Built package
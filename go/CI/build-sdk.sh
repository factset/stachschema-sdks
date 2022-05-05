#!/bin/bash
set -e

BASE_PATH=/src # Base location of Go generated classes
PACKAGE_PATH=fds/protobuf/stach/v3

cd $BASE_PATH/$PACKAGE_PATH
go build

echo Built package

#!/bin/bash
set -e

BASE_PATH=/src/fds.protobuf.stach # Base location of Python generated classes

cd $BASE_PATH
python setup.py sdist

echo Built package
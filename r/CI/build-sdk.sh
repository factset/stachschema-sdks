#!/bin/bash
set -e

BASE_PATH=/src # Base location of R generated classes
PACKAGE_NAME=factset.protobuf.stach

cd $BASE_PATH
R CMD build $PACKAGE_NAME

echo Built package

# Install the STACH package
R -e "install.packages('$PACKAGE_NAME', repos=NULL, type='source')"

echo Installed $PACKAGE_NAME package

# Run cran checks (includes unit tests)
R CMD check $PACKAGE_NAME --as-cran --no-manual

echo Ran cran checks successfully
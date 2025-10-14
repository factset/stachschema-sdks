#!/bin/bash
set -e

BASE_PATH=/java # Base location of Java generated classes
PACKAGE_PATH=src/main/java

BASE_PATH_v1=/java/v1
BASE_PATH_v2=/java/v2
BASE_PATH_v3=/java/v3

rm -f $BASE_PATH/$PACKAGE_PATH/**/*.java

mkdir --parent $BASE_PATH_v1/$PACKAGE_PATH
mkdir --parent $BASE_PATH_v2/$PACKAGE_PATH
mkdir --parent $BASE_PATH_v3/$PACKAGE_PATH

echo Removed old generated code

# cd $BASE_PATH
# mvn clean install -q -P generate-stach-schema -f pom.xml

mvn -f $BASE_PATH_v1/pom.xml clean install -q -P generate-stach-schema
echo Generated java stach v1 files

mvn -f $BASE_PATH_v2/pom.xml clean install -q -P generate-stach-schema
echo Generated java stach v2 files

mvn -f $BASE_PATH_v3/pom.xml clean install -q -P generate-stach-schema
echo Generated java stach v3 files

echo Produced new generated code

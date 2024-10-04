#!/bin/bash
set -e

BASE_PATH=/java # Base location of Java generated classes
PACKAGE_PATH=src/main/java

BASE_PATH_v1=/java/v1
BASE_PATH_v2=/java/v2
BASE_PATH_v3=/java/v3

rm -f $BASE_PATH/**/*.java


mkdir --parent $BASE_PATH_v1/$PACKAGE_PATH
mkdir --parent $BASE_PATH_v2/$PACKAGE_PATH
mkdir --parent $BASE_PATH_v3/$PACKAGE_PATH

echo Removed old generated code

# cd $BASE_PATH
# mvn clean install -q -P generate-stach-schema -f pom.xml

cd $BASE_PATH_v1
mvn clean install -q -P generate-stach-schema -f pom.xml

cd ../..
cd $BASE_PATH_v2
mvn clean install -q -P generate-stach-schema -f pom.xml

cd ../..
cd $BASE_PATH_v3
mvn clean install -q -P generate-stach-schema -f pom.xml

echo Produced new generated code
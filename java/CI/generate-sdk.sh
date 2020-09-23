#!/bin/bash
set -e

BASE_PATH=/java # Base location of Java generated classes
PACKAGE_PATH=src/main/java

rm -f $BASE_PATH/$PACKAGE_PATH/**/*.java

echo Removed old generated code

cd $BASE_PATH
mvn clean install -q -P generate-stach-schema -f pom.xml

echo Produced new generated code
#!/bin/bash
set -e

BASE_PATH=/src # Base location of Java generated classes

cd $BASE_PATH
mvn clean install -q -f pom.xml

echo Built package

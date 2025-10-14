#!/bin/bash
set -e

BASE_PATH=/java # Base location of Java generated classes
PACKAGE_PATH=src/main/java

BASE_PATH_v1=/java/v1
BASE_PATH_v2=/java/v2
BASE_PATH_v3=/java/v3

# Backup section - store both file and its directory
for BASE in $BASE_PATH_v1 $BASE_PATH_v2 $BASE_PATH_v3; do
    NULLVALUES_FILE=$(find "$BASE/$PACKAGE_PATH" -name "NullValues.java" -type f | head -1)
    if [ -n "$NULLVALUES_FILE" ]; then
        cp "$NULLVALUES_FILE" "/tmp/NullValues_$(basename $BASE).java"
        # Store the original directory path
        echo "$(dirname "$NULLVALUES_FILE")" > "/tmp/NullValues_$(basename $BASE).dir"
        echo "Backed up: $NULLVALUES_FILE"
    fi
done

rm -f $BASE_PATH/$PACKAGE_PATH/**/*Proto.java

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

# Restore section - use stored directory path
for BASE in $BASE_PATH_v1 $BASE_PATH_v2 $BASE_PATH_v3; do
    if [ -f "/tmp/NullValues_$(basename $BASE).java" ]; then
        ORIGINAL_DIR=$(cat "/tmp/NullValues_$(basename $BASE).dir")
        mkdir -p "$ORIGINAL_DIR"  # Ensure directory exists
        cp "/tmp/NullValues_$(basename $BASE).java" "$ORIGINAL_DIR/NullValues.java"
        rm "/tmp/NullValues_$(basename $BASE).java"
        rm "/tmp/NullValues_$(basename $BASE).dir"
        echo "Restored: $ORIGINAL_DIR/NullValues.java"
    fi
done

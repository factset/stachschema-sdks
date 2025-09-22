#!/bin/bash
set -e
# --- Add these variables ---
GIT_REPO_URL="https://github.com/factset/stachschema.git"
LOCAL_SCHEMA_PATH="./tmp"
BRANCH_NAME="feat/sdks/support-versions"

# Clone or update the repo
if [ -d "$LOCAL_SCHEMA_PATH/.git" ]; then
    git -C "$LOCAL_SCHEMA_PATH" pull origin "$BRANCH_NAME"
    git -C "$LOCAL_SCHEMA_PATH" checkout "$BRANCH_NAME"
else
    if [ -d "$LOCAL_SCHEMA_PATH" ]; then
        echo "Directory $LOCAL_SCHEMA_PATH exists but is not a git repo. Removing..."
        rm -rf "$LOCAL_SCHEMA_PATH"
    fi
    git clone -b "$BRANCH_NAME" "$GIT_REPO_URL" "$LOCAL_SCHEMA_PATH"
fi

SCHEMA_PATH="$LOCAL_SCHEMA_PATH/proto" # Location of Protobuf schema
BASE_PATH_V3=../fds.protobuf.stach.v3 # Base location of Python generated classes
BASE_PATH_V2=../fds.protobuf.stach.v2 # Base location of Python generated classes
PACKAGE_PATH_V3=v3/fds/protobuf/stach/v3
PACKAGE_PATH_V2=v2/fds/protobuf/stach/v2

# rm -f $BASE_PATH_V2/$PACKAGE_PATH_V2/**/*_pb2.py
# rm -f $BASE_PATH_V3/$PACKAGE_PATH_V3/**/*_pb2.py

# echo Removed old generated code
mkdir -p "$BASE_PATH_V3"
mkdir -p "$BASE_PATH_V2"

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH_V3 -iname "*.proto")
protoc --proto_path $SCHEMA_PATH/v3 --python_out $BASE_PATH_V3 $PROTOFILES

for f in $(find $BASE_PATH_V3/fds/protobuf/stach/v3 -type d -maxdepth 10); do
	touch "$f/__init__.py"
done;

PROTOFILES=$(find $SCHEMA_PATH/$PACKAGE_PATH_V2 -iname "*.proto")
protoc --proto_path $SCHEMA_PATH/v2 --python_out $BASE_PATH_V2 $PROTOFILES

for f in $(find $BASE_PATH_V2/fds/protobuf/stach/v2 -type d -maxdepth 10); do
	touch "$f/__init__.py"
done;

echo Produced new generated code

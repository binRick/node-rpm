#!/bin/bash
_TEST_SERVER=$1
[ "$_TEST_SERVER" == "" ] && { echo "First argument must be server to test package on" && exit 1; }

set -e

_BUILD_COMMAND="time node index.js"
_OUT_FILE="$(mktemp)"

result="$($_BUILD_COMMAND > $_OUT_FILE)"
result_code=$?

echo "Build Finished with exit code $result_code"
if [ "$result_code" != "0" ]; then
  echo "Failed to execute RPM Build"
  exit 1
fi

newRpm="$(tail -n1 $_OUT_FILE)"
if [ "$newRpm" == "" ]; then
  echo "Failed to extract RPM from output"
  exit 1
fi

echo "New RPM = $newRpm"

ls -al $newRpm


rm $_OUT_FILE

#!/bin/sh

localPath=`pwd`

apidoc -i $localPath/src/routes/ -o $localPath/public/apidoc/

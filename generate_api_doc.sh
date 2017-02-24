#!/bin/sh

localPath=`pwd`

apidoc -i $localPath/routes/ -o $localPath/public/apidoc/

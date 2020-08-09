#!/bin/bash

echo building Angular app
cd web
npm i
ng build --prod="true"
cd ..
rm -r -f ./release
mkdir -p ./release/web
cp -r ./web/dist ./release/web/
rm -r -f ./web/dist
echo successfully built and copied Angular app to ./release/web/
GOOS=linux
GOARCH=arm
go_executable_output_file=./release/dashboard
echo building go executable for $GOOS $GOARCH, output will be $go_executable_output_file
env CGO_ENABLED=0 GOOS=$GOOS GOARCH=$GOARCH go build -a -o ./$go_executable_output_file
echo build finished
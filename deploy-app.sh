#!/bin/bash
# @AUTHOR: tk@trevorknott.io

now=$(date +"%s")"-tkio"
time=$now

rm -rf dist/
ng build --env=prod --aot

mkdir dist/nginx/

cp -r nginx/* ./dist/nginx/

cp Dockerfile dist/

# Time to dockerize that bihh

# cd dist/

# sudo docker build -t $time  .

# sudo docker run -d -p 4200:80 $time

#  # Make sure port is open
#  # If not run sudo docker ps
 # sudo docker kill <INSERT-CONTAINER-ID>

echo $time
echo "READY FOR DOCKER\n"
echo "RUN IN dist/ -   sudo docker build -t <APP-NAME>  ."
echo "RUN IN dist/ -   sudo docker run  -d -p 4200:80 <APP-NAME> "

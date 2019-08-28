#!/bin/bash

# eval "$(ssh-agent -s)" &&
# ssh-add -k ~/.ssh/id_rsa &&
# cd /var/www/helloworld
# git pull

# source ~/.profile
# echo "$DOCKERHUB_PASS" | docker login --username $DOCKERHUB_USER --password-stdin

sudo docker stop fb19eecef3d3
sudo docker rm fb19eecef3d3

sudo docker rmi syamsuldocker/frontend_automate
sudo docker pull syamsuldocker/frontend_automate
sudo docker run -d -p 3000:80 syamsuldocker/frontend_automate:latest
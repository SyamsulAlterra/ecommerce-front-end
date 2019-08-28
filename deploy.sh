#!/bin/bash

# eval "$(ssh-agent -s)" &&
# ssh-add -k ~/.ssh/id_rsa &&
# cd /var/www/helloworld
# git pull

# source ~/.profile
# echo "$DOCKERHUB_PASS" | docker login --username $DOCKERHUB_USER --password-stdin

sudo docker stop syamsuldocker/frontend_automate
sudo docker rm syamsuldocker/frontend_automate
sudo docker rmi syamsuldocker/frontend_automate
sudo docker pull syamsuldocker/frontend_automate
sudo docker run -d -p 8000:8000 syamsuldocker/frontend_automate:latest
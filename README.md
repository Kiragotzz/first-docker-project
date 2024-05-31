# DB
## 1 DOWNLOAD DOCKER IMAGE MYSQL
  docker build -t mysql -image -f api/db/Dockerfile .

## 2 RUN DOCKER
  docker run -d -v F:\Projetos\Docker\first\api\db\data:/var/lib/mysql --rm --name mysql-container mysql-image

## 3 RUN SQL FILE IN MYSQL IMAGE
  docker exec -i mysql-container mysql -uroot -pprogramadorabordo < api\db\script.sql

## 4 OPEN DOCKER IMAGE > OPEN MYSQL > SHOW DB 
  docker exec -it mysql-container /bin/bash
  mysql -uroot -pprogramadorabordo;
  use programadorabordo;
  select * from products;

## STOP DOCKER CONTAINER
  docker stop mysql-container


# API
## DOWNLOAD DOCKER IMAGE NODE
  docker build -t node-image -f api/Dockerfile .

## RUN DOCKER
  docker run -d -v F:\Projetos\Docker\first\api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image

## STOP DOCKER
  docker stop node-container


# WEBSITE
## DOWNLOAD DOCKER IMAGE PHP
  docker build -t php-image -f website/Dockerfile .

## RUN DOCKER
  docker run -d -v F:\Projetos\Docker\first\website:/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image

# REFERENCES
https://hub.docker.com/

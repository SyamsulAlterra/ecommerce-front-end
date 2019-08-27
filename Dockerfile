FROM nginx:stable
MAINTAINER syamsul  "syamsul@alterra.id"

RUN mkdir -p /syamsul/www/front-end
RUN mkdir -p /alterra/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /syamsul/www/front-end

WORKDIR /syamsul/www/front-end
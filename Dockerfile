FROM node:10-alpine

ENV APP_ROOT /usr/src/techplay

WORKDIR $APP_ROOT

COPY . $APP_ROOT
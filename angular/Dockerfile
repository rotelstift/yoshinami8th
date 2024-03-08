FROM node:latest

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ENV PATH=$APP_HOME/node_modules/.bin:$PATH

RUN npm install -g @angular/cli

ADD . $APP_HOME

EXPOSE 4200

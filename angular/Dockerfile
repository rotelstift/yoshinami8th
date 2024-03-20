FROM node:latest

RUN apt-get update -qq && apt-get install -y chromium
ENV CHROME_BIN /usr/bin/chromium
ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ENV PATH=$APP_HOME/node_modules/.bin:$PATH

RUN npm install -g @angular/cli

ADD . $APP_HOME

EXPOSE 4200 9876

FROM ruby:3.2.1

RUN apt-get update -qq && apt-get install -y postgresql-client
ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN echo 'gem: --no-rdoc --no-ri' >> "$HOME/.gemrc"

COPY Gemfile $APP_HOME/Gemfile
COPY Gemfile.lock $APP_HOME/Gemfile.lock
RUN bundle install
ADD . $APP_HOME

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /temp/* /var/tmp/*

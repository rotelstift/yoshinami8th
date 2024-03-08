class HelloController < ApplicationController
  def index
    @hello = {answer: 'hello world'}
    response.headers['Access-Control-Allow-Origin'] = 'http://0.0.0.0:4200'
    render json: @hello
  end
end

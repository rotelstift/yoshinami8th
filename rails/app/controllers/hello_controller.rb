class HelloController < ApplicationController
  def index
    @hello = {answer: 'hello world'}
    render json: @hello
  end
end

Rails.application.routes.draw do
  resources :tags
  scope :api do
    get "/articles/:slug", to: "articles#list", constraints: { slug: /[a-z]+/ }
    resources :articles, expect: :list
  end

  # get "/list/:slug" => "articles#list"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/' => "hello#index"

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end

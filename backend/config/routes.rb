Rails.application.routes.draw do
  # if Rails.env.development?
  #     mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  #   end
  # post "/graphql", to: "graphql#execute"
  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :lyft, only: [:index]
  end
end

Rails.application.routes.draw do
  get '/notifications', to: "notifications#index"
end

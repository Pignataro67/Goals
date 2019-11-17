Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do 
    resources :goals do 
    resources :objectives
    end
  end

  get '/api/goals/:id/toggle', to: 'goals#toggle'
  resources :objectives, only: :destroy
end
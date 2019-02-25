Rails.application.routes.draw do
  get 'home' => 'home#index'
  get 'contact' => 'contact#index'
end

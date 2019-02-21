Rails.application.routes.draw do
  get 'mocchy' => 'mocchy#index'
  get 'contact' => 'contact#index'
end

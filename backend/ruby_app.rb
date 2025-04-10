require 'sinatra'
require 'json'

get '/api/info' do
  content_type :json
  { 
    language: 'Ruby',
    framework: 'Sinatra',
    environment: ENV['RACK_ENV'] || 'development'
  }.to_json
end

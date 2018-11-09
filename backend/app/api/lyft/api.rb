require 'httparty'

module Lyft
    module Api
        class Api
            include HTTParty

            CLIENT_ID = 'aERGoL7SWDbx'
            CLIENT_SECRECT = 'GjX02y9Rrp3q79obFfhHUW_Y4zZCiHe3'
            ACCESS_TOKEN_URL = 'https://api.lyft.com/oauth/token'
            HEADERS = {
                'Content-Type' => 'application/json',
                'Authorization' => "Basic #{CLIENT_ID}:GjX02y9Rrp3q79obFfhHUW_Y4zZCiHe3"
            }

            BODY = {
                'grant_type' => 'client_credentials',
                'scope' => 'public'
            }

    #           "headers": {
    #           "Authorization" => "Bearer #{token}"

    # }

            def access_token
                self.handle_response(
                    HTTParty.post("https://api.lyft.com/oauth/token", 
                    "Content-Type" => "application/json"
                    #   "headers": {
                    #       "Content-Type" => "application/json",
                    #       "Authorization" => "Basic #{CLIENT_ID}:GjX02y9Rrp3q79obFfhHUW_Y4zZCiHe3"
                    #     ,
                    #   "body": {
                    #       "grant_type" => "client_credentials",
                    #        "scope" => "public"
                    #   })
                )
                )

            end

            def handle_response(res)
                response = res
                debugger
            end

        end
    end
end



class Api::LyftController < ApplicationController

    def index
        @api = Lyft::Api::Api.new
        @response = @api.access_token
        debugger
        # render "api/lyft/index"
        # render json: {}, status: :ok
    end
end

module Lyft
    module Api
        module Access

            def get_access(client_id, client_secret)
                get("https://api.lyft.com/oauth/token")
            end
        end
    end
end
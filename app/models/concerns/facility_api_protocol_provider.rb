module FacilityApiProtocolProvider
  extend ActiveSupport::Concern
  include BaseApiProtocolProvider

  class_methods do
    def search(query, auth_header)
      response = FaradayCalsmock.post("/#{class_name_downcase_pluralized}/search",
                                  auth_header,
                                  query)
      JSON.parse(response.body)
    end
  end

  included do
    # def instance_method_example
    #   'example of an instance method'
    # end
  end
end

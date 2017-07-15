class DictionaryBase < CalsBase
  include BaseCalsApiProtocolProvider

  attr_accessor :id, :value

  def self.api_resource_path
    # will convert
    # Dictionaries::RaceType = 'dictionaries/race-types'
    "#{name.underscore.dasherize.pluralize}"
  end
end

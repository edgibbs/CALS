class ChildPreference < CalsBase
  include ChildPreferenceApiProtocolProvider
  attr_accessor :sibling_group_size, :age_group_preference

end

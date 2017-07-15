class Address < CalsBase
  include AddressApiProtocolProvider

  attr_accessor :street_address, :zip, :city, :state, :type
end

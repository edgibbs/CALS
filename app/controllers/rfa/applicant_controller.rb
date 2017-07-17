module Rfa
  class ApplicantController < CalsBaseController

  def create
    post_data = request.body.read

    rfa_applicant_helper.create(params[:a01_id], post_data)
  end

  def rfa_applicant_helper
    Rfa::ApplicantHelper.new(auth_header: session['token'])
  end
end
end

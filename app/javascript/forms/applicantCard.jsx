import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import NameCard from './nameCard'
import PhoneComponent from './phoneNumberCardsGroup.jsx'
import AboutApplicant from './aboutApplicantCard.jsx'
import Employment from './employmentCard.jsx'

export default class ApplicantCard extends React.Component {
  constructor (props) {
    super(props)

    this.setApplicantState = this.setApplicantState.bind(this)
    this.getFocusClassName = this.getFocusClassName.bind(this)
  }

  setApplicantState (key, value) {
    let applicantData = Immutable.fromJS(this.props.applicantFields)
    applicantData = applicantData.set(key, value)
    this.props.setParentState(this.props.index, applicantData.toJS())
  }

  getFocusClassName (componentName) {
    return this.props.focusComponentName === componentName ? 'edit' : 'show'
  }

  render () {
    return (
      <div className='cards'>

        <div id='nameSection' onClick={() => this.props.setFocusState('NameCard')}
          className={this.getFocusClassName('NameCard') + ' ' + 'card name-section double-gap-top'}>

          <div className='card-header'>
            <span>Name</span>
          </div>
          <NameCard
            nameTypes={this.props.nameTypes}
            nameFields={this.props.applicantFields}
            setParentState={this.setApplicantState} />
        </div>

        <div id='aboutAppSection' onClick={() => this.props.setFocusState('AboutApplicantCard')}
          className={this.getFocusClassName('AboutApplicantCard') + ' ' + 'card aboutApp-section double-gap-top'}>

          <div className='card-header'>
            <span>More about Applicant</span>
          </div>
          <AboutApplicant
            stateTypes={this.props.stateTypes}
            educationLevels={this.props.educationLevels}
            genderTypes={this.props.genderTypes}
            raceTypes={this.props.raceTypes}
            languageTypes={this.props.languageTypes}
            applicantFields={this.props.applicantFields}
            setParentState={this.setApplicantState} />
        </div>

        <div id='employmentSection' onClick={() => this.props.setFocusState('EmploymentCard')}
          className={this.getFocusClassName('EmploymentCard') + ' ' + 'card employment-section double-gap-top'}>

          <div className='card-header'>
            <span>Employment</span>
          </div>
          <Employment
            stateTypes={this.props.stateTypes}
            salaryTypes={this.props.salaryTypes}
            employment={this.props.applicantFields.employment}
            setParentState={this.setApplicantState} />
        </div>

        <div id='phoneSection' onClick={() => this.props.setFocusState('PhoneNumbersCard')}
          className={this.getFocusClassName('PhoneNumbersCard') + ' ' + 'card phone-section double-gap-top'}>

          <div className='card-header'>
            <span>Phone Number</span>
          </div>
          <PhoneComponent
            phoneTypes={this.props.phoneTypes}
            phones={this.props.applicantFields.phones}
            setParentState={this.setApplicantState} />
        </div>
      </div>
    )
  }
}

ApplicantCard.propTypes = {
  index: PropTypes.number.isRequired,
  phoneTypes: PropTypes.array.isRequired,
  salaryTypes: PropTypes.array.isRequired,
  stateTypes: PropTypes.array.isRequired,
  educationLevels: PropTypes.array.isRequired,
  genderTypes: PropTypes.array.isRequired,
  raceTypes: PropTypes.array.isRequired,
  languageTypes: PropTypes.array.isRequired,
  focusComponentName: PropTypes.string.isRequired,
  applicantFields: PropTypes.object.isRequired,
  setParentState: PropTypes.func.isRequired,
  setFocusState: PropTypes.func.isRequired
}

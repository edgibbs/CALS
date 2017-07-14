import Immutable from 'immutable'
import React from 'react'
import {OtherAdultsCardField} from '../common/OtherAdultsCardField'

const defaults = {
  otherAdultsComponents: [],
  'insert': true,
  otherAdultsComponentValue: 1,
  nameField: {
    firstName: '',
    lastName: '',
    middleName: ''
  },
  dateOfBirth: '',
  availableApplicant: '',
  relationshipType: '',
  relationshipTypes: {
    items: []
  },
  availableApplicants: {
    items: []
  }
}

export default class OtherAdultsCard extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.handleNameFieldInput = this.handleNameFieldInput.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.clickClose = this.clickClose.bind(this)
    this.state = {
      otherAdults: [defaults]
    }
  }

  addCard (event) {
    let otherAdultsList = this.state.otherAdults
    otherAdultsList.push(defaults)
    this.setState({
      otherAdults: otherAdultsList
    })
  }

  removeCard (value) {
    var otherAdultsCards = this.state.otherAdultsComponents
    var index = otherAdultsCards.indexOf(value)
    otherAdultsCards.splice(index, 1)
    this.setState({
      otherAdultsCards: otherAdultsCards
    })
  }

  clickClose (id) {
    if (id === 1) {
      this.setState(defaults)
    } else {
      this.props.removeCard(id)
    }
  }

  onFieldChange (index, value, type) {
    let otherAdultsList = Immutable.fromJS(this.state.otherAdults)
    if (otherAdultsList.size === 0) {
      otherAdultsList = otherAdultsList.push(defaults)
    }
    otherAdultsList = otherAdultsList.update(index, x => x.set(type, value))
    this.setState({
      // convert to regular js array
      otherAdults: otherAdultsList.toJS()
    })
  }

  handleNameFieldInput (index, value, type) {
    let otherAdultsList = Immutable.fromJS(this.state.otherAdults)
    otherAdultsList = otherAdultsList.update(index,
       otherAdult => otherAdult.setIn(['nameField', type], value))
    this.setState({
      otherAdults: otherAdultsList.toJS()
    })
  }

  render () {
    let otherAdultsList = this.state.otherAdults
    return (
      <div className='card-body'>
        {
          otherAdultsList.map((otherAdultsFields, index) => {
            return (
              <OtherAdultsCardField
                key={index}
                value={index}
                relationshipTypes={this.props.relationshipTypes}
                otherAdults={otherAdultsFields}
                handleNameFieldInput={this.handleNameFieldInput}
                onFieldChange={this.onFieldChange} />
            )
          }
        )}
        <div className='text-center'>
          <button onClick={this.addCard} className='btn btn-default'>Add another Adult +</button>
        </div>
      </div>
    )
  }
}

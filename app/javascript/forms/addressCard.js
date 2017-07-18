import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {yesNo} from '../constants/constants'

const blankAddressFields = {
  addressFieldValues: {
    address: [{
      street_address: '',
      zip: '',
      city: '',
      state: {
        id: '',
        value: ''
      },
      type: {
        id: '1',
        value: 'physical'
      }
    },
    {
      street_address: '',
      zip: '',
      city: '',
      state: {
        id: '',
        value: ''
      },
      type: {
        id: '2',
        value: 'mailing'
      }
    }
    ]
  },
  physical_mailing_similar: true

}

export default class AddressCard extends React.Component {
  onChange (value, e) {
    let data = blankAddressFields.addressFieldValues.address
    let index = e.includes('secondary') === true ? 1 : 0
    if (typeof (value) !== 'object' && e === 'physical_mailing_similar') {
      blankAddressFields.physical_mailing_similar = value.toLowerCase() === 'yes'
    } else if (typeof (value) === 'object') {
      data[index]['state'] = {id: value.target.selectedOptions[0].value, value: value.target.selectedOptions[0].text}
    } else {
      data[index][e] = value
    }

    this.setState({
      addressFieldValues: data
    })

    // this.props.sendProps(this.state.addressFieldValues)
  }

  render () {
    const hiddenMailingSameAsPhysical = blankAddressFields.physical_mailing_similar ? 'hidden' : ''
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <InputComponent gridClassName='col-md-12' id='street_address'
              label='Physical Address:' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('street_address'))} />

            <InputComponent gridClassName='col-md-4' id='zip'
              label='Zip Code:' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('zip'))} />

            <InputComponent gridClassName='col-md-4' id='city'
              label='City:' placeholder=''
              onChange={(event, number) => this.onChange(event.target.value, ('city'))} />

            <DropDownField gridClassName='col-md-4' id='state'
              selectClassName={'reusable-select'}
              optionList={this.props.stateTypes.items}
              label={'State'}
              onChange={(event, number) => this.onChange(event, ('state'))} />

            <DropDownField gridClassName='col-md-6'
              selectClassName={'reusable-select'}
              optionList={yesNo.items}
              label={'Mailing address the same as Physical Address?'}
              onChange={(event, number) => this.onChange(event.target.selectedOptions[0].text, ('physical_mailing_similar'))}  />

            <div className={hiddenMailingSameAsPhysical}>
              <InputComponent gridClassName='col-md-12' id='secondary_street_address'
                label='Mailing Address:' placeholder=''
                onChange={(event, number) => this.onChange(event.target.value, ('secondary_street_address'))} />

              <InputComponent gridClassName='col-md-4' id='secondary_zip'
                label='Zip Code:' placeholder=''
                onChange={(event, number) => this.onChange(event.target.value, ('secondary_zip'))} />

              <InputComponent gridClassName='col-md-4' id='secondary_city'
                label='City:' placeholder=''
                onChange={(event, number) => this.onChange(event.target.value, ('secondary_city'))} />

              <DropDownField gridClassName='col-md-4' id='secondary_state'
                selectClassName={'reusable-select'}
                optionList={this.props.stateTypes.items}
                label={'State'}
                onChange={(event, number) => this.onChange(event, ('secondary_state'))} />

            </div>

          </form>
        </div>
      </div>
    )
  }
}

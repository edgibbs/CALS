import React from 'react'
import renderer from 'react-test-renderer'
import PhoneNumbersCard from '../../../app/javascript/forms/phoneNumbersCard.jsx'
import {shallow} from 'enzyme'
var TestUtils = require('react-dom/test-utils')

describe('Verify Phone Card Component View', function () {
  // let phoneCardComp = TestUtils.createRenderer()
  // let phoneCardRender = phoneCardComp.render(<PhoneNumbersCard />)
  // let phoneCardRender = renderer.create(<PhoneNumbersCard />)
  let phoneCardTag // = phoneCardRender.props

  let component
  let addCardSpy
  let removeCardSpy

  beforeEach(() => {
    // const phoneNumbers = {
    //   phoneComponentValue: 0,
    //   phoneFieldList: [{
    //     ID: 0,
    //     number: '',
    //     phone_type: {
    //       id: '',
    //       value: ''
    //     },
    //     is_preferred: false
    //   }],
    //   'insert': true
    // }
    addCardSpy = jasmine.createSpy('addCard')
    removeCardSpy = jasmine.createSpy('removeCard')
    component = shallow(
      <PhoneNumbersCard onClick={addCardSpy}/>
    )
    phoneCardTag = component.props
  })

  // it('has class name', function () {
  //   expect(phoneCardTag.className).toBe('card-body')
  // })
  // it('expcet children to be array', function () {
  //   expect(phoneCardTag.children.length).toEqual(2)
  // })
  // it('expect phone card to have button', function () {
  //   let phoneButtonTag = phoneCardTag.children[1].props.children
  //   expect(phoneButtonTag.type).toBe('button')
  // })
  // it('expect button with text add another phone +', function () {
  //   let phoneButtonTag = phoneCardTag.children[1].props.children
  //   expect(phoneButtonTag.props.children).toEqual('Add another Number +')
  // })

  it('calls addCard and updates state', () => {
    // let phoneButtonTag = phoneCardTag.children[1].props.children.props
    // phoneButtonTag.trigger('click')

    component.find('button[className="btn btn-default"]').simulate('click')
    expect(addCardSpy).toHaveBeenCalled()
    // expect(addCardSpy.calls.argsFor(0)[0].toJS()).toEqual([
    //   {number: '111-111-1111', type: 'Cell'},
    //   {number: null, type: null}
    // ])
  })
})

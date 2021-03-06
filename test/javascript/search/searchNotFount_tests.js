import React from 'react'
import SearchNotFound from '../../../app/javascript/search/search_notfount'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Search Not Found Component', function () {
  let searchFoundComp = TestUtils.createRenderer()
  let searchFoundRender = searchFoundComp.render(<SearchNotFound />)
  let notFoundElem = searchFoundRender.props.children
  it('Verify Not Result returned Component', function () {
    expect(notFoundElem.type).toBe('div')
  })
  it('Verify error meesage Tag', function () {
  	let errorTag = notFoundElem.props.children
 //  	let pTag = errorTag.find('p:contains("No result found with the selected search criteria, Please refine your search and try again")')
	// let x = pTag;
  	expect(errorTag[1].props.children.props.className).toEqual('error_message')
  })
})

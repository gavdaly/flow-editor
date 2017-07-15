import React from 'react'
import DocumentList from './DocumentList'

import { shallow } from 'enzyme'

let wrapper

describe('<DocumentList>', () => {
  beforeEach(() => { wrapper = shallow(<DocumentList />) })

  it('should display no list if there are to documents')
  it('should show the document filter')

  describe('onFilter', () => {
    it('should filter the list')
  })
})

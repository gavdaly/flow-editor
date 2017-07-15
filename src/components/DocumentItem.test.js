import React from 'react'
import DocumentItem from './DocumentItem'

import { shallow } from 'enzyme'

let wrapper

describe('<DocumentItem>', () => {
  beforeEach(() => { wrapper = shallow(<DocumentItem title='the Title'/>) })

  it('should displays the title', () => {
    expect(
      wrapper.contains('the Title')
    ).toBe(true)
  })

  describe('when clicked', () => {
    it('should be the selected element')
  })
})

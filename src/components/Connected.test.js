import React from 'react'
import Connected from './Connected'

import { shallow } from 'enzyme'

let wrapper
const online = jest.fn()

describe('<Connected>', () => {
  beforeEach(() => {
    wrapper = shallow(<Connected connected='online' disconnected='offline'/>)
  })

  it('should show the connected prop when online', () => {
    online.mockReturnValue(true)
    expect(
      wrapper.contains('online')
    ).toBe(true)
  })

  it('should show the disconnected prop when offline', () => {
    online.mockReturnValue(false)
    expect(
      wrapper.contains('offline')
    ).toBe(true)
  })
})

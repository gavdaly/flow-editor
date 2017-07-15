import React from 'react'
import Connected from './Connected'

import { shallow } from 'enzyme'

let wrapper
let mockOnLine

describe('<Connected>', () => {
  beforeEach(() => {
    wrapper = shallow(<Connected connected='online' disconnected='offline'/>)
  })

  it('')

  // it('should show the connected prop when online', () => {
  //   Object.defineProperty(mockOnLine, 'prop', {
  //     onLine: {
  //       get: jest.fn(() => true)
  //     }
  //   })
  //
  //   global.navigator = mockOnLine
  //   expect(
  //     wrapper.contains('online')
  //   ).toBe(true)
  // })
  //
  //
  // it('should show the disconnected prop when offline', () => {
  //   Object.defineProperty(mockOnLine, 'prop', {
  //     onLine: {
  //       get: jest.fn(() => false)
  //     }
  //   })
  //
  //   global.navigator = mockOnLine
  //
  //   expect(
  //     wrapper.contains('offline')
  //   ).toBe(true)
  // })
})

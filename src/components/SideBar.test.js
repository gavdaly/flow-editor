import React from 'react'
import SideBar from './SideBar'

import jest from 'jest'

import { shallow } from 'enzyme'

let wrapper

// jest.mock('Connected')

describe('<SideBar>', () => {
  beforeEach(() => {
    wrapper = shallow(<SideBar />)
  })

  it('should have the logo', () => {
    expect(
      wrapper.contains(<h1 className='logo'>Flow</h1>)
    ).toBe(true)
  })

  it('should have the mode navigation')

  it('sould have the settings', () => {
    expect(
      wrapper.contains('Settings')
    ).toBe(true)
  })

  it('should show connection status', () => {
    // expect(
    //   wrapper.contains(<Connected />)
    // ).toBe(true)
  })

  it('should have the by line', () => {
    expect(
      wrapper.contains(
        <aside className='byline'>by Gavin Daly</aside>
      )
    ).toBe(true)
  })
})

import * as React from 'react'
import { shallow } from 'enzyme'
import CollapsiblePanel from '../CollapsiblePanel'

describe('CollapsiblePanel', () => {
  it('renders', () => {
    const wrapper = shallow(<CollapsiblePanel>OK</CollapsiblePanel>)
    expect(wrapper).toMatchInlineSnapshot('ShallowWrapper {}')
  })
})

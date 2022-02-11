import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Todo app set up', () => {
  test('render heading of page', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText('Todo')
    expect(linkElement).toBeInTheDocument()
  })
  test('render subheading of page', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText('What are you upto today?')
    expect(linkElement).toBeInTheDocument()
  })
  test('render header enzyme', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toContain('Todo')
  })
  test('render subheading enzyme', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h2').text()).toContain('What are you upto today?')
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import Todo from './components/Todo'
import Form from './components/Form'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('App Components Testing', () => {
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
    expect(wrapper.find('#header').text()).toContain('Todo')
  })
  test('render subheading enzyme', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h2').text()).toContain('What are you upto today?')
  })
})

describe('Todo Components Testing', () => {
  test('render delete button', ()=> {
    const wrapper = shallow(<Todo />)
    expect(wrapper.find('#delete-btn').text()).toContain('Delete')
  })
})


describe('Form Components Testing', () => {
  test('render header enzyme', ()=> {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('#submit').text()).toContain('Add')
  })
})
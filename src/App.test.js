import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from './Component/Header'
import App from './App'

describe('App component', () => {
  it('check the navbar', () => {
    const component = shallow(<App />)
    console.log(component)
    const wrapper = component.containsAllMatchingElements([<Header />])

    expect(wrapper).toEqual(true)
  })
  it('check the Alert', () => {
    const component = shallow(<App />)

    const wrapper = component.exists('.alert')

    expect(wrapper).toEqual(false)
  })
})

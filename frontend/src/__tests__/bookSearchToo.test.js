import React from 'react'
import BookSearchToo from '../components/bookSearchToo.js'

describe('bookSearchToo', () => {
  it('renders without crashing', () => {
    const component = mount(<BookSearchToo />)
    expect(component).toMatchSnapshot()
  })

  it('has input textbox for search', () => {
    const component = mount(<BookSearchToo />)
    expect(component.exists('input#book_search_too_input')).toBe(true)
  })

  it('has submit button', () => {
    const component = mount(<BookSearchToo />)
    expect(component.exists('button#book_search_too_button')).toBe(true)
  })

  it('should update state title when text entered', () => {
    const component = mount(<BookSearchToo />)
    component.find('input#book_search_too_input').simulate('change', {
      target: { value: 'Sapiens' }
    })
    expect(component.state('searchString')).toEqual('Sapiens')
  })

  it('Does not clear message box on submit', () => {
    const component = mount(<BookSearchToo submitSearchString={ function (item) { return true } }/>)
    component.find('input#book_search_too_input').simulate('change', {
      target: { value: 'Sapiens' }
    })
    expect(component.state('searchString')).toEqual('Sapiens')
    component.find('form').simulate('submit')

    expect(component.find('input#book_search_too_input').props().value).toEqual('Sapiens')
    expect(component.state('searchString')).toEqual('Sapiens')
  })
})

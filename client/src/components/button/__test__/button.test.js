import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import Button from '~@components/button'

describe('<Button />', () => {
  it('renders button text', () => {
    const component = renderer.create(<Button text="Button text" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders button id when passed', () => {
    const component = renderer.create(<Button id="button-id" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('matches snapshot', () => {
    const message = 'Button text'
    const tree = renderer.create(<Button text={message} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

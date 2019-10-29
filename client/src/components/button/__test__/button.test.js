import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import Button from '~@components/button'

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders button correctly', () => {
    const message = 'Button text'
    const { queryByText } = render(<Button text={message} />)
    expect(queryByText(message)).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const message = 'Button text'
    const tree = renderer.create(<Button text={message} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

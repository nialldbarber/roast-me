import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { Btn } from '~@styles/components/button'

const Button = ({ text, icon, removeToast }) => (
  <Btn className="btn" type="submit" handleClick={removeToast}>
    <span>
      <span>{text}</span>
      {icon ? <SVG src={icon} className="close-btn" /> : ''}
    </span>
  </Btn>
)

export default Button

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  removeToast: PropTypes.func,
}

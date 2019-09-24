import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '~@/components/button'
import close from '~@assets/icons/cross.svg'

const Toast = ({ error, message, link }) => {
  const [active, setActive] = useState(true)

  const handleClick = () => {
    setActive(false)
    console.log('clicked!')
  }

  return (
    <div className={`toast ${error && active ? 'active' : ''} toast-${error}`}>
      <p>
        <span>{message}</span>
        <Button icon={close} removeToast={handleClick} />
      </p>
    </div>
  )
}

export default Toast

Toast.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
}

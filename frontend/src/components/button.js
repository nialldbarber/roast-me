import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from '../styles/components/button'

export default function Button({ text, icon, removeToast }) {
  return (
    <Btn className="btn" type="submit" handleClick={removeToast}>
      <span>
        <span>{text}</span>
        {icon ? <img className="close-btn" src={icon} alt="close" /> : ''}
      </span>
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  removeToast: PropTypes.func,
};

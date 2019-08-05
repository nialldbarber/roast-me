import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import close from '../assets/icons/cross.svg';

export default function Toast({ error, message, link }) {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(false);
    console.log('clicked!');
  };

  return (
    <div className={`toast ${error && active ? 'active' : ''} toast-${error}`}>
      <p>
        <span>{message}</span>
        <Button icon={close} removeToast={handleClick} />
      </p>
    </div>
  );
}

Toast.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
};

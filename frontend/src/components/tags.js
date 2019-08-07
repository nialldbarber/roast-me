import React from 'react';
import PropTypes from 'prop-types';

export default function Tags({ value, change, submit }) {
  return (
    <form onSubmit={submit} className="tag-container">
      <label htmlFor="something">
        Tags:
        <input type="text" value={value} onChange={change} id="something" />
      </label>
    </form>
  );
}

Tags.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func,
  submit: PropTypes.func
};

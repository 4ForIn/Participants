/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ btnType, children, color }) {
  return (
    <button className={color} type={btnType === 'submit' ? 'submit' : 'button'}>
      {children}
    </button>
  );
}
Button.propTypes = {
  btnType: PropTypes.string,
  children: PropTypes.element.isRequired,
  color: PropTypes.oneOf(['button is-primary', 'button is-warning', 'button is-danger is-light']),
};
Button.defaultProps = {
  btnType: 'submit',
  color: 'button is-primary',
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ btnType, handleOnClick, isDisabled, children, color }) {
  return (
    <button
      className={color}
      disabled={isDisabled}
      type={btnType === 'submit' ? 'submit' : 'button'}
      onClick={handleOnClick}
      data-testid="primaryBtn"
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  btnType: PropTypes.string,
  handleOnClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
  color: PropTypes.oneOf([
    'button is-primary',
    'button is-warning',
    'button is-danger is-light',
    'button is-success',
  ]),
};
Button.defaultProps = {
  btnType: 'submit',
  handleOnClick: () => {
    /* noop */
  },
  isDisabled: false,
  color: 'button is-primary',
};

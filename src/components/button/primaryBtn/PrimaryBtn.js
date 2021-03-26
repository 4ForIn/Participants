import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ btnType, handleOnClick, children, color }) {
  return (
    <button
      className={color}
      type={btnType === 'submit' ? 'submit' : 'button'}
      onClick={() => handleOnClick()}
      data-testid="primaryBtn"
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  btnType: PropTypes.string,
  handleOnClick: PropTypes.func,
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
  color: 'button is-primary',
};

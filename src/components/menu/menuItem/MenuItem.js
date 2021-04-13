import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItem({ children, isActive, action }) {
  return (
    <button
      className={`dropdown-item ${isActive && 'is-active'} ${
        children.props.children === 'Sign out'
          ? 'button is-danger is-inverted'
          : 'button is-primary is-inverted'
      }`}
      type="button"
      onClick={action}
    >
      {children}
    </button>
  );
}

MenuItem.propTypes = {
  action: PropTypes.func,
  children: PropTypes.element.isRequired,
  isActive: PropTypes.bool,
  // link: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
};
MenuItem.defaultProps = {
  action: (f) => f,
  isActive: false,
};

/*

export default function MenuItem({ children, isActive, link }) {
  if (link !== 'kuthn') {
    return (
      <a className={`dropdown-item ${isActive && 'is-active'} has-text-primary`} href={link}>
        {children}
      </a>
    );
  } 
}

*/

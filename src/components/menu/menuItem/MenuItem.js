import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItem({ children, isActive, link }) {
  if (link !== 'kuthn') {
    return (
      <a className={`dropdown-item ${isActive && 'is-active'} has-text-primary`} href={link}>
        {children}
      </a>
    );
  }
  return (
    <button
      className={`dropdown-item ${isActive && 'is-active'} button is-danger is-inverted`}
      type="submit"
      onClick={() => {}}
    >
      {children}
    </button>
  );
}

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  isActive: PropTypes.bool,
  link: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
};
MenuItem.defaultProps = {
  isActive: false,
};

/*

export default function MenuItems() {
  return (
    <div className="navbar-dropdown ">
      <a className="navbar-item " href="bhrr">
        Sign in
      </a>
      <a className="navbar-item" href="bhrr">
        Sign up
      </a>
      <a className="navbar-item" href="bhrr">
        Sign out
      </a>
      <hr className="navbar-divider " />
      <div className="navbar-item has-text-info">Version 0.1.1</div>
    </div>
  );
}
 
 */

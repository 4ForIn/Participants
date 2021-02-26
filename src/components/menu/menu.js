/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
// import MenuItems from './menuItems';

// eslint-disable-next-line no-unused-vars
const MENU_STATE = {
  open: 'dropdown is-active',
  close: 'dropdown',
};

export default function Menu() {
  const [menuClass, setMenuClass] = useState(MENU_STATE.close);

  function menuTrigger() {
    if (menuClass === MENU_STATE.close) {
      setMenuClass(MENU_STATE.open);
    } else setMenuClass(MENU_STATE.close);
  }
  // menuClass === 'dropdown'? 'dropdown is-active' : 'dropdown';}
  return (
    <div className={`${menuClass} is-flex is-align-self-flex-end ml-1 mb-1`}>
      <div className="dropdown-trigger">
        <button
          className="button is-primary is-light is-small"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => menuTrigger()}
          type="button"
        >
          <span className=" pl-3 pr-0">Menu</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="bhrr" className="dropdown-item">
            Sign in
          </a>
          <a href="bhrr" className="dropdown-item is-active">
            Sign up
          </a>

          <hr className="dropdown-divider" />
          <a href="bhrr" className="dropdown-item">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

/*
<div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="bhrr" className="dropdown-item">
              Sign in
            </a>
            <a href="bhrr" className="dropdown-item is-active">
              Sign up
            </a>

            <hr className="dropdown-divider" />
            <a href="bhrr" className="dropdown-item">
              Sign out
            </a>
          </div>
        </div>

        --------------------------------------

return (
    <div className={menuClass}>
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={menuTrigger}
          type="button"
        >
          <span>Menu</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="bhrr" className="dropdown-item">
            Sign in
          </a>
          <a href="bhrr" className="dropdown-item is-active">
            Sign up
          </a>

          <hr className="dropdown-divider" />
          <a href="bhrr" className="dropdown-item">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );




*/

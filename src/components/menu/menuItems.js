import React from 'react';

export default function MenuItems() {
  return (
    <div className="dropdown-content ">
      <a className="dropdown-item " href="bhrr">
        Sign in
      </a>
      <a className="dropdown-item" href="bhrr">
        Sign up
      </a>
      <a className="dropdown-item" href="bhrr">
        Sign out
      </a>
      <hr className="navbar-divider " />
      <div className="dropdown-item has-text-info">Version 0.1.1</div>
    </div>
  );
}

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

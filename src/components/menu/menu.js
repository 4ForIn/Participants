import React from 'react';
import MenuItems from './menuItems';

export default function Menu() {
  return (
    <nav className="navbar is-spaced is-link" role="navigation" aria-label="dropdown navigation">
      <div className="navbar-item has-dropdown is-hoverable has-text-info">
        <p className="navbar-link">Menu</p>
        <MenuItems />
      </div>
    </nav>
  );
}

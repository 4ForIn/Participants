/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MENU_STATE } from './utils/MenuStrings';
import MenuAbout from './menuAbout';
import MenuBtn from './menuBtn';
import MenuItem from './menuItem';

function Menu({ isUserSignedIn, applicationVersion }) {
  const [menuTrigger, setMenuTrigger] = useState(MENU_STATE.close);

  function trigger() {
    if (menuTrigger === MENU_STATE.close) {
      setMenuTrigger(MENU_STATE.open);
    } else setMenuTrigger(MENU_STATE.close);
  }
  return (
    <div className={`${menuTrigger} is-flex is-align-self-flex-end ml-1 mb-1`}>
      <MenuBtn onClick={trigger} />
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {isUserSignedIn ? (
            <MenuItem link="kuthn">
              <>Sign out</>
            </MenuItem>
          ) : (
            <>
              <MenuItem link="kuthn11" isActive>
                <>Sign in</>
              </MenuItem>
              <MenuItem link="kuthn22">
                <>Sign up</>
              </MenuItem>
            </>
          )}
          <MenuAbout version={applicationVersion} />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isUserSignedIn: state.user.isSignedIn,
  applicationVersion: state.appState.version,
});
export default connect(mapStateToProps)(Menu);

Menu.propTypes = {
  isUserSignedIn: PropTypes.bool.isRequired,
  applicationVersion: PropTypes.string,
};
Menu.defaultProps = {
  applicationVersion: '',
};

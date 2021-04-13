import React, { useState } from 'react';
import { connect } from 'react-redux';
import { tryToSignOut } from 'actions/UserActions';
import { switchSignInForm, switchSignUpForm } from 'actions/AppStateActions';
import PropTypes from 'prop-types';
import { MENU_STATE } from './utils/MenuStrings';
import MenuAbout from './menuAbout';
import MenuBtn from './menuBtn';
import MenuItem from './menuItem';

function Menu({ isUserSignedIn, applicationVersion, signOut, signIn, signUp }) {
  const [menuTrigger, setMenuTrigger] = useState(MENU_STATE.close);

  function trigger() {
    if (menuTrigger === MENU_STATE.close) {
      setMenuTrigger(MENU_STATE.open);
    } else setMenuTrigger(MENU_STATE.close);
  }

  const handleBtn = (fn) => {
    fn();
    setMenuTrigger(MENU_STATE.close);
  };
  return (
    <div className={`${menuTrigger} is-flex is-align-self-flex-end ml-1 mb-1`}>
      <MenuBtn onClick={trigger} />
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {isUserSignedIn ? (
            <MenuItem action={() => handleBtn(signOut)}>
              <>Sign out</>
            </MenuItem>
          ) : (
            <>
              <MenuItem action={() => handleBtn(signIn)}>
                <>Sign in</>
              </MenuItem>
              <MenuItem action={() => handleBtn(signUp)}>
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

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(tryToSignOut()),
  signIn: () => dispatch(switchSignInForm()),
  signUp: () => dispatch(switchSignUpForm()),
});

const mapStateToProps = (state) => ({
  isUserSignedIn: state.user.isSignedIn,
  applicationVersion: state.appState.version,
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

Menu.propTypes = {
  isUserSignedIn: PropTypes.bool.isRequired,
  applicationVersion: PropTypes.string,
  signOut: PropTypes.func,
  signIn: PropTypes.func,
  signUp: PropTypes.func,
};
Menu.defaultProps = {
  applicationVersion: '',
  signOut: (f) => f,
  signIn: (f) => f,
  signUp: (f) => f,
};

/**
 * if user is signed in returns only Signout <MenuItem/>
 * if user is not signed in returns Sign in and Sign up <MenuItem/>s
 * <MenuBtn/> open/close menu's list
 * 
 * ----------------------------------
 
 */

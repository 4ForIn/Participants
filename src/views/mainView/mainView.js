import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mainViewSwitchFn, viewType } from './utils';
import styles from './MainView.module.scss';

function MainView(props) {
  const { isAuth, isUserSignedIn } = props;

  /**
   * viewType is a function that recives a boolean and returns string
   * (that is a property of the object returned by the mainViewSwitchFn function).
   * mainViewSwitchFn it is a function instead of conditional rendering.
   * The function takes a boolean argument and returns object with two properties,
   * witch corresponds to the state in witch the user is logged in or out.
   */

  return <div className={styles.wrapper}>{mainViewSwitchFn(isUserSignedIn)[viewType(isAuth)]}</div>;
}

const mapStateToProps = (state) => ({
  isAuth: state.appState.isAuth,
  isUserSignedIn: state.user.isSignedIn,
});
export default connect(mapStateToProps)(MainView);

MainView.propTypes = {
  isAuth: PropTypes.bool,
  isUserSignedIn: PropTypes.bool,
};
MainView.defaultProps = {
  isAuth: false,
  isUserSignedIn: false,
};

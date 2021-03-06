import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationView from 'views/authView/';
import AdminPanel from 'views/adminPanel';
import UserPanel from 'views/userPanel/UserPanel';
import styles from './mainView.module.scss';

function MainView(props) {
  const { isAuth, isUserSignedIn } = props;

  const viewType = (type) => (type ? 'authView' : 'main');

  const viewMode = (isSignedIn) => ({
    authView: <AuthenticationView />,
    main: (
      <>
        <UserPanel />
        {isSignedIn && <AdminPanel />}
      </>
    ),
  });
  return <div className={styles.wrapper}>{viewMode(isUserSignedIn)[viewType(isAuth)]}</div>;
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

/*
return (
    <div className={styles.wrapper}>
      {isAuth ? (
        <AuthenticationView />
      ) : (
        <>
          <UserDataForm />
          <Counter />
          {isUserSignedIn && <ControlPanel />}
        </>
      )}
    </div>
  );
*/

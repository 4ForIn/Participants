import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationView from 'views/authView/authenticationView';
import ControlPanel from 'components/controlPanel/controlPanel';
import Counter from 'components/counter/counter';
import UserDataForm from 'components/userDataForm/userDataForm';
import styles from './mainView.module.scss';

function MainView(props) {
  const { isAuth, isUserSignedIn } = props;

  const viewType = (type) => (type ? 'authView' : 'main');

  const viewSettings = (isSignedIn) => ({
    authView: <AuthenticationView />,
    main: (
      <>
        <UserDataForm />
        <Counter />
        {isSignedIn && <ControlPanel />}
      </>
    ),
  });
  return <div className={styles.wrapper}>{viewSettings(isUserSignedIn)[viewType(isAuth)]}</div>;
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

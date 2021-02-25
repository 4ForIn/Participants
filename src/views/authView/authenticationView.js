/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInput from 'components/formInput/formInput';
import Button from 'components/button/primaryBtn';

function AuthenticationView(props) {
  const { formType } = props;
  return (
    <div className="column is-narrow">
      {formType === 'signup' && (
        <>
          <FormInput id="name" labelText="Username:" placeholder="Name" type="text" />
          <FormInput
            id="congregation"
            labelText="Congregation:"
            placeholder="Congregation name"
            type="text"
          />
        </>
      )}
      <FormInput id="email" labelText="Email:" placeholder="Email" type="text" />
      <FormInput id="password" labelText="Password:" placeholder="Password" type="text" />

      <p className="control is-flex is-justify-content-space-evenly">
        <Button btnType="submit" color="button is-danger is-light">
          <>Cancel</>
        </Button>
        <Button btnType="submit" color="button is-success">
          <>{formType === 'signin' ? 'Sign in' : 'Sign up'}</>
        </Button>
      </p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  formType: state.appState.formType,
});
export default connect(mapStateToProps)(AuthenticationView);

AuthenticationView.propTypes = {
  formType: PropTypes.string,
};
AuthenticationView.defaultProps = {
  formType: 'signin',
};

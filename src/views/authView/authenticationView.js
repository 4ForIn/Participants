import React from 'react';
import { connect } from 'react-redux';
import { tryToSignIn, tryToSignUp } from 'actions/UserActions';
import { triggerAuthViewMode } from 'actions/AppStateActions';
import PropTypes from 'prop-types';
import FormInput from 'components/formInput';
import Button from 'components/button/primaryBtn';
import { useHandleFormState } from './hooks/useHandleFormState/UseHandleFormState';
import { useIsLoadingState } from './hooks/useLoadingState/UseLoadingState';

function AuthenticationView(props) {
  const { auth, formType, signIn, swithForm } = props;
  const { inputValues, handlerOnchange } = useHandleFormState();
  const { isLoading, triggerIsLoading } = useIsLoadingState();

  const submitForm = (event) => {
    event.preventDefault();
    triggerIsLoading(true);
    if (formType === 'signup') {
      auth(inputValues);
    } else signIn(inputValues);
    triggerIsLoading(false);
  };

  return (
    <div className="column is-narrow">
      <form onSubmit={(e) => submitForm(e)}>
        {formType === 'signup' && (
          <FormInput
            id="name"
            labelText="User name:"
            onChange={handlerOnchange}
            placeholder="Name"
            required
            type="text"
            value={inputValues.name}
          />
        )}
        <FormInput
          id="email"
          labelText="Email:"
          onChange={handlerOnchange}
          placeholder="Email"
          required
          type="email"
          value={inputValues.email}
        />
        <FormInput
          id="password"
          labelText="Password:"
          onChange={handlerOnchange}
          placeholder="Password"
          required
          type="password"
          value={inputValues.password}
        />

        <p className="control is-flex is-justify-content-space-evenly">
          <Button
            btnType="button"
            handleOnClick={() => swithForm(false)}
            color="button is-danger is-light"
            isDisabled={isLoading}
          >
            <>Cancel</>
          </Button>
          <Button
            btnType="submit"
            color={isLoading ? 'button is-warning' : 'button is-success'}
            isDisabled={isLoading}
          >
            <>{formType === 'signin' ? 'Sign in' : 'Sign up'}</>
          </Button>
        </p>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  auth: (inputs) => dispatch(tryToSignUp(inputs)),
  signIn: (inputs) => dispatch(tryToSignIn(inputs)),
  swithForm: () => dispatch(triggerAuthViewMode()),
});

const mapStateToProps = (state) => ({
  formType: state.appState.formType,
  isUserSignedIn: state.user.isSignedIn,
  userId: state.user.userId,
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationView);

AuthenticationView.propTypes = {
  auth: PropTypes.func,
  formType: PropTypes.oneOf(['signin', 'signup']),
  signIn: PropTypes.func,
  swithForm: PropTypes.func,
};
AuthenticationView.defaultProps = {
  auth: (f) => f,
  formType: 'signin',
  signIn: (f) => f,
  swithForm: () => {
    /* noop */
  },
};

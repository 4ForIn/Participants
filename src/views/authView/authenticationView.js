import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInput from 'components/formInput';
import Button from 'components/button/primaryBtn';

function AuthenticationView(props) {
  const { formType } = props;

  const [inputValues, setInputValue] = useState({
    congregation: '',
    email: '',
    name: '',
    password: '',
  });

  function handlerOnchange(event) {
    setInputValue((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  return (
    <div className="column is-narrow">
      {formType === 'signup' && (
        <>
          <FormInput
            id="name"
            labelText="Username:"
            onChange={handlerOnchange}
            placeholder="Name"
            type="text"
            value={inputValues.name}
          />
          <FormInput
            id="congregation"
            labelText="Congregation:"
            onChange={handlerOnchange}
            placeholder="Congregation name"
            type="text"
            value={inputValues.congregation}
          />
        </>
      )}
      <FormInput
        id="email"
        labelText="Email:"
        onChange={handlerOnchange}
        placeholder="Email"
        type="email"
        value={inputValues.email}
      />
      <FormInput
        id="password"
        labelText="Password:"
        onChange={handlerOnchange}
        placeholder="Password"
        type="password"
        value={inputValues.password}
      />

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

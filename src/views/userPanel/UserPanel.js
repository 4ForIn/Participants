/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/primaryBtn';
import Counter from 'components/counter';
import UserDataForm from 'components/userDataForm';
import { submitUserDataFormAction } from 'actions/CounterActions';
import { resetForminputs } from './utils/resetFormInputs/ResetFormInputs';
import { useCounterState } from './hooks/useCounterState';
import { useUserDataFormState } from './hooks/useUserDataFormState';

function UserPanel(props) {
  const { submitUserDataForm, userIdFromApp } = props;
  const { radioValue, onValueChange, inputOnchange } = useCounterState();
  const { inputValues, handlerOnchange, setInputValue } = useUserDataFormState();

  function handelBtnOnClick(event) {
    event.preventDefault();
    const data = {
      congregation: inputValues.congregation,
      meetingId: inputValues.id,
      participantsQuantity: parseInt(radioValue.value, 10) || parseInt(radioValue.otherNumber, 10),
      userId: userIdFromApp,
      zoomName: inputValues?.name || 'No name :(',
    };
    submitUserDataForm(data);
    resetForminputs(setInputValue);
  }

  return (
    <>
      <UserDataForm inputValue={inputValues} onChangeHandler={handlerOnchange} />
      <Counter inputChange={inputOnchange} valueOnChange={onValueChange} radioValues={radioValue} />
      <div className="is-flex is-justify-content-center">
        <Button
          btnType="submit"
          color="button is-warning"
          handleOnClick={(e) => handelBtnOnClick(e)}
        >
          <>Submit</>
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  userIdFromApp: state.user.userId,
});

const mapDispatchToProps = (dispatch) => ({
  submitUserDataForm: (a) => dispatch(submitUserDataFormAction(a)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);

UserPanel.propTypes = {
  submitUserDataForm: PropTypes.func,
  userIdFromApp: PropTypes.string,
};
UserPanel.defaultProps = {
  submitUserDataForm: () => {
    /* noop */
  },
  userIdFromApp: 'FakeUserIdFromApp',
};

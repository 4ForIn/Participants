/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { setQuantity } from 'actions/CounterActions';
import { fakeAddPartic } from 'actions/ParticipantsListActions';
import Button from 'components/button/primaryBtn';
import Counter from 'components/counter';
import UserDataForm from 'components/userDataForm';
import { makeUserId, resetForminputs } from './utils/handleBtn/handleBtn';
import { useCounterState } from './hooks/useCounterState';
import { useUserDataFormState } from './hooks/useUserDataFormState';

function UserPanel(props) {
  const { setParticipantsNumber } = props;
  const { radioValue, onValueChange, inputOnchange } = useCounterState();
  const { inputValues, handlerOnchange, setInputValue } = useUserDataFormState();

  function agregateUserInfo(congregation, meetingId, participantsQuantity, zoomName) {
    const userInfo = {
      congregation,
      isSignedIn: false,
      meetingId,
      name: '',
      participantsQuantity,
      userId: makeUserId(zoomName),
      zoomName,
    };
    resetForminputs(setInputValue);
    return userInfo;
  }

  return (
    <>
      <UserDataForm inputValue={inputValues} onChangeHandler={handlerOnchange} />
      <Counter inputChange={inputOnchange} valueOnChange={onValueChange} radioValues={radioValue} />
      <div className="is-flex is-justify-content-center">
        <Button
          btnType="submit"
          color="button is-warning"
          handleOnClick={() =>
            setParticipantsNumber(
              agregateUserInfo(
                inputValues.congregation,
                inputValues.id,
                parseInt(radioValue.value, 10) || parseInt(radioValue.otherNumber, 10),
                inputValues.name || 'krowka',
              ),
            )
          }
        >
          <>Submit</>
        </Button>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  setParticipantsNumber: (a) => dispatch(fakeAddPartic(a)),
});

export default connect(null, mapDispatchToProps)(UserPanel);

UserPanel.propTypes = {
  setParticipantsNumber: PropTypes.func,
};
UserPanel.defaultProps = {
  setParticipantsNumber: () => {
    /* noop */
  },
};

/* 

handleOnClick={() =>
            console.log(parseInt(radioValue.value, 10) || parseInt(radioValue.otherNumber, 10))
          }
*/

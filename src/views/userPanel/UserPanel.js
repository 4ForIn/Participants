import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDateFn } from 'utils/GetDateFn';
import { fakeAddPartic } from 'actions/ParticipantsListActions';
import { setUserProperties } from 'actions/UserActions';
import Button from 'components/button/primaryBtn';
import Counter from 'components/counter';
import UserDataForm from 'components/userDataForm';
import { resetForminputs } from './utils/resetFormInputs/ResetFormInputs';
import { useCounterState } from './hooks/useCounterState';
import { useUserDataFormState } from './hooks/useUserDataFormState';

function UserPanel(props) {
  const { setParticipantsNumber, setUserProps } = props;
  const { radioValue, onValueChange, inputOnchange } = useCounterState();
  const { inputValues, handlerOnchange, setInputValue } = useUserDataFormState();

  function handelBtnOnClick(congregation, meetingId, participantsQuantity, zoomName) {
    const userInfo = {
      congregation,
      isSignedIn: false,
      meetingId,
      participantsQuantity,
      userId: getDateFn()[2].replace(/\s+/g, ''),
      zoomName,
    };
    // if user is not signed in let set zoomName in Header - "Hello zoomName"
    setUserProps({
      congregation: userInfo?.congregation,
      name: userInfo?.zoomName,
      meetingId: userInfo?.meetingId,
      participantsQuantity: userInfo?.participantsQuantity,
      zoomName: userInfo?.zoomName,
    });
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
              handelBtnOnClick(
                inputValues.congregation,
                inputValues.id,
                parseInt(radioValue.value, 10) || parseInt(radioValue.otherNumber, 10),
                inputValues.name || 'No name :(',
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
  setParticipantsNumber: (a) => dispatch(fakeAddPartic(a)),
  setUserProps: (a) => dispatch(setUserProperties(a)),
});

export default connect(null, mapDispatchToProps)(UserPanel);

UserPanel.propTypes = {
  setParticipantsNumber: PropTypes.func,
  setUserProps: PropTypes.func,
};
UserPanel.defaultProps = {
  setParticipantsNumber: () => {
    /* noop */
  },
  setUserProps: () => {
    /* noop */
  },
};

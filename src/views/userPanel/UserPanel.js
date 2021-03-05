/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setQuantity } from 'actions/counterActions';
import Button from 'components/button/primaryBtn';
import Counter from 'components/counter/counter';
import UserDataForm from 'components/userDataForm';
import { useCounterState } from './hooks/useCounterState';
import { useUserDataFormState } from './hooks/useUserDataFormState';

function UserPanel(props) {
  const { setParticipantsNumber } = props;
  const { radioValue, onValueChange, inputOnchange } = useCounterState();
  const { inputValues, handlerOnchange } = useUserDataFormState();

  return (
    <>
      <UserDataForm inputValue={inputValues} onChangeHandler={handlerOnchange} />
      <Counter
        btnOnClick={(b) => setParticipantsNumber(b)}
        inputChange={inputOnchange}
        valueOnChange={onValueChange}
        radioValues={radioValue}
      />
      <div className="is-flex is-justify-content-center">
        <Button
          btnType="button"
          color="button is-warning"
          handleOnClick={() =>
            console.log(parseInt(radioValue.value, 10) || parseInt(radioValue.otherNumber, 10))
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
  setParticipantsNumber: (a) => dispatch(setQuantity(a)),
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
const [inputValues, setInputValue] = useState({
    congregation: '',
    id: '',
    name: '',
  });

  function handlerOnchange(event) {
    setInputValue((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
import PropTypes from 'prop-types';

  UserPanel.propTypes = {
  isAuth: PropTypes.bool,
  isUserSignedIn: PropTypes.bool,
};
UserPanel.defaultProps = {
  isAuth: false,
  isUserSignedIn: false,
};
const mapStateToProps = (state) => ({
  isAuth: state.appState.isAuth,
  isUserSignedIn: state.user.isSignedIn,
});
*/

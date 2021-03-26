import React from 'react';
import PropTypes from 'prop-types';
import styles from './userDataForm.module.scss';
import { CONGREGATION, ID, NAME, NUMBER, TEXT, ZOOM_NAME } from './utils/UserDataFormStrings';
import FormItem from './formItem/FormItem';

export default function UserDataForm({ inputValue, onChangeHandler }) {
  return (
    <div className={styles.wrapper}>
      <div className="section pt-2 pb-1">
        <div className="box">
          <FormItem
            id={CONGREGATION}
            label="Congregation name"
            onChangeFn={onChangeHandler}
            value={inputValue.congregation}
            type={TEXT}
            placeholder="congregation"
          />

          <FormItem
            id={ID}
            label="Meeting ID"
            onChangeFn={onChangeHandler}
            value={inputValue.id}
            type={NUMBER}
            placeholder="Meeting ID"
          />
          <FormItem
            id={NAME}
            label={ZOOM_NAME}
            onChangeFn={onChangeHandler}
            value={inputValue.name}
            type={TEXT}
            placeholder="Zoom name"
          />
        </div>
      </div>
    </div>
  );
}
UserDataForm.propTypes = {
  inputValue: PropTypes.shape({
    congregation: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

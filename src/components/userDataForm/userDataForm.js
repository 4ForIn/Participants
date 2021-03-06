/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
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

/*
return (
    <div className={styles.wrapper}>
      <div className="section pt-2 pb-1">
        <div className="box">
          <div className="block is-flex align-items is-justify-content-space-between mx-3">
            <div className="is-align-self-stretch">
              <p>Your congregation name:</p>
            </div>
            <div>
              <input className="input is-primary is-small" id={} value={} type="text" placeholder="congregation" />
            </div>
          </div>

          <div className="block is-flex align-items is-justify-content-space-between mx-3">
            <div>
              <p>Meeting ID:</p>
            </div>
            <div>
              <input className="input is-primary is-small" type="number" placeholder="Meeting ID" />
            </div>
          </div>
          <div className="mx-4 px-3">
            <label className="tag is-primary">Your Zoom name:</label>
            <input className="input is-primary is-small" type="text" placeholder="zoom name" />
          </div>
        </div>
      </div>
    </div>
  );
*/

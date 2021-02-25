/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './userDataForm.module.scss';

export default function UserDataForm() {
  return (
    <div className={styles.wrapper}>
      <div className="section pt-2 pb-1">
        <div className="box">
          <div className="block is-flex align-items is-justify-content-space-between mx-3">
            <div className="is-align-self-stretch">
              <p>Your congregation name:</p>
            </div>
            <div>
              <input className="input is-primary is-small" type="text" placeholder="congregation" />
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
}

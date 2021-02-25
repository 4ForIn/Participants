/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from 'components/button/primaryBtn';
import styles from './counter.module.scss';

export default function Counter() {
  return (
    <div className={styles.wrapper}>
      <h3 className="section py-2 is-flex is-justify-content-space-evenly">
        How many persons use this device to listen to the meeting program?
      </h3>
      <div className="is-flex-tablet is-justify-content-center is-align-items-center">
        <div className="control m-2 p-1 is-flex is-justify-content-space-evenly">
          <label className="radio mx-2">
            <input className="mr-1" type="radio" name="answer " />1
          </label>
          <label className="radio mx-2">
            <input className="mr-1" type="radio" name="answer" />2
          </label>
          <label className="radio mx-2">
            <input className="mr-1" type="radio" name="answer" />3
          </label>
          <label className="radio mx-2">
            <input className="mr-1" type="radio" name="answer" />4
          </label>
          <label className="radio mx-2">
            <input className="mr-1" type="radio" name="answer" />
            other
          </label>
        </div>

        <div className="mr-1 is-flex is-justify-content-space-evenly">
          <div>
            <label className="tag is-primary">Other number:</label>
            <input className="input is-primary is-small" type="number" placeholder="other" />
          </div>
        </div>
        <div className="is-flex is-justify-content-center">
          <Button btnType="submit">
            <>Submit</>
          </Button>
        </div>
      </div>
    </div>
  );
}

/* 
className="section box is-flex align-items is-justify-content-space-evenly"
*/

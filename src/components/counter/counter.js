import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.scss';

export default function Counter({ inputChange, valueOnChange, radioValues }) {
  return (
    <div className={styles.wrapper}>
      <h3 className="section py-2 is-flex is-justify-content-space-evenly">
        How many persons use this device to listen to the meeting program?
      </h3>
      <div className="is-flex-tablet is-justify-content-center is-align-items-center">
        <div className="control m-2 p-1 is-flex is-justify-content-space-evenly">
          <label className="radio mx-2" htmlFor="1">
            <input
              className="mr-1"
              type="radio"
              id="1"
              value="1"
              checked={radioValues.value === '1'}
              onChange={valueOnChange}
            />
            1
          </label>
          <label className="radio mx-2" htmlFor="a2">
            <input
              className="mr-1"
              type="radio"
              id="2"
              value="2"
              checked={radioValues.value === '2'}
              onChange={valueOnChange}
            />
            2
          </label>
          <label className="radio mx-2" htmlFor="3">
            <input
              className="mr-1"
              type="radio"
              id="3"
              value="3"
              checked={radioValues.value === '3'}
              onChange={valueOnChange}
            />
            3
          </label>
          <label className="radio mx-2" htmlFor="a4">
            <input
              className="mr-1"
              type="radio"
              id="4"
              value="4"
              checked={radioValues.value === '4'}
              onChange={valueOnChange}
            />
            4
          </label>
          <label className="radio mx-2" htmlFor="other">
            <input
              className="mr-1"
              type="radio"
              id="other"
              value="other"
              checked={radioValues.value === 'other'}
              onChange={valueOnChange}
            />
            other
          </label>
        </div>

        <div className="mr-1 is-flex is-justify-content-space-evenly">
          <div className="control">
            <label htmlFor="inp">
              <span className="tag is-primary">Other number:</span>
              <input
                className="input is-primary is-small"
                id="inp"
                type="number"
                placeholder="other"
                disabled={radioValues.value !== 'other'}
                value={radioValues.otherNumber}
                onChange={inputChange}
                required
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

Counter.propTypes = {
  inputChange: PropTypes.func,
  valueOnChange: PropTypes.func,
  radioValues: PropTypes.shape({
    otherNumber: PropTypes.string,
    value: PropTypes.string,
  }),
};
Counter.defaultProps = {
  inputChange: () => {
    /* noop */
  },
  valueOnChange: () => {
    /* noop */
  },
  radioValues: PropTypes.shape({
    otherNumber: '0',
    value: '0',
  }),
};

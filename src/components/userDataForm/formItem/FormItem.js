/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_CLASS, ZOOM_NAME } from '../utils/UserDataFormStrings';

export default function FormItem(props) {
  const { id, label, onChangeFn, placeholder, type, value } = props;
  return (
    <>
      {label === ZOOM_NAME ? (
        <div className="mx-4 px-3">
          <label className="tag is-primary">{`${label}:`}</label>
          <input
            className={INPUT_CLASS}
            id={id}
            onChange={onChangeFn}
            value={value}
            type={type}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div className="block is-flex align-items is-justify-content-space-between mx-3">
          <div>
            <p>{label}:</p>
          </div>
          <div>
            <input
              className={INPUT_CLASS}
              id={id}
              onChange={onChangeFn}
              value={value}
              type={type}
              placeholder={placeholder}
            />
          </div>
        </div>
      )}
    </>
  );
}

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChangeFn: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
FormItem.defaultProps = {
  label: '',
};

import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput(props) {
  const { helpMassage: helpMessage, id, labelText, placeholder, type } = props;

  return (
    <>
      <div className="field">
        <label className="label" htmlFor={id}>
          {labelText}
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type={type} placeholder={placeholder} id={id} />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
        </label>
        <p className="help is-success">{helpMessage}</p>
      </div>
    </>
  );
}
FormInput.propTypes = {
  helpMassage: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
FormInput.defaultProps = {
  helpMassage: '',
};

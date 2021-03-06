import React from 'react';
import PropTypes from 'prop-types';

export default function MenuBtn({ onClick }) {
  return (
    <div className="dropdown-trigger">
      <button
        className="button is-primary is-light is-small"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        onClick={() => onClick()}
        type="button"
      >
        <span className=" pl-3 pr-0">Menu</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}
MenuBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

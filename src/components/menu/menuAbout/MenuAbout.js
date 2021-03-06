import React from 'react';
import PropTypes from 'prop-types';

export default function MenuAbout({ version }) {
  return (
    <>
      <hr className="dropdown-divider" />
      <p className="dropdown-item has-text-primary">Version {version}</p>
    </>
  );
}

MenuAbout.propTypes = {
  version: PropTypes.string.isRequired,
};

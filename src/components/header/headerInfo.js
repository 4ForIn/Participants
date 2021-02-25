import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderInfo({ userName, date }) {
  return (
    <div className="is-flex-tablet">
      <p className="mx-5 my-3">{`You are signed in as ${userName}`}</p>
      <p className="mx-5 my-3">{`Today is: ${date}sunday 17th february`}</p>
    </div>
  );
}

HeaderInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderInfo({ userName, date }) {
  return (
    <div className="is-flex-tablet">
      <p className="mx-5 my-3">{`Hello ${userName}`}</p>
      <p className="mx-5 my-3">{`Today is: ${date}`}</p>
    </div>
  );
}

HeaderInfo.propTypes = {
  userName: PropTypes.string,
  date: PropTypes.string,
};
HeaderInfo.defaultProps = {
  userName: '😍',
  date: 'very nice day 👍',
};

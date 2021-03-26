/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export default function TableItem({ name, quantity }) {
  return (
    <tr>
      <td>{name}</td>
      <td className="pl-5">{quantity}</td>
    </tr>
  );
}

TableItem.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
};
TableItem.defaultProps = {
  name: 'No name :(',
  quantity: -2,
};

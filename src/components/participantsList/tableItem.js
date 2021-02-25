/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export default function TableItem({ name, quantity, onClick }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td className="px-5">
        <button type="button" onClick={() => onClick('+')}>
          +
        </button>
        <button type="button" onClick={() => onClick('-')}>
          -
        </button>
      </td>
    </tr>
  );
}

TableItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

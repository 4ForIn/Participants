/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export default function TableItem({ handleOnClick, name, quantity }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td className="px-5">
        <button type="button" onClick={() => handleOnClick(1)}>
          +
        </button>
        <button type="button" onClick={() => handleOnClick(-1)}>
          -
        </button>
      </td>
    </tr>
  );
}

TableItem.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  handleOnClick: PropTypes.func,
};
TableItem.defaultProps = {
  name: 'No name :(',
  quantity: 1,
  handleOnClick: () => {
    /* noop */
  },
};

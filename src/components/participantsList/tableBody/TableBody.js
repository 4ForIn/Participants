import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ children }) {
  return (
    <table className="table table is-striped table is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="Pariicipant Zoom name">Name</abbr>
          </th>
          <th>
            <abbr title="How many persons are listening">Quantity</abbr>
          </th>          
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

TableBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
TableBody.defaultProps = {
  children: (
    <tr>
      <td> </td>
      <td>No participants yet 🤷‍♀️</td>
      <td> </td>
    </tr>
  ),
};

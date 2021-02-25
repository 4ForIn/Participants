/* eslint-disable no-console */
import React from 'react';
import TableItem from './tableItem';

export default function ParticipantsList() {
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

          <th>
            <abbr title="If needed make a correction">Correction</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        <TableItem name="Veska" quantity={1} onClick={(a) => console.log(a)} />
        <TableItem name="sem. Vos" quantity={3} onClick={(a) => console.log(a)} />
        <TableItem name="Stefka Jivko Stanislav" quantity={4} onClick={(a) => console.log(a)} />
      </tbody>
    </table>
  );
}

import React from 'react';
import TableItem from '../tableItem';

// fn that recives array of participants objects and returns array of <TableItem/>s
export const toArrayOfTableItems = (data1) => {
  const arrayOfTableItems = data1.map((item) => (
    <TableItem key={item.userId} name={item.zoomName} quantity={item.participantsQuantity} />
  ));
  return arrayOfTableItems;
};

/**
 * participant object =
 * {congregation: '', isSignedIn: bool, meetingId: '', name: '', participantsQuantity: 1, userId: '', zoomName: ''}
 * data1 is from state - participantsListReducer = [];
 */

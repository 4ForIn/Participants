/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableBody from './tableBody';
import { toArrayOfTableItems } from './utils/ToArrayOfTableItems';

function ParticipantsList({ data }) {
  // returns a participants list in the form of a table - <TableBody/> with <TableItem/>s as a children

  return <TableBody>{toArrayOfTableItems(data)}</TableBody>;
}
const mapStateToProps = (state) => ({
  data: state.participantsList,
});
export default connect(mapStateToProps)(ParticipantsList);

ParticipantsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
ParticipantsList.defaultProps = {
  data: [],
};

/* 
data is an array of participants objects
toArrayOfTableItems is a fn, that recives array of participants objects 
and returns <TableItem/>'s and passes by onClick fn.
*/

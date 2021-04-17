/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { db } from 'services/firebase/Firebase';
import { firestoreonSnapshotAction } from 'actions/ParticipantsListActions';
import TableBody from './tableBody';
import { toArrayOfTableItems } from './utils/ToArrayOfTableItems';

function ParticipantsList({ data, handelFirestoreSnapshot }) {
  useEffect(() => {
    const unsubscribe = db.collection('meetingParticipants').onSnapshot((snapshot) => {
      const change = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      handelFirestoreSnapshot(change);
    });
    return () => unsubscribe();
  }, [handelFirestoreSnapshot]);

  // returns a participants list in the form of a table - <TableBody/> with <TableItem/>s as a children

  return <TableBody>{toArrayOfTableItems(data)}</TableBody>;
}

const mapDispatchToProps = (dispatch) => ({
  handelFirestoreSnapshot: (a) => dispatch(firestoreonSnapshotAction(a)),
});
const mapStateToProps = (state) => ({
  data: state.participantsList.reverse(),
});
export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsList);

ParticipantsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handelFirestoreSnapshot: PropTypes.func,
};
ParticipantsList.defaultProps = {
  data: [],
  handelFirestoreSnapshot: (f) => f,
};

/* 
data is an array of participants objects
toArrayOfTableItems is a fn, that recives array of participants objects 
and returns <TableItem/>'s and passes by onClick fn.

participant object from firestore colection:
  {congregation: 'a',  
  meetingId: 'df54',              
  participantsQuantity: 1,
  userId: 'fghbdss',
  zoomName: 'ffgggh',}
*/

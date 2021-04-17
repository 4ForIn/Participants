import React from 'react';
import { connect } from 'react-redux';
import { firestoreonSnapshotAction } from 'actions/ParticipantsListActions';
import PropTypes from 'prop-types';
import QuantityCorrection from 'components/quantityCorrection';
import ParticipantsList from 'components/participantsList';
import { countParticipants } from './utils/CountParticipants';
import styles from './AdminPanel.module.scss';

function AdminPanel(props) {
  const { quantity, someFn } = props;

  return (
    <div className={styles.wrapper}>
      <div className="py-0 mx-2 column is-flex is-flex-direction-column">
        <ParticipantsList />
        <QuantityCorrection number={quantity} fakeProp={someFn} />
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  someFn: (a) => dispatch(firestoreonSnapshotAction(a)),
});

const mapStateToProps = (state) => ({
  quantity: countParticipants(state.participantsList),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);

AdminPanel.propTypes = {
  quantity: PropTypes.number,
  someFn: PropTypes.func,
};
AdminPanel.defaultProps = {
  someFn: () => {
    /* noop */
  },
  quantity: -1,
};

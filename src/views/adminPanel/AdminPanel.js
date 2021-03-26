import React from 'react';
import { connect } from 'react-redux';
import { addParticipant } from 'actions/ParticipantsListActions';
import PropTypes from 'prop-types';
import AddParticipantsForm from 'components/quantityCorrection';
import ParticipantsList from 'components/participantsList';
import styles from './AdminPanel.module.scss';

function AdminPanel(props) {
  const { quantity, someFn } = props;
  
  return (
    <div className={styles.wrapper}>
      <div className="py-0 mx-2 column is-flex is-flex-direction-column">
        <ParticipantsList />
        <AddParticipantsForm number={quantity} fakeProp={someFn}/>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  someFn: (a) => dispatch(addParticipant(a)),
});

const mapStateToProps = (state) => ({
  quantity: state.participantsList.length,
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

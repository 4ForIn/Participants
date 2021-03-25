import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddParticipantsForm from 'components/addParticipantsForm';
import ParticipantsList from 'components/participantsList';
import styles from './AdminPanel.module.scss';

function AdminPanel(props) {
  const { quantity } = props;
  return (
    <div className={styles.wrapper}>
      <div className="py-0 mx-2 column is-flex is-flex-direction-column">
        <ParticipantsList />
        <AddParticipantsForm number={quantity}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  quantity: state.participantsList.length,
});
export default connect(mapStateToProps)(AdminPanel);

AdminPanel.propTypes = {
  quantity: PropTypes.number,
};
AdminPanel.defaultProps = {
  quantity: -1,
};

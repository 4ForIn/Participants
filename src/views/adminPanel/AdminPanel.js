import React from 'react';
// import PropTypes from 'prop-types';
import AddParticipantsForm from 'components/addParticipantsForm';
import ParticipantsList from 'components/participantsList';
import styles from './AdminPanel.module.scss';

export default function AdminPanel() {
  return (
    <div className={styles.wrapper}>
      <div className="py-0 mx-2 column is-flex is-flex-direction-column">
        <ParticipantsList />
        <AddParticipantsForm />
      </div>
    </div>
  );
}

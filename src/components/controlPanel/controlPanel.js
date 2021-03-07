import React from 'react';
// import PropTypes from 'prop-types';
import AddParticipantsForm from 'components/addParticipantsForm';
import ParticipantsList from 'components/participantsList';
import styles from './controlPanel.module.scss';

export default function ControlPanel() {
  // const { children } = props;
  return (
    <div className={styles.wrapper}>
      <div className="py-0 mx-2 column is-flex is-flex-direction-column">
        <ParticipantsList />
        <AddParticipantsForm />
      </div>
    </div>
  );
}
/* ControlPanel.propTypes = {
  children: PropTypes.element.isRequired,
}; */

/*
div className={styles.wrapper}>
      <div className="py-0 mx-2 column is-flex is-flex-direction-column is-align-items-center">
        <ParticipantsList />
        <AddParticipantsForm />
        <p>
          All meeting participants number: <span>17</span>
        </p>
        <Button btnType="button">Send to the secretary</Button>
      </div>
    </div>
 */

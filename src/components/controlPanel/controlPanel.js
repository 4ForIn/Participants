import React from 'react';
import QuantityCorrection from 'components/quantityCorrection';
import ParticipantsList from 'components/participantsList';
import styles from './controlPanel.module.scss';

export default function ControlPanel() {
  return (
    <div className={styles.wrapper}>
      <div className="py-0 mx-2 column is-flex is-flex-direction-column">
        <ParticipantsList />
        <QuantityCorrection />
      </div>
    </div>
  );
}

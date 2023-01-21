import React from 'react';
import styles from './OpenButton.module.scss';

interface Props {
  toggleOpenOtherDays: any
}

export const OpenButton = ({toggleOpenOtherDays}: Props) => {

  const toggleOpenPopup = () => {
    toggleOpenOtherDays();
  }

  return (
    <button className={styles.open_button} onClick={toggleOpenPopup}>Открыть</button>
  )
}
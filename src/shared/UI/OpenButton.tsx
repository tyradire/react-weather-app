import React from 'react';
import styles from './OpenButton.module.scss';

interface Props {
  toggleOpenOtherDays: any,
  text: string
}

export const OpenButton = ({toggleOpenOtherDays, text}: Props) => {

  const toggleOpenPopup = () => {
    toggleOpenOtherDays();
  }

  return (
    <button className={styles.open_button} onClick={toggleOpenPopup}>{text}</button>
  )
}
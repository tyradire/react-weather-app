import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import styles from './Days.module.scss';


interface Props {
  day: string,
  icon: string,
  temp: number,
  info: string
}

export const Card = ({ day, icon, temp, info }: Props) => {

  return (
    <div className={styles.card}>
      <p className={styles.card__day_time}>{day}</p>
      <div className={styles.card__icon}>
        <GlobalSvgSelector id={icon} />
      </div>
      <div className={styles.card__temp}>
        <p className={styles.card__temp_day}>{temp.toFixed()}&deg;</p>
      </div>
      <p className={styles.card__weather}>{info}</p>
    </div>
  )
}
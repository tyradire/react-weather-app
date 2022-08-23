import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Day } from './Days';
import styles from './Days.module.scss';


interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {

  const { day_name, day_info, icon_id, temp_day, temp_night, info  } = day;

  return (
    <div className={styles.card}>
      <p className={styles.card__day_name}>{day_name}</p>
      <p className={styles.card__date}>{day_info}</p>
      <div className={styles.card__icon}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.card__temp}>
        <p className={styles.card__temp_day}>{temp_day}</p>
        <p className={styles.card__temp_night}>{temp_night}</p>
      </div>
      <p className={styles.card__weather}>{info}</p>
    </div>
  )
}
import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import styles from './ThisDay.module.scss';

interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <div className={styles.this_day}>
      <div className={styles.this_day__block_info}>
        <div className={styles.this_day__degree}>
          20 &deg; <span className={styles.this_day__today}>Сегодня</span>
        </div>
        <GlobalSvgSelector id='sunny' />
      </div>
      <div className={styles.this_day__block_location}>
        <p className={styles.this_day__time}>Время: <span>12:34</span></p>
        <p className={styles.this_day__city}>Город: <span>Санкт-Петербург</span></p>
      </div>
    </div>
  )
}
import React from 'react'
import { Card } from './Card';
import styles from './Days.module.scss';
import { Tabs } from './Tabs';

interface Props {}

export interface Day {
  day_name: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {

  const days: Day [] = [
    {
      day_name: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'sunny',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Завтра',
      day_info: '29 авг',
      icon_id: 'rainy_sunny',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь',
    },
    {
      day_name: 'Ср',
      day_info: '30 авг',
      icon_id: 'bit_rainy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь',
    },
    {
      day_name: 'Чт',
      day_info: '28 авг',
      icon_id: 'cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Пт',
      day_info: '28 авг',
      icon_id: 'rainy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Сб',
      day_info: '28 авг',
      icon_id: 'sunny',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Вс',
      day_info: '28 авг',
      icon_id: 'sunny',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
  ];

  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {
          days.map((day: Day) => <Card day={day} key={day.day_name} />)
        }
      </div>
    </>
  )
}
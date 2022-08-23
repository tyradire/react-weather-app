import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/Components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/Components/ThisDayInfo/ThisDayItem';
import styles from './Popup.module.scss';

interface Props {}

export const Popup = (props: Props) => {

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];

  return (
    <>
      <div className={styles.cover}></div>
      <div className={styles.popup}>
        <div className={styles.popup__day}>
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
        <div className={styles.this_day_info}>
          <div className={styles.this_day_info__items}>
            {
              items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item} />)
            }
          </div>
        </div>
        <div className={styles.popup__close}>
            <GlobalSvgSelector id='close' />
          </div>
      </div>
    </>
  )
}
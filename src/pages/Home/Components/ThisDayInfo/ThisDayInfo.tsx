import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../../../store/store';
import { IWeather } from '../../../../store/types/currentWeather';
import styles from './ThisDayInfo.module.scss';
import { ThisDayItem } from './ThisDayItem';

interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}


export const ThisDayInfo = (props: Props) => {

  const {weather, isLoading} : {weather: IWeather, isLoading: boolean} = useTypedSelector(state => state.current);

  const [windDeg, setWindDeg] = useState('');
  const [windPower, setWindPower] = useState('');

  const checkWindDeg = () => {
    if (weather.wind.deg < 23) {
      setWindDeg('северный')
    } else if (weather.wind.deg < 68) {
      setWindDeg('северо-восточный')
    } else if (weather.wind.deg < 113) {
      setWindDeg('восточный')
    } else if (weather.wind.deg < 158) {
      setWindDeg('юго-восточный')
    } else if (weather.wind.deg < 203) {
      setWindDeg('южный')
    } else if (weather.wind.deg < 248) {
      setWindDeg('юго-западный')
    } else if (weather.wind.deg < 293) {
      setWindDeg('западный')
    } else if (weather.wind.deg < 338) {
      setWindDeg('северо-западный')
    } else {
      setWindDeg('северный')
    }
  }

  const checkWindPower = () => {
    if (weather.wind.speed < 0.2) {
      setWindPower('штиль');
    } else if (weather.wind.speed < 1.5) {
      setWindPower('тихий');
    } else if (weather.wind.speed < 3.3) {
      setWindPower('лёгкий');
    } else if (weather.wind.speed < 5.4) {
      setWindPower('слабый');
    } else if (weather.wind.speed < 7.9) {
      setWindPower('умеренный');
    } else if (weather.wind.speed < 10.7) {
      setWindPower('свежий');
    } else if (weather.wind.speed < 13.8) {
      setWindPower('сильный');
    } else if (weather.wind.speed < 17.1) {
      setWindPower('крепкий');
    } else if (weather.wind.speed < 20.7) {
      setWindPower('очень крепкий');
    } else {
      setWindPower('шторм');
    } 
  }

  useEffect(() => {
    if (!isLoading) {
    checkWindDeg();
    checkWindPower(); }
  },[isLoading])

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${weather?.main?.temp || 0}° - ощущается как ${weather?.main?.feels_like || 0}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${weather?.main?.pressure || 0} мм ртутного столба - нормальное`,
    },
    {
      icon_id: 'precipitation',
      name: 'Влажность',
      value: `${weather?.main?.humidity || 0}%`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${weather?.wind?.speed.toFixed() || 0} м/с ${windDeg} - ${windPower}`,
    },
  ];

  return (
    <div className={styles.this_day_info}>
      <div className={styles.this_day_info__items}>
        { 
          items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item} />)
        }
      </div>
    </div>
  )
}
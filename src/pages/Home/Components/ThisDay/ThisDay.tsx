import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { fetchCurrentWeather } from '../../../../store/action-creators/currentWeather';
import { useTypedSelector } from '../../../../store/store';
import { IWeather } from '../../../../store/types/currentWeather';
import styles from './ThisDay.module.scss';

interface Props {}

export const ThisDay = (props: Props) => {

  const dispatch = useDispatch();

  const {weather, isLoading}: { weather: IWeather; isLoading: boolean } = useTypedSelector(state => state.current);

  const [currentTiming, setCurrentTiming] = useState('');

  const {currentCity} = useTypedSelector(state => state.selectedDay);

  useEffect(() => {
    dispatch(fetchCurrentWeather(55.75, 37.61) as any)
  }, [])

  const checkCurrentTiming = () => {
    const date = new Date(weather.date * 1000);
    setCurrentTiming(date.toString().split(' ')[4].slice(0,5))
  }

  useEffect(() => {
    if (!isLoading) {
    checkCurrentTiming(); }
  },[isLoading])

  return (
    <div className={styles.this_day}>
      <div className={styles.this_day__block_info}>
        <div className={styles.this_day__degree}>
          { !isLoading ?
            weather.main.temp : 0
          }&deg; <span className={styles.this_day__today}>Сейчас</span>
        </div>
        <GlobalSvgSelector id={weather.icon} />
      </div>
      <div className={styles.this_day__block_location}>
        <p className={styles.this_day__time}>Обновлено: <span>{currentTiming}</span></p>
        <p className={styles.this_day__city}>Город: <span>{currentCity}</span></p>
      </div>
    </div>
  )
}
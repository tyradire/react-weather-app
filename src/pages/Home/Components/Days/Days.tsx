import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchFiveDaysWeather } from '../../../../store/action-creators/fiveDaysWeather';
import { useTypedSelector } from '../../../../store/store';
import { Card } from './Card';
import styles from './Days.module.scss';
import { Tabs } from './Tabs';

interface Props {}

export interface Day {
  day_time: string;
  icon_id: string;
  temp_day: string;
  info: string;
}

export const Days = (props: Props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiveDaysWeather(55.75, 37.61) as any)
  }, [])

  const {forecast, isLoading} = useTypedSelector(state => state.forecast);
  const {selectedDay, currentDay} = useTypedSelector(state => state.selectedDay);

  return (
    <>
      <Tabs />
      <div className={styles.days}>
        { !isLoading ? 
            selectedDay === currentDay.toLocaleDateString().split('.').reverse().join('-') ?
              forecast.slice(0,8)
                .map((elem: any, index: number) => 
                  <Card 
                    day={elem.time}
                    icon={elem.icon}
                    temp={elem.main.temp - 273.15}
                    info={elem.status}
                    key={index}
                  />
                ) 
              : 
              forecast.filter((elem: any) => elem.date === selectedDay)
              .map((elem: any, index: number) => 
                <Card 
                  day={elem.time}
                  icon={elem.icon}
                  temp={elem.main.temp - 273.15}
                  info={elem.status}
                  key={index}
                />)
          : null
        }
      </div>
    </>
  )
}
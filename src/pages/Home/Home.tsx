import React from 'react'
import { Days } from './Components/Days/Days';
import { ThisDay } from './Components/ThisDay/ThisDay';
import { ThisDayInfo } from './Components/ThisDayInfo/ThisDayInfo';
import styles from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.home__wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}
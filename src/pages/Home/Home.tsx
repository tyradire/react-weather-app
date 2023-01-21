import React, { useEffect, useState } from 'react'
import { OpenButton } from '../../shared/UI/OpenButton';
import { Days } from './Components/Days/Days';
import { ThisDay } from './Components/ThisDay/ThisDay';
import { ThisDayInfo } from './Components/ThisDayInfo/ThisDayInfo';
import styles from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {

  const [mobileSize, setMobileSize] = useState<boolean>(window.innerWidth > 768);
  const [openOtherDays, setOpenOtherDays] = useState<boolean>(false);
  
  useEffect(() => {
    window.addEventListener("resize", (event) => setMobileSize(window.innerWidth > 768));
  },[])

  const toggleOpenOtherDays = () => {
    setOpenOtherDays(!openOtherDays);
    console.log(openOtherDays)
  }

  return (
    <div className={styles.home}>
      <div className={styles.home__wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      {mobileSize ? <Days /> : <OpenButton toggleOpenOtherDays={toggleOpenOtherDays} />}
      {openOtherDays && <Days />}
    </div>
  )
}
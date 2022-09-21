import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/use-theme';
import { fetchCurrentWeather } from '../../store/action-creators/currentWeather';
import { fetchFiveDaysWeather } from '../../store/action-creators/fiveDaysWeather';
import { DayForecastActionTypes } from '../../store/types/select';
import { options } from '../../utils/cities';
import styles from './Header.module.scss';

interface Props {}

export const Header = (props: Props) => {

  const dispatch = useDispatch();

  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    console.log(theme)
  }

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? 'hsla(0, 0%, 31%);' : 'hsla(215, 100%, 64%, 0.2);',
      width: '194px',
      height: '37px',
      borderRadius: '10px',
      border: 'none',
      '&:hover': {
        backgroundColor: theme === 'dark' ? 'hsla(0, 0%, 31%, .7);' : 'hsla(215, 100%, 64%, 0.3);',
        cursor: 'pointer'
      }
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000',
    }),
    option: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000',
      backgroundColor: theme === 'dark' ? 'hsla(0, 0%, 31%);' : 'hsla(215, 100%, 64%, 0.2);',
    })
  }

  const selectCity = (e: any) => {
    dispatch(fetchFiveDaysWeather(e.lat, e.lon) as any)
    dispatch(fetchCurrentWeather(e.lat, e.lon) as any)
    dispatch({type: DayForecastActionTypes.SELECT_CITY, payload: e.label} as any)
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/' className={styles.link_home}>
          <GlobalSvgSelector id='logo'/>
        </Link>
        <h1 className={styles.title}>Weather App</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={toggleTheme}>
          <GlobalSvgSelector id='toggle-theme'/>
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} onChange={selectCity} />
      </div>
    </header>
  )
}
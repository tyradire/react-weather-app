import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/use-theme';
import styles from './Header.module.scss';

interface Props {}

export const Header = (props: Props) => {

  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    console.log(theme)
  }

  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Сочи' }
  ]

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? 'hsla(0, 0%, 31%);' : 'hsla(215, 100%, 64%, 0.2);',
      width: '194px',
      height: '37px',
      borderRadius: '10px',
      border: 'none'
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000',
    }),
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
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  )
}
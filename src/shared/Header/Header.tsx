import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import styles from './Header.module.scss';

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Сочи' }
  ]

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'hsla(215, 100%, 64%, 0.2);',
      width: '194px',
      height: '37px',
      borderRadius: '10px',
      border: 'none'
    })
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
        <div className={styles.change_theme}>
          <GlobalSvgSelector id='toggle-theme'/>
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  )
}
import React from 'react'
import styles from './Days.module.scss';

interface Props {}

export const Tabs = (props: Props) => {

  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    }
  ]

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>{
          tabs.map(tab => <div className={styles.tabs__tab} key={tab.value}>{tab.value}</div>)
        }
      </div>
      <div className={styles.tabs__cancel}>Отменить</div>
    </div>
  )
}
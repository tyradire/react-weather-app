import React from 'react'
import { useTypedSelector } from '../../../../store/store';
import { months } from '../../../../utils/constants';
import styles from './Days.module.scss';
import Tab from './Tab';

interface Props {}

export const Tabs = (props: Props) => {

  const {currentDay} = useTypedSelector(state => state.selectedDay);
  const tomorrow = new Date(currentDay.getTime() + 86400000);
  const twoDaysLaterDate = new Date(currentDay.getTime() + (86400000 * 2));
  const threeDaysLaterDate = new Date(currentDay.getTime() + (86400000 * 3));
  const fourDaysLaterDate = new Date(currentDay.getTime() + (86400000 * 4));

  const tabs = [
    {
      value: 'Ближайшие часы',
      id: currentDay.toLocaleDateString().split('.').reverse().join('-')
    },
    {
      value: 'На завтра',
      id: tomorrow.toLocaleDateString().split('.').reverse().join('-')
    },
    {
      value: `${twoDaysLaterDate.getDate()} ${months[twoDaysLaterDate.getMonth()]}`,
      id: twoDaysLaterDate.toLocaleDateString().split('.').reverse().join('-')
    },
    {
      value: `${threeDaysLaterDate.getDate()} ${months[threeDaysLaterDate.getMonth()]}`,
      id: threeDaysLaterDate.toLocaleDateString().split('.').reverse().join('-')
    },
    {
      value: `${fourDaysLaterDate.getDate()} ${months[fourDaysLaterDate.getMonth()]}`,
      id: fourDaysLaterDate.toLocaleDateString().split('.').reverse().join('-')
    },
  ]

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>{
          tabs.map(tab => <Tab
            key={tab.id}
            id={tab.id}
            title={tab.value}
            />)
        }
      </div>
    </div>
  )
}
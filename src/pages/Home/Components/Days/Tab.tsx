import React from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../store/store';
import { DayForecastActionTypes } from '../../../../store/types/select';
import styles from './Days.module.scss';

interface Props {
  id: string,
  title: string
}

const Tab = ({ id, title }: Props) => {

  const dispatch = useDispatch();

  const {selectedDay} = useTypedSelector(state => state.selectedDay);

  const selectDay = () => {
    dispatch({type: DayForecastActionTypes.SELECT_DAY, payload: id})
  }

  return (
    <div 
      className={selectedDay !== id ? styles.tabs__tab : [styles.tabs__tab, styles.tabs__tab_selected].join(' ')}
      onClick={selectDay}
    >
      {title}
    </div>
  )
}

export default Tab
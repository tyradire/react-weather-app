import { DayForecast, DayForecastActionTypes, SelectAction } from "../types/select"

const initialState: DayForecast = {
  selectedDay: new Date().toLocaleDateString().split('.').reverse().join('-'),
  currentDay: new Date(),
  currentCity: 'Москва'
}

export const dayForecastReducer = (state: DayForecast = initialState, action: SelectAction): DayForecast => {
  switch (action.type) {
    case DayForecastActionTypes.SELECT_DAY:
      return {...state, selectedDay: action.payload}
    case DayForecastActionTypes.SELECT_CITY:
      return {...state, currentCity: action.payload}
    default:
      return state
  }
}
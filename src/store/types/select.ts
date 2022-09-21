export interface DayForecast {
  selectedDay: string,
  currentDay: Date,
  currentCity: string
}

export enum DayForecastActionTypes {
  SELECT_DAY = 'SELECT_DAY',
  SELECT_CITY = 'SELECT_CITY',
}

interface SelectDayAction {
  type: DayForecastActionTypes.SELECT_DAY;
  payload: string;
}

interface SelectCityAction {
  type: DayForecastActionTypes.SELECT_CITY;
  payload: string;
}

export type SelectAction = SelectDayAction | SelectCityAction;
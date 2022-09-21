export interface ThreeHoursForecast {
  main: {
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number
  }
  status: string,
  icon: string,
  date: string,
  time: string
}

export interface FiveDaysWeatherState {
  forecast: ThreeHoursForecast[],
  isLoading: boolean,
  error: null | string
}

export enum LoadFiveDaysActionTypes {
  LOAD_FIVE_DAYS_WEATHER = 'LOAD_FIVE_DAYS_WEATHER',
  LOAD_FIVE_DAYS_WEATHER_SUCCESS = 'LOAD_FIVE_DAYS_WEATHER_SUCCESS',
  LOAD_FIVE_DAYS_WEATHER_ERROR = 'LOAD_FIVE_DAYS_WEATHER_ERROR',
}

interface LoadFiveDaysAction {
  type: LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER;
}

interface LoadFiveDaysSuccessAction {
  type: LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER_SUCCESS;
  payload: ThreeHoursForecast[];
}

interface LoadFiveDaysErrorAction {
  type: LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER_ERROR;
  payload: string
}

export type FiveDaysAction = LoadFiveDaysAction | LoadFiveDaysSuccessAction | LoadFiveDaysErrorAction;
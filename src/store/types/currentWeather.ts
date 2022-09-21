export interface IWeather {
  main: {
    feels_like: number,
    temp: number,
    humidity: number,
    pressure: number
  },
  wind: {
    speed: number,
    deg: number
  }
  date: number
  icon: string
  city: string
}

export interface CurrentWeatherState {
  weather: IWeather,
  isLoading: boolean,
  error: null | string
}

export enum CurrentWeatherActionTypes {
  LOAD_CURRENT_WEATHER = 'LOAD_CURRENT_WEATHER',
  LOAD_CURRENT_WEATHER_SUCCESS = 'LOAD_CURRENT_WEATHER_SUCCESS',
  LOAD_CURRENT_WEATHER_ERROR = 'LOAD_CURRENT_WEATHER_ERROR',
}

interface LoadCurrentAction {
  type: CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER;
}

interface LoadCurrentSuccessAction {
  type: CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER_SUCCESS;
  payload: IWeather;
}

interface LoadCurrentErrorAction {
  type: CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER_ERROR;
  payload: string;
}

export type CurrentWeatherAction = LoadCurrentAction | LoadCurrentSuccessAction | LoadCurrentErrorAction;
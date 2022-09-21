import { CurrentWeatherAction, CurrentWeatherActionTypes, CurrentWeatherState } from "../types/currentWeather"

const initialState: CurrentWeatherState = {
  weather: {
    main: {
      feels_like: 0,
      temp: 0,
      humidity: 0,
      pressure: 1013
    },
    wind: {
      speed: 0,
      deg: 0
    },
    date: 1663162895,
    icon: '03d',
    city: ''
  },
  isLoading: true,
  error: null
}

export const currentWeatherReducer = (state: CurrentWeatherState = initialState, action: CurrentWeatherAction) => {
  switch (action.type) {
    case CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER:
      return {isLoading: true, weather: {}, error: null}
    case CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER_SUCCESS:
      return {isLoading: false, weather: action.payload, error: null}
    case CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER_ERROR:
      return {isLoading: false, weather: {}, error: action.payload}
    default:
      return state
  }
}
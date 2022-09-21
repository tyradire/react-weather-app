import { FiveDaysAction, FiveDaysWeatherState, LoadFiveDaysActionTypes } from "../types/fiveDaysWeather"

const initialState: FiveDaysWeatherState = {
  forecast: [],
  isLoading: true,
  error: null
}

export const fiveDaysWeatherReducer = (state: FiveDaysWeatherState = initialState, action: FiveDaysAction): FiveDaysWeatherState => {
  switch (action.type) {
    case LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER:
      return {isLoading: true, forecast: [], error: null}
    case LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER_SUCCESS:
      return {isLoading: false, forecast: action.payload, error: null}
    case LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER_ERROR:
      return {isLoading: false, forecast: [], error: action.payload}
    default:
      return state
  }
}
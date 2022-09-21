import axios from "axios";
import { Dispatch } from "redux";
import { CURRENT_WEATHER } from "../../utils/constants";
import { CurrentWeatherActionTypes } from "../types/currentWeather";

export const fetchCurrentWeather = (lat: number, lon: number) => {
  return function(dispatch: Dispatch) {
    dispatch({type: CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER})
    axios.get(`${CURRENT_WEATHER}lat=${lat}&lon=${lon}&lang=ru&appid=d6c5a9f6153cab4ccde9c1ca7ab3ca72`)
    .then(({data}) => {
      data.main.temp = Number((data.main.temp - 273.15).toFixed());
      data.main.feels_like = Number((data.main.feels_like - 273.15).toFixed());
      data.main.pressure = Number((data.main.pressure * 0.75).toFixed());
      data.date = data.dt;
      data.city = data.name;
      data.icon = data.weather[0].icon;
      dispatch({type: CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER_SUCCESS, payload: data})
    })
    .catch(err => {
      console.log(err);
      dispatch({type: CurrentWeatherActionTypes.LOAD_CURRENT_WEATHER_ERROR, payload: `Произошла ошибка ${err}`})
    })
  }
}
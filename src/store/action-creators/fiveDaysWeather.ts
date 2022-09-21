import axios from "axios";
import { Dispatch } from "redux";
import { FIVE_DAYS_WEATHER } from "../../utils/constants";
import { LoadFiveDaysActionTypes } from "../types/fiveDaysWeather";

export const fetchFiveDaysWeather = (lat: number, lon: number) => {
  return function(dispatch: Dispatch) {
    dispatch({type: LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER})
    axios.get(`${FIVE_DAYS_WEATHER}lat=${lat}&lon=${lon}&lang=ru&appid=d6c5a9f6153cab4ccde9c1ca7ab3ca72`)
    .then(({data}) => {
      dispatch({
        type: LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER_SUCCESS, 
        payload: data.list.map((elem:any) => { 
          return {...elem, 
            status: elem.weather[0].description,
            icon: elem.weather[0].icon,
            date: elem.dt_txt.split(' ')[0],
            time: elem.dt_txt.split(' ')[1].slice(0,5)
          } 
        })
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({type: LoadFiveDaysActionTypes.LOAD_FIVE_DAYS_WEATHER_ERROR, payload: `Произошла ошибка ${err}`})
    })
  }
}
import { composeWithDevTools } from 'redux-devtools-extension';
import { currentWeatherReducer } from './reducers/currentWeatherReducer';
import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { fiveDaysWeatherReducer } from './reducers/fiveDaysWeatherReducer';
import { dayForecastReducer } from './reducers/dayForecastReducer';

export const rootReducer = combineReducers({
  current: currentWeatherReducer,
  forecast: fiveDaysWeatherReducer,
  selectedDay: dayForecastReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState>  = useSelector

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

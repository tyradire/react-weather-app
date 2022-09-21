export const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const CURRENT_WEATHER = BASE_URL + '/weather?';

//lat=59.89&lon=30.26&lang=ru&appid=2f56e57ae666c536170d9d94830668f4

export const FIVE_DAYS_WEATHER = BASE_URL + '/forecast?';

//lat=59.89&lon=30.26&lang=ru&appid=d6c5a9f6153cab4ccde9c1ca7ab3ca72

export const CITY_URL = 'https://api.openweathermap.org/geo/1.0/direct?q=';

//Saint-petersburg&limit=1&appid=d6c5a9f6153cab4ccde9c1ca7ab3ca72

export const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
]

//2f56e57ae666c536170d9d94830668f4
//d6c5a9f6153cab4ccde9c1ca7ab3ca72

// каждые 3 часа, массив из 40 элементов http://api.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139&appid=d6c5a9f6153cab4ccde9c1ca7ab3ca72
// /forecast?id=524901&appid=d6c5a9f6153cab4ccde9c1ca7ab3ca72
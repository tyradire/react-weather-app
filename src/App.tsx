import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MouthStatistics } from './pages/MouthStatistics/MouthStatistics';
import { Header } from './shared/Header/Header';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/react-weather-app' element={<Home/>} />
        <Route path='/month' element={<MouthStatistics/>}/>
      </Routes>
    </div>
  );
}

export default App;

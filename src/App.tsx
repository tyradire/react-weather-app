import React from 'react';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

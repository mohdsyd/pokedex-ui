import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  );
}

export default App;

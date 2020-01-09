import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (  
    <div className="App">
      <div className="weather-channel__container">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Begin from './Begin.js'
import Grid from './Grid';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1><strong>TIC-TAC-TOE</strong></h1>
      </header>

      <div><br/><br/><hr/>
      <h1 className="begin_head">IT IS A TWO-PLAYER FUN GAME!</h1>
      <hr/></div>
	
      <Begin/>
      <Grid />
      <Footer />
    </div>
  );
}

export default App;

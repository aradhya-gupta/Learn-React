import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid.js'

import Begin from './Begin.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TIC-TAC-TOE</h1>
      </header>

      <div><br/><br/><hr/>
      <h1 className="begin_head">IT IS A TWO-PLAYER FUN GAME!</h1>
      <hr/></div>
	
      <Begin/>
      <Grid/>

    </div>
  );
}

export default App;

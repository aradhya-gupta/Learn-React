import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import InputNames from './InputNames'
import Grid from './Grid';

function Begin() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          variant="outline-info"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          BEGIN GAME
        </Button>
        <div><br/><br/><br/></div>
        <Collapse in={open}>
          <div id="example-collapse-text">
           <h3>ENTER PLAYER NAMES</h3>
           <br/>
           <InputNames/>
          <br/>
            <h3>INSTRUCTIONS</h3>
            <ul>
              <li>Player1 takes cross while Player2 takes zero.</li>
              <li>Single click on a tile below for filling a cross/zero</li>
              <li>The player who first fills a row/column/diagonal with all zeroes/crosses wins.</li>
            </ul>
            <h4>
            GOOD LUCK!</h4>
          <br/><br/>
          </div>
        </Collapse>

        <Grid/>
      </>
    );
  }
  
export default Begin;

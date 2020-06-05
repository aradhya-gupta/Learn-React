import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

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
           <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Player 1</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <FormControl />
            <InputGroup.Prepend>
              <InputGroup.Text>Player 2</InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
          <br/>
            <h3>INSTRUCTIONS</h3>
            <ul>
              <li>Player1 takes cross while player2 takes zero.</li>
              <li>Single click on a tile below for filling a cross while double click for zero. </li>
              <li>The player who first fills a row/column/diagonal with all zeroes/crosses wins.</li>
            </ul>
            <h4>GOOD LUCK!</h4>
          <br/><br/>
          </div>
        </Collapse>
      </>
    );
  }
  
export default Begin;

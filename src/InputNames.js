import React, { useContext, useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'

import {AppContext} from './App';

export default function InputNames() {
    const [player1, setPlayer1] = useState(""); 
    const [player2, setPlayer2] = useState("");    
    const context = useContext(AppContext);
    console.log(context);
    const handle1 = (e) => {
        setPlayer1(e.target.value);
        const players = [e.target.value, player2];
        context.players.set(players);
    }
    const handle2 = (e) => {
        setPlayer2(e.target.value);
        const players = [player1, e.target.value];
        context.players.set(players);
    }
    return (
        <Container className="inputNames">
            <InputGroup className="mb-3" size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text style={{ backgroundColor: "aqua", border: "solid black" }}>PLAYER1</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" style={{ textAlign: "right", fontFamily: "Times New Roman", fontWeight: "900" }}
                    placeholder="Enter your name here player1" onChange={handle1} />

                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><strong>VS</strong></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" style={{ fontFamily: "Times New Roman", fontWeight: "900" }}
                    placeholder="Enter your name here player2" onChange={handle2} />
                <InputGroup.Prepend>
                    <InputGroup.Text style={{ backgroundColor: "aqua", border: "solid black" }} > PLAYER2 </InputGroup.Text>
                </InputGroup.Prepend>
            </InputGroup>
        </Container>
    )
}

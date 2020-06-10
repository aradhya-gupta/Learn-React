import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'

export default class InputNames extends Component {

    state = {
        player1: "",
        player2: ""
    }

    handle1 = (e) => {
        // console.log(e.target.value);
        this.setState({ player1: e.target.value });
    }
    handle2 = (e) => {
        // console.log(e.target.value);
        this.setState({ player2: e.target.value });
    }
    render() {
        return (
            <Container className="inputNames">
                <InputGroup className="mb-3" size="lg">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{ backgroundColor: "aqua", border: "solid black" }}>PLAYER1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text" style={{ textAlign: "right", fontFamily: "Times New Roman", fontWeight: "900" }}
                        placeholder="Enter your name here player1" onChange={this.handle1} />
                    
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><strong>VS</strong></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text" style={{ fontFamily:"Times New Roman",fontWeight:"900"}}
                        placeholder="Enter your name here player2" onChange={this.handle2} />
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{ backgroundColor: "aqua", border: "solid black" }} > PLAYER2 </InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </Container>
        )
    }
}

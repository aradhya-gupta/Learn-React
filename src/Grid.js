import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialMediaIconsReact } from 'social-media-icons-react';
import ButtonContent from './ButtonContent.js'
import Winner from './Winner.js'
export default class Grid extends Component {

    state = {
        a00: 0, a01: 0, a02: 0, a10: 0, a11: 0, a12: 0, a20: 0, a21: 0, a22: 0,
        turn: 1,
        modalShow: false
    }


    changeState = (x, y, val) => {
        if (x === 0) {
            if (y === 0)
                this.setState({ a00: val });
            else if (y === 1)
                this.setState({ a01: val });
            else
                this.setState({ a02: val });
        }
        else if (x === 1) {
            if (y === 0)
                this.setState({ a10: val });
            else if (y === 1)
                this.setState({ a11: val });
            else
                this.setState({ a12: val });
        }
        else {
            if (y === 0)
                this.setState({ a20: val });
            else if (y === 1)
                this.setState({ a21: val });
            else
                this.setState({ a22: val });
        }
    }

    checkWin = (val) => {

        // row win
        if (this.state.a00 === this.state.a01 && this.state.a01 === this.state.a02 && this.state.a02 === val)
                console.log("victory" + val);
        else if (this.state.a10 === this.state.a11 && this.state.a11 === this.state.a12 && this.state.a12 === val)
            console.log("victory" + val);
        else if (this.state.a20 === this.state.a21 && this.state.a21 === this.state.a22 && this.state.a22 === val)
            console.log("victory" + val);

        //column win
        else if (this.state.a00 === this.state.a10 && this.state.a10 === this.state.a20 && this.state.a20 === val)
            console.log("victory" + val);
        else if (this.state.a01 === this.state.a11 && this.state.a11 === this.state.a21 && this.state.a21 === val)
            console.log("victory" + val);
        else if (this.state.a02 === this.state.a12 && this.state.a12 === this.state.a22 && this.state.a22 === val)
            console.log("victory" + val);

        //diagonal win
        else if (this.state.a00 === this.state.a11 && this.state.a11 === this.state.a22 && this.state.a22 === val)
            console.log("victory" + val);
        else if (this.state.a02 === this.state.a11 && this.state.a11 === this.state.a20 && this.state.a20 === val)
            console.log("victory" + val);

        //tie
        else if (this.state.turn === 10)
            console.log("TIE");
    }

    changeTurn = () => {
        this.setState((state) => {
            this.setState({ turn: state.turn + 1 });
        }
        )
    }
     
    modalClose=()=>{
        this.setState({modalShow:false});
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={0} y={0} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={0} y={1} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={0} y={2} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={1} y={0} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={1} y={1} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={1} y={2} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={2} y={0} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={2} y={1} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState.bind(this)} turn={this.state.turn} turnChange={this.changeTurn.bind(this)} check={this.checkWin.bind(this)} x={2} y={2} />
                        {/* {this.checkWin(1)} */}
                        {/* {this.checkWin(2)} */}
                    </Col>
                    <Col></Col>
                </Row>

                {this.checkWin(1)}
                {this.checkWin(2)}
                
                 <Winner show={this.state.modalShow} onHide={this.modalClose} />
                
                <div><br /><br /><br /></div>
                {/* Footer */}
                <Row style={{ backgroundColor: "black" }}>
                    <Col style={{ padding: "25px" }}>
                        <h4 style={{ textAlign: "center", color: "white", margin: "0px" }}>ARADHYA <strong>GUPTA</strong></h4>
                    </Col>
                    <Col style={{ padding: "25px" }}>
                        <SocialMediaIconsReact borderColor="rgba(245,239,239,1)" borderWidth="2" borderStyle="solid" icon="linkedin" iconColor="rgba(245,227,227,1)" backgroundColor="rgba(8,8,8,1)" iconSize="0" roundness="50%" url="https://www.linkedin.com/in/gupta-aradhya" size="36" />
                        <span> </span>
                        <SocialMediaIconsReact borderColor="rgba(245,239,239,1)" borderWidth="2" borderStyle="solid" icon="github" iconColor="rgba(245,227,227,1)" backgroundColor="rgba(8,8,8,1)" iconSize="3" roundness="50%" url="https://github.com/aradhya-gupta/" size="36" />
                        <span> </span>
                        <SocialMediaIconsReact borderColor="rgba(245,239,239,1)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(245,227,227,1)" backgroundColor="rgba(8,8,8,1)" iconSize="0" roundness="50%" url="https://www.facebook.com/aradhya.gupta0308" size="36" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

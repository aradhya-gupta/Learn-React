import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialMediaIconsReact } from 'social-media-icons-react';
import ButtonContent from './ButtonContent.js'
import Winner from './Winner.js'
import Tie from './Tie.js'

export default class Grid extends Component {

    state = {
        board: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        turn: 1,
        modalShow: false,
        tie: false,
        winner: 0
    }

    changeState = (x, y, val) => {
        let board = this.state.board;
        board[x][y] = val;
        this.setState({ board });
    }

    rowWin = (row) => {
        let b = this.state.board;
        if (b[row][0] === b[row][1] && b[row][1] === b[row][2] && b[row][0] !== 0)
            return b[row][0];
        return 0;
    }
    colWin = (col) => {
        let b = this.state.board;
        if (b[0][col] === b[1][col] && b[1][col] === b[2][col] && b[0][col] !== 0)
            return b[0][col];
        return 0;
    }
    diagWin = () => {
        let b = this.state.board;
        if (b[0][0] === b[1][1] && b[1][1] === b[2][2] && b[1][1] !== 0)
            return b[1][1];
        if (b[0][2] === b[1][1] && b[1][1] === b[2][0] && b[1][1] !== 0)
            return b[1][1];
        return 0;
    }
    checkWin = () => {
        const { rowWin, colWin, diagWin } = this;
        const winner = rowWin(0) ^ rowWin(1) ^ rowWin(2) ^ colWin(0) ^ colWin(1) ^ colWin(2) ^ diagWin();
        if (winner) this.setState({ modalShow: true, winner });
        //tie
        if (this.state.turn === 10) {
            console.log("TIE");
            this.setState({ tie: true });
        }
    }

    changeTurn = () => {
        this.setState({ turn: this.state.turn + 1 });
    }

    _refreshPage() {
        console.log("Clicked");
        window.location.reload();
    }

    render() {
        if (this.state.modalShow === false && this.state.tie === false)
            this.checkWin();

        return (
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={0} y={0} />

                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={0} y={1} />

                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={0} y={2} />

                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={1} y={0} />

                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={1} y={1} />

                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={1} y={2} />

                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={2} y={0} />

                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={2} y={1} />

                    </Col>
                    <Col xs="auto">
                        <ButtonContent change={this.changeState} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={2} y={2} />

                    </Col>
                    <Col></Col>
                </Row>


                <Winner show={this.state.modalShow} onHide={this._refreshPage} val={this.state.winner} />
                <Tie show={this.state.tie} onHide={this._refreshPage} />

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

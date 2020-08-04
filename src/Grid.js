import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Square from './Square.js'
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

    changeSquareValue = (x, y, val) => {
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
                    {[0, 1, 2].map(v => (
                        <Col xs="auto">
                            <Square change={this.changeSquareValue} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={0} y={v} />
                        </Col>
                    ))}
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    {[0, 1, 2].map(v => (
                        <Col xs="auto">
                            <Square change={this.changeSquareValue} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={1} y={v} />
                        </Col>
                    ))}
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    {[0, 1, 2].map(v => (
                        <Col xs="auto">
                            <Square change={this.changeSquareValue} turn={this.state.turn} turnChange={this.changeTurn} check={this.checkWin} x={2} y={v} />
                        </Col>
                    ))}
                    <Col></Col>
                </Row>

                <Winner show={this.state.modalShow} onHide={this._refreshPage} val={this.state.winner} />
                <Tie show={this.state.tie} onHide={this._refreshPage} />

                <div><br /><br /><br /></div>
            </Container>
        )
    }
}

import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class Tie extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        GAME OVER!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>IT'S A TIE!</h4>
                    <p>
                         Hope you enjoyed the game!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>New Game</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

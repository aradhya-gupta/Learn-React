import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import {AppContext} from './App'; 

function Winner(props) {
    const context = useContext(AppContext);
    return (
        <Modal
            {...props}
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
                <h4>Congratulations {props.val===1?context.players.get[0]:context.players.get[props.val-1]} &#127881;&#127881;</h4>
                <p>
                    Hope you enjoyed the game!
                    </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>New Game</Button>
            </Modal.Footer>
        </Modal>

    )
}


export default Winner;


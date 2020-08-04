import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class ButtonContent extends Component {

    state = {
        content: <h1>.</h1>,
        clicked: false
    }
    handleClick1 = (turn) => {
        this.setState({ content: <h1 className="cross">{turn % 2 !== 0 ? 'X' : 'O'}</h1> });
    }
    handleClick = () => {
        const { turn, change, turnChange } = this.props;
        if (turn % 2 !== 0) change(this.props.x, this.props.y, 1);
        else change(this.props.x, this.props.y, 2);
        this.handleClick1(turn);
        turnChange();
        this.setState({clicked: true});
    }

    render() {
        return (
                <Button className="ticbut" variant="dark" onClick={this.handleClick}  disabled={this.state.clicked}>{this.state.content}</Button>
        )
    }
}

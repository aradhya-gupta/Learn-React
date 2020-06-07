import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class ButtonContent extends Component {

    state = {
        content: <h1>.</h1>,
    }
    handleClick1 = () => {
        this.setState({ content: <h1 className="cross">X</h1> });
    }

    handleClick2 = () => {
        this.setState({ content: <h1 className="zero">O</h1> });
    }

    handle = () => {
        if (this.props.turn % 2 !== 0) {  //in odd turn cross is displayed
            this.props.change(this.props.x, this.props.y, 1);
            this.handleClick1();
            this.props.turnChange();
        }
        else {
            this.props.change(this.props.x, this.props.y, 2);
            this.handleClick2();
            this.props.turnChange();
        }
    }

    render() {
        return (
            <div>
                <Button className="ticbut" variant="dark" onClick={this.handle}  >{this.state.content}</Button>
            </div>
        )
    }
}

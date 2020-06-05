import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class ButtonContent extends Component {
    
    state ={
        content: "."
    }
     handleClick1 = () =>{
         this.setState({content:<h1 className="cross">X</h1>});
     }

     handleClick2 = () =>{
        this.setState({content:<h1 className="zero">O</h1>});
    }
    render() {
        return (
            <div>
                <Button className="ticbut" variant="dark" onClick={this.handleClick1} onDoubleClick={this.handleClick2} >{this.state.content}</Button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonContent from './ButtonContent.js'

export default class Grid extends Component {


    render() {
        return (
            <Container>
              <Row>
            
              <Col>CLICK ONCE FOR CROSS</Col>
              
                  <Col xs="auto">
                   <ButtonContent/>
                  </Col>
                  <Col xs="auto">
                   <ButtonContent/>
                  </Col>
                  <Col xs="auto">
                   <ButtonContent/>
                  </Col>
              
              <Col>CLICK TWICE FOR ZERO</Col>
              </Row>
              
              <Row>
              <Col></Col>
              <Col xs="auto">
                   <ButtonContent/>
                  </Col>
                  <Col xs="auto">
                   <ButtonContent/>
                  </Col>
                  <Col xs="auto">
                   <ButtonContent/>
                  </Col>
              <Col></Col>
              </Row>

              <Row>
              <Col></Col>
              <Col xs="auto">
                   <ButtonContent/>
                  </Col>
                  <Col xs="auto">
                   <ButtonContent/>
                  </Col>
                  <Col xs="auto">
                   <ButtonContent/>
                  </Col>
              <Col></Col>
              </Row>
            </Container>
        )
    }
}

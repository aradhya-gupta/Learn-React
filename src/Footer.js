import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialMediaIconsReact } from 'social-media-icons-react';

export default function Footer() {
    return (
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

    )
}

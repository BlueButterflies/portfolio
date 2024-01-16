import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Logo from "./logo.png";

function About() {
    return (
        <div className="about">
            <Container>
                <Row className="tc">
                    <Col sm={"12"} md={"6"} xs={"12"}>

                        <Image src={Logo} roundedCircle fluid className="imgLogo" />
                    </Col>
                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                        <div className="tc animate__animated animate__zoomInUp animate__delay-2s">
                            <div className="titleAbout tc">
                                <h1>
                                    About me
                                </h1>
                            </div>

                            <div className="description f3">
                                I have been a developer passionate about creations in the IT world for 3 years. I create websites with React and Javascript,
                                software with C# and .Net, and 2D video games with C# and Unity.
                                I am constantly learning and perfecting my skills.
                                When I'm not writing code I love spending time with my family and reading profailing books.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default About
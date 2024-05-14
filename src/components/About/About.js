import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Logo from "./logo.png";

function About() {
    return (
        <div className="about">
            <Container>
                <Row className="tc">
                    <Col sm={"12"} md={"6"} xs={"12"}>

                        <Image src={Logo} roundedCircle fluid className="imgLogo"  alt="logo"/>
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
                                When I'm not writing code I love spending time with my family and reading criminal profiling books.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default About
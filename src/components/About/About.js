import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./About.css";
import Logo from "./logo.png";/*You can change name image logo.Remember change img src tag.*/

function About() {
    return (
        <div className="about">
           <Container>
            <Row>
                <Col sm={"6"} className="tc">
                    {/**Change logo image */}
                    <Image src={Logo} roundedCircle fluid className="imgLogo"/>
                </Col>
                <Col sm={"6"} className="tc">
                    <div className="ma3 animate__animated animate__fadeInRight animate__delay-2s">
                        <div className="mb3 titleAbout tc">
                            <h1>
                                About me
                            </h1>
                        </div>

                        <div className="tc">
                            <p className="f3">
                                {/**Write how are you*/}
                                I have been a developer passionate about creations in the IT world for 3 years. I create websites with React and Javascript, 
                                software with C# and .Net, and 2D video games with C# and Unity.
                                I am constantly learning and perfecting my skills.
                                When I'm not writing code I love spending time with my family and reading profailing books.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> 
        </div>
        
    );
}

export default About
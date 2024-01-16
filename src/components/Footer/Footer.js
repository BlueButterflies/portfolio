import React from "react";
import Container from "react-bootstrap/Container";
import { FaGithub, FaLinkedinIn, FaCopyright } from "react-icons/fa";

function Footer() {
    return (
        <Container className="footer tc">
            <a href="https://github.com/BlueButterflies" target="_blank">
                <FaGithub className="icon ma3" />
            </a>
            <a href="https://www.linkedin.com/in/siyana-yasenova-zdravkova-b4905b205/" target="_blank">
                <FaLinkedinIn className="icon ma3" />
            </a>


            <hr />

            <h6 className="mt3">
                <FaCopyright className="copy" />
                <a href="https://github.com/BlueButterflies?tab=repositories" target="_blank">
                    {"2024 - S/Z Siyana Zdravkova Web Developer"}
                </a>
            </h6>
        </Container>
    );

}

export default Footer
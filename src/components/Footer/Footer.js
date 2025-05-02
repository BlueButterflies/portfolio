import React from "react";
import Container from "react-bootstrap/Container";
import { FaCopyright } from "react-icons/fa";

function Footer() {
    return (
        <Container className="footer tc">
            <h6 className="mt3">
                <FaCopyright className="copy" />
                <a href="https://github.com/BlueButterflies?tab=repositories" target="_blank" rel="noreferrer">
                    2024 - Create by <span>S/Z Siyana Zdravkova Web Developer</span>
                </a>
            </h6>
        </Container>
    );

}

export default Footer

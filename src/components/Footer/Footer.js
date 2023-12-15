import React from "react";
import Container  from "react-bootstrap/Container";
import { FaGithub, FaLinkedinIn, FaCopyright} from "react-icons/fa";
import "./Footer.css";

const styleIcon = { 
    fontSize: '40px', 
    color: 'rgb(251, 128, 128)',
};

const styleCopy = {
    fontSize: '25px',
    color: 'rgb(251, 128, 128)',
    margin: '0 1% 0 0'
}

const styleTop = {
    fontSize: '20px',
    color: 'rgb(251, 128, 128)',
    margin: '0 0 6% 0'
}

function Footer() {
    return (
        <div className="footer tc">
            {/*<FaAngleUp className="top icon" style={styleTop}/>*/}
            <Container>
                <a href="https://github.com/BlueButterflies" target="_blank">
                  <FaGithub style={styleIcon} className="icon ma3"/>  
                </a>
                <a href="https://www.linkedin.com/in/siyana-yasenova-zdravkova-b4905b205/" target="_blank">
                   <FaLinkedinIn style={styleIcon} className="icon ma3"/> 
                </a>
                

                <hr/>

               <h6 className="mt3"> <FaCopyright style={styleCopy}/>{"2023 - S/Z Siyana Zdravkova Developer"}</h6>
            </Container>
        </div>
    );

}

export default Footer
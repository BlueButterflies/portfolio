import React from "react";
import Container from 'react-bootstrap/Container';


const  Home = () => {
  return (
    <Container className="container-fluid home tc">
      <div className="navy tc">
        <p className="title tc animate__animated animate__zoomInDown">
          <span>Hi, my name is <span className="name">Siyana</span></span>
        </p>
        <p className="subTitle tc animate__animated animate__zoomInDown">
          <span>I'm <span className="profession">Web Developer</span></span>
        </p>
      </div>
    </Container>
  );
}

export default Home
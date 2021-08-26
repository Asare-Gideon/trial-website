import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const Container = styled.div`
  height: 100vh;
  position : relative;
  @media only screen and (max-width: 550px) {
    height: auto;
   }
`;
const Container2 = styled.div`
  height: 80vh;
  position : relative;
  @media only screen and (max-width: 550px) {
   height: auto;
  }
`;
const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container2>
        <Feature />
        <FeatureShape />
      </Container2>
       <Container>
         <Service />
         {!smallScreen && <ServiceShape />}
       </Container>
       <Container>
         <Price />
         <PriceShape />
       </Container>
       <Container>
         <Contact />
         <Footer />
       </Container>
    </>
  );
}

export default App;

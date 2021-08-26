import React from "react";
import styled from "styled-components";
import Woman from '../img/woman3.png'
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 80%;
  font-size: 60px;
  @media only screen and (max-width: 550px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 80%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 80%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 550px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    font-size: 17px;
    margin-top:-10px;
    margin-bottom: 10px;
    padding: 10px 15px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content:center;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const Image = styled.img`
    width: 100%;
    height: 600px;
   
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Let's Build Something Amazing Together</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (+233) 549589279 </Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><Image src={Woman}/></Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Intro;

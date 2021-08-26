import React from "react";
import styled from "styled-components";
import App from "../img/point.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height : 110%;
  margin-top: 1.1rem;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 80px;
  margin-top: 5rem;
  @media only screen and (max-width: 550px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 200px;
  border: none;
  padding: 10px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    font-size: 17px;
    margin-top: 10px;
    padding: 10px 15px;
  }
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;

import React from "react";
import { Festival as Festive } from "../Data/ConstantData";
import styled from "styled-components";
import { Colour } from "../Data/Constant_Color";
const Festival = () => {
  return (
    <Container>
      <h1>{Festive.Heading}</h1>
      <Flex>
        <div>
          <img src={Festive.Image1} alt="Image" />
        </div>
        <div>
          <img src={Festive.Image2} alt="Image" />
        </div>
        <div>
          <img src={Festive.Image3} alt="Image" />
        </div>
        <div>
          <img src={Festive.Image4} alt="Image" />
        </div>
      </Flex>
    </Container>
  );
};

export default Festival;
const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  overflow: hidden;
  background-color: ${Colour.backgroudColorFourth};
  h1 {
    font-family: "Tangerine", "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-size: 80px;
    color: ${Colour.quaternaryColor};
    margin: 0;
  }
`;
const Flex = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  animation: slideAnimation 8s alternate-reverse infinite;
  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-200px);
    }
    100% {
      transform: translateX(200px);
    }
  }
  div {
    height: 400px;
    width: 100vw;
    padding: 10px;
    display: flex;
    overflow: hidden;
    gap: 10px;
    flex: auto;
    background-color: inherit;
    width: calc(25% - 20px);
    @media (max-width: 800px) {
      width: calc(50% - 20px);
    }
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
    }
  }
`;

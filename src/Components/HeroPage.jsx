import React from "react";
import styled from "styled-components";
import { Colour } from "../Data/Constant_Color";
import { HeroPageData } from "../Data/ConstantData";
const HeroPage = () => {
  return (
    <Container>
      <img src={HeroPageData.Image1} alt="Image" />
      <div>
        <h1>{HeroPageData.Heading}</h1>
        <h4>{HeroPageData.Temple}</h4>
      </div>
      <h1>{HeroPageData.FounderAcharya}</h1>
    </Container>
  );
};

export default HeroPage;

const Container = styled.div`
  background-color: ${Colour.backgroudColorsecond};
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    height: 400px;
    width: auto;
  }

  h1,
  h4 {
    margin: 0;
    color: ${Colour.SecondaryColor};
  }

  h1:last-child {
    margin-top: 20px;
    color: ${Colour.SecondaryColor};
  }
`;

import React from "react";
import { AboutSection as about } from "../Data/ConstantData";
import { Colour } from "../Data/Constant_Color";
import styled from "styled-components";
const AboutSection = () => {
  return (
    <Container>
      <h1>{about.Heading}</h1>
      <Position>
        <Flex1 className="button">
          <button>{about.Button1}</button>
          <button>{about.Button2}</button>
        </Flex1>
      </Position>
      <p>{about.Description}</p>
      <Flex2>
        <div>
          <img src={about.Image1} alt="image" />
        </div>
        <div>
          <img src={about.Image2} alt="image" />
        </div>
        <div>
          <img src={about.Image3} alt="image" />
        </div>
        <div>
          <img src={about.Image4} alt="image" />
        </div>
      </Flex2>
    </Container>
  );
};

export default AboutSection;
const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  overflow: hidden;
  position: relative;
  h1 {
    font-family: "Tangerine", "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-size: 80px;
    color: ${Colour.quaternaryColor};
    margin: 0;
  }
  p {
    font-size: 32px;
    color: ${Colour.quaternaryColor};
    margin: 0;
  }
`;
const Position = styled.div`
  width: 100vw;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Flex1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin: 20px 0;
  padding: 8px 0;
  position: absolute;
  overflow: hidden;
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: ${Colour.backgroudColorthird};
    color: ${Colour.ternaryColor};
    border: none;
    border-radius: 160px;
    font-weight: 800;
    cursor: pointer;
    transition: background-color 0.8s ease, border 0.8s ease, margin 0.8s ease,
      color 0.8s ease;

    &:hover {
      background-color: ${Colour.ternaryColor};
      border: 1px solid ${Colour.backgroudColorthird};
      margin: 2px;
      color: ${Colour.backgroudColorthird};
    }
  }
`;
const Flex2 = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  div {
    height: 200px;
    width: 100vw;
    padding: 10px;
    display: flex;
    overflow: hidden;
    gap: 10px;
    flex: auto;
    width: calc(25% - 20px);
    @media (max-width: 800px) {
      width: calc(50% - 20px);
    }
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
      border-radius: 10% 0% 10% 0% / 10% 0% 10% 0%;
      box-shadow: 0 0 10px ${Colour.primaryColor};
    }
  }
`;

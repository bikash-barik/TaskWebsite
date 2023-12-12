import React from "react";
import { Footer as footer } from "../Data/ConstantData.js";
import styled from "styled-components";
import { Colour } from "../Data/Constant_Color.js";
const Footer = () => {
  return (
    <Container>
      <div className="bigContainer">
        <div className="container1">
          <div className="image1">
            <img src={footer.Image1} alt="Image" />
          </div>
          <div className="text1">
            <h1>{footer.Flex1.Heading}</h1>
            <p>{footer.Flex1.paragraph1}</p>
            <p>{footer.Flex1.paragraph2}</p>
            <p>{footer.Flex1.paragraph3}</p>
          </div>
        </div>
        <div className="container2">
          <div className="text2">
            <h1>{footer.Flex2.Heading}</h1>
            <p>{footer.Flex2.paragraph1}</p>
            <p>{footer.Flex2.paragraph2}</p>
          </div>
          <div className="image2">
            <img src={footer.Iamge2} alt="Image" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-color: ${Colour.backgroudColorsecond};
  overflow: hidden;
  .bigContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin: 16px auto;
    overflow: hidden;
  }
  .container1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45vw;
    height: 400px;
  }
  .image1 {
    height: 200px;
    width: 200px;
    object-fit: cover;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45vw;
    height: 400px;
  }
`;

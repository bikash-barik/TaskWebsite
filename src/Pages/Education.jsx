import React from "react";
import styled from "styled-components";
import { Courses as Course } from "../Data/ConstantData";
import { Colour } from "../Data/Constant_Color";
const Education = () => {
  return (
    <Container>
      <div className="text">
        <button>{Course.Intiatives}</button>
        <h1>{Course.Heading}</h1>
        <p>{Course.Description}</p>
      </div>
      <div className="bigContainer">
        <div className="img">
          <img src={Course.Image} alt="Image" />
        </div>
        <div className="content">
          <div className="paragraph1">{Course.Text.paragraph1}</div>
          <div className="heading">
            <h1>{Course.Text.Heading1}</h1>
          </div>
          <div className="paragraph2">
            <li>{Course.Text.List[0]}</li>
            {Course.Text.paragraph2}
          </div>
          <div className="paragraph3">
            <li>{Course.Text.List[1]}</li>
            {Course.Text.paragraph3}
          </div>
          <div className="paragraph4">{Course.Text.paragraph4}</div>
          <div className="paragraph5">{Course.Text.paragraph5}</div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${Colour.backgroudColorFourth};

  .text {
    flex: 1;
    text-align: center;

    button {
      background-color: ${Colour.SecondaryColor};
      color: ${Colour.ternaryColor};
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      margin: 20px 0px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
    }
  }

  .img {
    flex: 1;
    text-align: center;
    background-color: whitesmoke;
    max-width: 80vw;
    object-fit: cover;
    height: 600px;
    padding: 16px;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .bigContainer {
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .content {
    width: 80vw;
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 10px;
    top: 20px;
    flex: 2;
    text-align: left;
    color: ${Colour.quaternaryColor};

    .paragraph1 {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .heading {
      margin-bottom: 20px;

      h1 {
        font-size: 24px;
      }
    }

    .paragraph2,
    .paragraph3 {
      font-size: 16px;
      margin-bottom: 10px;
      list-style-type: none;
      padding-left: 0;

      li {
        font-weight: bold;
        margin-bottom: 5px;
      }
    }

    .paragraph4,
    .paragraph5 {
      font-size: 18px;
      margin-top: 20px;
    }
  }
`;


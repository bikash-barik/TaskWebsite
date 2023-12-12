import React from "react";
import { Contribute as Data } from "../Data/ConstantData";
import { Colour } from "../Data/Constant_Color";
import styled from "styled-components";
const Contribute = () => {
  return (
    <Container>
      <div className="text">
        <h1>{Data.Heading}</h1>
        <p>{Data.Description}</p>
      </div>
      <div className="groupImage">
        <div className="column1">
          <img src={Data.MainPhoto} alt="Image" />
        </div>
        <div className="column2">
          <div className="row1">
            <img src={Data.GroupIamge1} alt="Image" />
            <img src={Data.GroupIamge2} alt="Image" />
          </div>
          <div className="row2">
            <img src={Data.GroupIamge3} alt="Image" />
            <img src={Data.GroupIamge4} alt="Image" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contribute;
const Container = styled.div`
  background-color: ${Colour.SecondaryColor};
  h1 {
    font-family: "Tangerine", "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-size: 100px;
    color: ${Colour.FifthColor};
    font-size: 400;
    margin-top: 8px;
  }
  p {
    font-size: 32px;
    color: ${Colour.ternaryColor};
    margin: 16px;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .groupImage {
    max-width: 90vw;
    height: 100%;
    gap: 16px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    margin: 0 auto;
    img {
      border: 4px solid white;
      border-radius: 10% 0% 10% 0% / 10% 0% 10% 0%;
      box-shadow: 0 0 10px ${Colour.primaryColor};
    }
    img:hover {
      cursor: default;
      transform: rotate(360deg);
      transition: all 0.3s ease-in-out 0s;
    }
  }
  .column1 {
    max-width: 45vw;
    height: 100%;
    object-fit: cover;
    img {
      max-width: 45vw;
      height: 100%;
    }
  }
  .column2 {
    max-width: 45vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .row1 {
      margin: 2px;
      gap: 2px;
    }
    .row2 {
      margin: 2px;
      gap: 2px;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

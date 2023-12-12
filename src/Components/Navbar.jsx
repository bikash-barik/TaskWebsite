import React from "react";
import styled from "styled-components";
import { Colour } from "../Data/Constant_Color";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <Container>
      <NavList>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/education">Temple</NavLink>
        <NavLink to="/education">Temple Activities</NavLink>
        <NavLink to="/education">Education & Training</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/blogs">Temple Construction</NavLink>
        <NavLink to="/education">Life Membership</NavLink>
        <NavLink to="/education">Donate Now</NavLink>
      </NavList>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  background-color: ${Colour.backgroudColorsecond};
  color: ${Colour.SecondaryColor};
  padding: 40px;
  border-bottom: 2px solid ${Colour.backgroudColorsecond};
  position: static;
  box-shadow: 0px 20px 20px #b9b935;
  transform: translate3d(0px, 0%, 3em);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 16px;
  border-color: yellowgreen;
  a{
    color: ${Colour.SecondaryColor};
    padding: 10px;
    cursor: pointer;
    list-style-type: none;
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover {
      transform: translateY(-16px);
    }
  }
`;

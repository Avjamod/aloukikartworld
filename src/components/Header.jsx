import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <div className="Head">
        <NavLink to="/">
          <img src="./images/logo.ico.png" alt="logo" className="logo" />
        </NavLink>
        <div className="logoName">Aloukik Artworld</div>
      </div>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 3rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Head {
    display: flex;
    align-items: center;
  }

  .logo {
    height: auto;
    max-width: 60%;
    width: 15rem;

    &:hover {
      filter: saturate(10%);
      transition: 0.2s;
    }
  }

  .logoName {
    font-size: 3rem;
    width: 100%;
    font-weight: 700;
    font-family: "Nosifer";
  }

  @media (max-width: 1080px) {
    .logo {
      width: 12rem;
    }

    .logoName {
      display: none;
    }
  }
`;

export default Header;

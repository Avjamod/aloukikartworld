import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h1 className="hero-heading">Aloukik Artworld</h1>
          <p className="hero-para">
            Welcome to Aloukik Artworld! Immerse yourself in a world of visual
            brilliance where creativity and innovation intertwine. Discover our
            cutting-edge VFX and animation services, and embark on a journey of
            unparalleled storytelling. Enjoy the extraordinary with us!
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> Contact us </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2.5rem;
  }
  .grid {
    gap: 0rem;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 7rem;
    font-family: teko;
  }

  .hero-para {
    margin-bottom: 3.4rem;
    font-family: "Kalnia";
    max-width: 60rem;
    font-weight: 600;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 90%;
    border-radius: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;

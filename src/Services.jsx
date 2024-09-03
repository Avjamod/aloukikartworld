import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
// import GifPlayer from "./GifPlayer";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="services-page">
        <div className="container grid grid-three-column">
          <div className="service">
            <img
              src="./images/Rotoscoping.jpg"
              alt="Rotoscoping image"
            />
            <h2>Rotoscoping</h2>
            {/* <p>
              Camera tracking is a process that involves following a camera's
              position in a physical space to coordinate its movements with 3D
              elements.
            </p> */}
          </div>
          <div className="service">
            <img
              src="./images/Paint-cleanup.jpg"
              alt="object tracking gif"
            />
            <h2>Paint/CleanUp</h2>
            {/* <p>Description of Service 2 goes here...</p> */}
          </div>
          <div className="service">
            <img
              src="/images/Matchmove-cameraObjectTrancking.jpg"
              alt="MAtchmove gif"
            />
            <h2>Matchmove/Camera Object tracking</h2>
            {/* <p>Description of Service 3 goes here...</p> */}
          </div>
          <div className="service">
            <img src="./images/Animation.jpg" alt="Rotoscope gif" />
            <h2>Animation</h2>
            {/* <p>Description of Service 1 goes here...</p> */}
          </div>
          <div className="service">
            <img src="./images/Composition.jpg" alt="Animation gif" />
            <h2>Composition</h2>
            {/* <p>Description of Service 2 goes here...</p> */}
          </div>
          <div className="service">
            <img src="./images/Rotomation.jpg" alt="Animation gif" />
            <h2>Rotomation</h2>
            {/* <p>Description of Service 2 goes here...</p> */}
          </div>
          <div className="service">
            <img
              src="https://i.pinimg.com/originals/f6/f5/ae/f6f5aea7f490e211e9d5276f46d32804.gif"
              alt="editing gif"
            />
            <h2>Video Editing</h2>
            {/* <p>Description of Service 3 goes here...</p> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;

  .common-heading {
    margin: 0;
  }

  .container {
    gap: 0.1rem;
  }

  .services-page {
    padding: 10px;
    text-align: center;
  }

  .service {
    padding: 10px;
    padding-bottom: 0.4rem;
    margin: 10px;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: 0.2s;
  }

  .service h2 {
    margin-top: 1rem;
    font-size: 20px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-family: "Raleway";
  }

  .service p {
    font-size: 16px;
  }

  .service:hover {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  }

  .service img {
    width: 30rem;
    border-radius: 0.5rem;
    height: 20rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .service {
      padding: 0;
      margin-left: 0;
      margin-right: 0;
    }
    .service img {
      width: 38rem;
    }
  }
`;

export default Services;

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Home = () => {
  const { updateHomePage } = useGlobalContext();
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => updateHomePage(), []);

  return (
    <Wrap>
      <HeroSection />
      <hr className="hrstyle" />
      <div className="main-container">
        <div className="image">
          <p className="whatisAAW">Phrase</p>
          <img
            className="animated-image"
            src="/images/logo.png"
            alt=""
            width="80rem"
          />
          <img src="/images/under-logo.gif" width="150rem" />
        </div>
        <div className="about_para">
          <div className="background"></div>
          <p id="about_para">
            Aloukik Artworld Studios, a leading global Visual Entertainment
            Services group, is dedicated to delivering unparalleled creative and
            technical solutions to the dynamic film, mobile, and media
            industries. Operating under the banner of A.A.W Studios Pvt Ltd, our
            headquarters are situated in the vibrant city of BOTAD, GUJRAT,
            India. As a premier Visual Effects and Animation Studio, we
            specialize in providing a comprehensive range of services, including
            VFX Prep services such as Matchmove. At Aloukik Artworld, we take
            pride in our commitment to excellence and innovation. Our talented
            team, driven by passion and expertise, works tirelessly to bring
            visions to life on the big screen. We invite you to explore the
            limitless possibilities of visual storytelling with us. For
            inquiries and project bids, reach out to us at
            aloukikartworld@gmail.com. Experience prompt and efficient
            responses, as we guarantee bid submissions within 3 hours. Choose
            Aloukik Artworld for the assurance of the highest quality VFX Prep
            services at competitive prices.
            <br />
            <br />
            <Button className="btn hireme-btn">
              <NavLink to="/about"> Learn More.. </NavLink>
            </Button>
          </p>
        </div>
      </div>
      <hr className="hrstyle" />
      <ScrollTrigger
        className="setCounter"
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <h2 className="count">
          {counterOn && <CountUp start={0} end={100} duration={3} delay={0} />}+{" "}
          <br />
          <p>Projects</p>
        </h2>

        <h2 className="count">
          {counterOn && <CountUp start={0} end={72} duration={3} delay={0} />}+{" "}
          <br />
          <p>Happy clients</p>
        </h2>

        <h2 className="count">
          {counterOn && <CountUp start={0} end={15} duration={3} delay={0} />}+{" "}
          <br />
          <p>Years Experience </p>
          <br />
        </h2>
      </ScrollTrigger>

      <div className="services"></div>
    </Wrap>
  );
};

const Wrap = styled.section`
  .hrstyle {
    border: 0;
    height: 0.2rem;
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    margin: 2rem 0;
  }
  .main-container {
    display: flex;
  }

  .whatisAAW {
    color: white;
    margin-bottom: 4rem;
    font-family: teko;
    font-size: 4rem;
  }

  .about_para {
    margin-left: 5rem;
    min-width: 56%;
    display: flex;
  }
  .background {
    position: absolute;
    min-height: 60%;
    min-width: 60%;
    // background-color: rgb(67, 67, 65);
    // background-image: url("/images/background3.gif");
    background-size: cover;
    background-position: center;
    // filter: blur(1rem);
    z-index: -1;
  }
  .image {
    margin-left: 2rem;
    background-color: rgb(37, 39, 37);
    // background-image: url("https://i.pinimg.com/originals/b6/97/45/b697456d7041c432cba4d12c1ce666f6.gif");
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 2rem;
    min-width: 30%;
  }
  .animated-image {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1.3s infinite alternate;
  }

  .count {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 6rem;
    font-family: ;
  }

  .count p {
    font-size: 2rem;
  }

  .setCounter {
    display: flex;
    justify-content: space-around;
  }

  #about_para {
    margin: 0 4rem 0 2rem;
    color: black;
    font-family: "Kalnia";
    text-align: justify;
    text-justify: inter-word;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .image {
      margin: 2rem 7rem;
      width: 78%;
    }
    #about_para {
      margin: 0 3rem 0 1rem;
    }
    .main-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .setCounter {
      flex-direction: column;
    }
  }

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1.5rem);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1.5rem);
    }
  }
`;

export default Home;

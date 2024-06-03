import React, { useEffect , useState} from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const About = () => {

  const { updateAboutPage } = useGlobalContext();
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => updateHomePage(), []);
  
  const Wra = styled.section`
    .common-heading {
      margin: 2rem 0;
    }
    body {
      font-family: "Arial", sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    header {
      color: #fff;
      text-align: center;
      padding: 1rem 0;
    }

    section {
      max-width: 120rem;
      margin: 1rem auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .team-member {
      width: 28rem;
      margin: 2rem;
      padding: 2rem;
      background-color: #fff;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: 0.2s;
    }

    .team-member:hover {
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    }

    .team-member img {
      border-radius: 50%;
      max-width: 100%;
      height: auto;
      margin-bottom: 2rem;
    }

    h2 {
      color: #333;
      font-size: 3rem;
    }

    p {
      color: #666;
    }

    .social-icons {
      margin-top: 1.5rem;
    }

    .social-icons a {
      margin: 0 1.5rem;
      color: #333;
      text-decoration: none;
      font-size: 2rem;
    }

    .icons {
      margin: 1.4rem 0.5rem;
      font-size: 2.5rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .team-member {
        width: 35rem;
      }
      .icons {
        font-size: 4rem;
      }
    }
  `;

  return (
    <Wra>
      <h2 className="common-heading">Meet Our Team</h2>
      <section>
        <div class="team-member">
          <img src="/images/Paras Jamod.png" alt="Team Member 1" />
          <h2>Dhaval Jamod</h2>
          <p>CEO & Studio Head</p>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/jamod-dhaval-87b22b19b/"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaInstagram className="icons" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRhzqQxpSMGnQNWmvvppWcBtpszWpPHgwsprTzmzJvzqjSBSsRskbGglzLTGKKTBlTTJv"
              target="_blank"
            >
              <BiLogoGmail className="icons" />
            </a>
          </div>
        </div>

        <div class="team-member">
          <img src="/images/jaypal jamod.png" alt="Team Member 1" />
          <h2>Jaypal Jamod</h2>
          <p>Project Manager</p>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaInstagram className="icons" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRhzqQxpSMGnQNWmvvppWcBtpszWpPHgwsprTzmzJvzqjSBSsRskbGglzLTGKKTBlTTJv"
              target="_blank"
            >
              <BiLogoGmail className="icons" />
            </a>
          </div>
        </div>

        <div class="team-member">
          <img src="/images/sachin makvana.png" alt="Team Member 2" />
          <h2>Sachin Makvana</h2>
          <p>Department Head</p>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaInstagram className="icons" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRhzqQxpSMGnQNWmvvppWcBtpszWpPHgwsprTzmzJvzqjSBSsRskbGglzLTGKKTBlTTJv"
              target="_blank"
            >
              <BiLogoGmail className="icons" />
            </a>
          </div>
        </div>

        <div class="team-member">
          <img src="/images/Arpan Jamod.png" alt="Team Member 3" />
          <h2>Rahul Aniyaliya</h2>
          <p>Match Move supeviser</p>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaInstagram className="icons" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRhzqQxpSMGnQNWmvvppWcBtpszWpPHgwsprTzmzJvzqjSBSsRskbGglzLTGKKTBlTTJv"
              target="_blank"
            >
              <BiLogoGmail className="icons" />
            </a>
          </div>
        </div>

        <div class="team-member">
          <img src="/images/jaypal jamod.png" alt="Team Member 3" />
          <h2>Arpan Jamod</h2>
          <p>IT Head</p>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/aloukik-artworld-64b720264/"
              target="_blank"
            >
              <FaInstagram className="icons" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRhzqQxpSMGnQNWmvvppWcBtpszWpPHgwsprTzmzJvzqjSBSsRskbGglzLTGKKTBlTTJv"
              target="_blank"
            >
              <BiLogoGmail className="icons" />
            </a>
          </div>
        </div>
      </section>
    </Wra>
  );
};

export default About;

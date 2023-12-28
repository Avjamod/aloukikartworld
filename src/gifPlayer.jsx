import React, { useState } from "react";
import styled from "styled-components";

function gifPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="gif-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isPlaying ? "./images/giphy.gif" : "./images/giphy_img.png"}
        alt="Your GIF"
      />
      {isPlaying ? null : <div className="gif-overlay">Hover to Play</div>}
    </div>
  );
}

const Wrapper = styled.section`
  .gif-container {
    display: inline-block;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .gif-container img {
    width: 200px;
    height: auto;
  }

  .gif-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .gif-container:hover .gif-overlay {
    opacity: 1;
  }
`;
export default gifPlayer;

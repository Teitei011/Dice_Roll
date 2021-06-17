import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .container {
    display: flex;
    flex-grow: 1;
  }
  .img {
    width: 100%;
    margin: 2rem;
  }
`;

const ButtonDice = ({ image, text }) => {
  return (
    <Wrapper className="page">
      <div className="container">
          <img className="img" src={image} alt={text} onClick={() => console.log(text)} />
      </div>
    </Wrapper>
  );
};

export default ButtonDice;

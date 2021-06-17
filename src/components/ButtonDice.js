import React, { Component } from "react";
import styled from "styled-components";
import { useDicesContext } from "../tools/context";

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
  const { setRollDice } = useDicesContext();
  return (
    <Wrapper className="page">
      <div className="container">
        <img
          className="img"
          src={image}
          alt={text}
          onClick={() => setRollDice(Number(text))}
        />
      </div>
    </Wrapper>
  );
};

export default ButtonDice;

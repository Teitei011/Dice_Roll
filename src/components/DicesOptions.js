import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
    grid-template-columns: auto auto;
    margin: 1rem;

    .btn{
        border-radius: 2rem;
        border: 1px solid;
    }
`;

const Options = () => {
  return (
    <Wrapper>
      <button className="btn">Advantage</button>
      <button className="btn">Disadvantage</button>
    </Wrapper>
  );
};

export default Options;

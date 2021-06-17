import React, { Component } from "react";
import styled from "styled-components";
import { useDicesContext } from "../tools/context";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 1rem;

  .btn {
    border-radius: 2rem;
    border: 1px solid;
  }
`;

const Options = () => {
  const { setDisavantage, setAdvantage } = useDicesContext();
  return (
    <Wrapper>
      <button className="btn" onClick={() => setAdvantage}>Advantage</button>
      <button className="btn" onClick={() => setDisavantage}>Disadvantage</button>
    </Wrapper>
  );
};

export default Options;

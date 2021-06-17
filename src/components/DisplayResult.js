import React, { Component } from "react";
import styled from "styled-components";
import { useDicesContext } from "../tools/context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Display = ({ value }) => {
  const { displayValue } = useDicesContext();
  return (
    <Wrapper>
      <h1>{displayValue}</h1>
    </Wrapper>
  );
};

export default Display;

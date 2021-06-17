import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Display = ({ value }) => {
  return (
    <Wrapper>
      <h1>{value}</h1>
    </Wrapper>
  );
};

export default Display;

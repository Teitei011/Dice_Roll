import React from "react";
import styled from "styled-components";

import Display from "./components/DisplayResult";
import Options from "./components/DicesOptions";
import Dices from "./components/Dices";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: gray;
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: white;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Display value={20} />
      <Dices />
      <Options />
    </Wrapper>
  );
};

export default Home;

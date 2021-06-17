import React, { Component } from "react";
import styled from "styled-components";
import ButtonDice from "./ButtonDice";

// Importing Images
import D20Image from "../assets/Images/d20new.png";
import D12Image from "../assets/Images/d12new.png";
import D10Image from "../assets/Images/d10new.png";
import D06Image from "../assets/Images/d6new.png";
import D04Image from "../assets/Images/d4new.png";

const Wrapper = styled.div`


  .dicesPosition {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;


    @media (min-width: 992px){
        grid-template-rows: auto auto;
    }
  }
`;

const Dices = () => {
  return (
    <Wrapper className="page">
      <div className="dicesPosition">
        <ButtonDice image={D20Image} text={20} />
        <ButtonDice image={D12Image} text={12} />
        <ButtonDice image={D10Image} text={10} />
        <ButtonDice image={D06Image} text={6} />
        <ButtonDice image={D04Image} text={4} />
      </div>
    </Wrapper>
  );
};

export default Dices;

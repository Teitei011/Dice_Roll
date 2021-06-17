import styled from "styled-components";
import React from "react";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  background-color: white;
  width: 30rem;
`;

const Paginas = () => {
  return (
    <ButtonContainer>
      <BoxContainer className="btn" onClick={(e) => console.log("Mesa")}>
        Mesa
      </BoxContainer>
      <BoxContainer className="btn" onClick={(e) => console.log("Histórico")}>
        Histórico
      </BoxContainer>
    </ButtonContainer>
  );
};

export default Paginas;
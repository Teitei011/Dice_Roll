import React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;

  .btn {
    border-radius: 2rem;
  }

  .icons {
    size: 20rem;
  }
`;



const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  return (
    <header>
      <Wrapper>
        <NavbarContainer>
          <Container>
            <h3>RPG Simple Dice</h3>
            <p>Toque nos dados e boa sorte!</p>
          </Container>
        </NavbarContainer>

      </Wrapper>
    </header>
  );
};

export default Navbar;

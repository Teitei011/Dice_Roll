import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Display from "./components/DisplayResult";
import Options from "./components/DicesOptions";
import Dices from "./components/Dices";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: black;
`;

function App() {
  return (
    <Wrapper>
      <Options />
      <Display value={20} />
      <Dices />
      <Footer />
    </Wrapper>
  );
}

export default App;

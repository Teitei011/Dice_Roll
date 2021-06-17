import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Router, Route, Switch } from "react-dom";

//

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Paginas from "./components/paginas";

//
import Error from "./pages/Error";
import Home from "./pages/Home";
import History from "./pages/History";


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

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

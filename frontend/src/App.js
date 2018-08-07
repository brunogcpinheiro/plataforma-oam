import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import "./styles/global";

import { Wrapper, Container, Content } from "./styles/components";

import Sidebar from "./components/Sidebar";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Routes />
            </Content>
          </Container>
        </Wrapper>
      </Router>
    );
  }
}

export default App;

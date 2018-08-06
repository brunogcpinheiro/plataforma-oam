import React, { Component } from "react";

import "./styles/global";

import { Wrapper, Container, Content } from "./styles/components";

import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Sidebar />
          <Content />
        </Container>
      </Wrapper>
    );
  }
}

export default App;

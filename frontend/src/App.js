import React, { Component } from "react";

import './styles/global';

import { BrowserRouter as Router } from "react-router-dom";

import { Wrapper } from './styles/components';

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
            <Routes />
        </Wrapper>
      </Router>
    );
  }
}

export default App;

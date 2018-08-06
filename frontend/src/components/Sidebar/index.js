import React from "react";
import { Container, Nav, Exit } from "./styles";

import LogoBranca from "../../assets/images/logobranca.png";

const Sidebar = () => (
  <Container>
    <div>
      <img src={LogoBranca} alt="Logo" />

      <Nav>
        <ul>
          <li>
            <a>Cursos</a>
          </li>
          <li>
            <a>Usuário</a>
          </li>
        </ul>
        <Exit>
          <span>X</span>
        </Exit>
      </Nav>
    </div>
  </Container>
);

export default Sidebar;

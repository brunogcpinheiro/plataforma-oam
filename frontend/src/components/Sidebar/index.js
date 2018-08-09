import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import LogoBranca from "../../assets/images/logobranca.png";

const Sidebar = () => (
  <Container>
    <img src={LogoBranca} alt="Logo" />
    <div>
      <ul>
        <li>
          <Link to="/courses">
            <i className="fas fa-book" />
            <span>Cursos</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i className="fas fa-user" />
            <span>Usuário</span>
          </Link>
        </li>
      </ul>
      <Link to="/">
        <div>
          <i className="fas fa-door-open" />
          <span>Sair</span>
        </div>
      </Link>
    </div>
  </Container>
);

export default Sidebar;

import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "./styles";

import LogoBranca from "../../assets/images/logobranca.png";

const Sidebar = () => (
  <Container>
    <img src={LogoBranca} alt="Logo" />
    <div>
      <ul>
        <li>
          <Link to="/courses">
            <i class="fas fa-book"></i>
            <span>Cursos</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i class="fas fa-user"></i>
            <span>Usuário</span>
          </Link>
        </li>
      </ul>
      <Link to="">
        <div>
          <i class="fas fa-door-open"></i>
          <span>Sair</span>
        </div>
      </Link>
    </div>
  </Container>
);

export default Sidebar;

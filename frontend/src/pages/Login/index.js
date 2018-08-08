import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Container, LoginForm, Form } from "./styles";
import api from "../../services/api";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleContent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = async e => {
    e.preventDefault();

    const { data: user } = await api.post("/login", {
      email: this.state.email,
      password: this.state.password
    });

    console.log(user);
  };

  render() {
    return (
      <Container>
        <LoginForm>
          <Form onSubmit={this.login}>
            <img src={Logo} alt="Logo" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleContent}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={this.handleContent}
            />
            {/* <Link to=""> */}
            <input type="submit" value="Entrar" />
            {/* </Link> */}
          </Form>
        </LoginForm>
      </Container>
    );
  }
}

export default Login;

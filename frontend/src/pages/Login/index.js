import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Container, LoginForm, Form, ErrorMessage } from "./styles";
import api from "../../services/api";
import { reactLocalStorage } from 'reactjs-localstorage';

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    isLoggedIn: false,
  };

  handleContent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = async e => {
    e.preventDefault();
    
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
      try {
    
      const { data: user } = await api.post('/login', {
        email: this.state.email,
        password: this.state.password
      });
      
      reactLocalStorage.set('token', user.token);
      
      return this.setState({ isLoggedIn: true });
        
      } catch (error) {
        this.setState({ error: "Algo deu errado na requisição!" });
      }
    }
  };

  render() {
    return (
      <Container>
        <LoginForm>
          <Form onSubmit={this.handleSave}>
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
            { this.state.isLoggedIn && <Redirect to="/courses" /> }
            <input type="submit" value="Entrar" />
          </Form>
        </LoginForm>
        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
      </Container>
    );
  }
}

export default withRouter(Login);

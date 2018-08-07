import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import { Container, LoginForm, Form } from './styles';

const Login = () => (
    <Container>
        <LoginForm>
            <Form>
                <img src={Logo} alt="Logo" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <Link to="/courses">
                    <input type="submit" value="Entrar" />
                </Link>
            </Form>
        </LoginForm>
    </Container>
);

export default Login;
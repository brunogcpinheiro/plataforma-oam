import React from 'react';

import { Container, Form } from './styles';

const Users = () => (
    <Container>
        <h2>Alterar Perfil</h2>
        <div>
            <Form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar senha" />
                <input type="submit" value="Alterar" />
            </Form>
        </div>
    </Container>
);

export default Users;
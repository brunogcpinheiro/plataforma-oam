import React, { Fragment } from 'react';

import { Container, Card } from './styles';

import Sidebar from '../../components/Sidebar';

import Iniciante from '../../assets/images/iniciante.jpg';
import Intermediario from '../../assets/images/intermediario.jpg';
import Avancado from '../../assets/images/avancado.jpg';

const Courses = () => (
    <Fragment>
        <Sidebar />
        <Container>
            <h2>Cursos</h2>
            <div>
                <Card>
                    <img src={Iniciante} alt="Curso Iniciante" />
                    <h4>Ortodontia Inicial I</h4>
                    <small>Dr. Alexandre Mendonça</small>
                    <button>Acessar</button>
                </Card>
                <Card>
                    <img src={Intermediario} alt="Curso Intermediário" />
                    <h4>Ortodontia Intermediária III</h4>
                    <small>Dr. Alexandre Mendonça</small>
                    <button>Acessar</button>
                </Card>
                <Card>
                    <img src={Avancado} alt="Curso Avançado" />
                    <h4>Ortodontia Avançada II</h4>
                    <small>Dr. Alexandre Mendonça</small>
                    <button>Acessar</button>
                </Card>
            </div>
        </Container>
    </Fragment>
);

export default Courses;
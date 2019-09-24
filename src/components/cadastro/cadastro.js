import React from 'react';
import { Row, Col, Card, Input, Button } from 'react-materialize';
import User from '../user/user';

const Cadastro = () => (
    <Row>
        <Col m={3} s={12}>
            <User/>
        </Col>
        <Col m={8} s={12}>
            <h5>Cadastro</h5>
            <Card>
                <Row>
                    <Input placeholder="Nome Completo" type="text" label="Nome" s={12} />
                    <Input placeholder="Logradouro" label="Endereço" s={12} />
                    <Input placeholder="Idade" type="number" s={2}></Input>
                    <Col s={12} m={12}>
                        <Button waves='light' className="right grey darken-1">Enviar</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
);

export default Cadastro;
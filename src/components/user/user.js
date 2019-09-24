import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.jpg';

const User = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img src={avatar} className="circle responsive-img"/>
            </Col>
        </Row>
        <Row className="center-align">
            <h5>Fulano</h5>
            <p className="grey darken-1 white-text">Administrador</p>
        </Row>
    </Card>
);

export default User;
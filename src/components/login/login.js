import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Card, Input, Button } from "react-materialize";

import { auth } from "../../config/config";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      estaLogando: false,
      estaAutenticado: false,
      erro: false
    };

    this.email = null;
    this.senha = null;

  }


  autenticaUsuario = () => {
    this.setState({ estaLogando: true, erro: false });
    auth
      .signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(user => {
        this.setState({ estaAutenticado: true });
      })
      .catch(err => {
        console.log("Erro", err);
        this.setState({
          erro: true,
          estaLogando: false,
          estaAutenticado: false
        });
      });
  };

  render() {
    if (this.state.estaAutenticado) {
      return <Redirect to="/cadastro" />;
    }

    return (
      <Row>
        <Col m={12} s={12}>
          <h5>Login</h5>
          <Card>
            <Row>
              <Input
                placeholder="Usuário"
                type="email"
                label="Login"
                ref={ref => (this.email = ref)}
                name="email"
                maxlength="30"
                s={12}
                required
              />
              <Input
                placeholder="Senha"
                label="Senha"
                ref={ref => (this.senha = ref)}
                name="senha"
                type="password"
                maxlength="16"
                s={12}
                required
              />
              {this.state.erro&& <small>Email ou senha incorretos</small>}
              <Col s={12} m={12}>
                <Button
                  waves="light"
                  className="right grey darken-1"
                  onClick={this.autenticaUsuario}
                >
                  Enviar
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

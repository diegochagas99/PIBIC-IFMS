import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Card, Input, Button } from "react-materialize";

import { auth } from "../../config/config";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: '',
        senha: ''
      },
      estaLogando: false,
      estaAutenticado: false,
      erro: false
    };
  }


  autenticaUsuario = () => {
    this.setState({ estaLogando: true, erro: false });
    const email = this.state.login.email;
    const senha = this.state.login.senha;
    console.log(email, senha)
    auth
      .signInWithEmailAndPassword(email, senha)
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

  aoAlterar = (event) => {
    const valor = event.target.value;
    const nome = event.target.name;

    let login = { ...this.state.login };

    login[nome] = valor;

    this.setState({ login });

  }

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
                name="email"
                value={this.state.login.email}
                onChange={this.aoAlterar}
                maxlength="30"
                s={12}
                required
              />
              <Input
                placeholder="Senha"
                label="Senha"
                name="senha"
                value={this.state.login.senha}
                onChange={this.aoAlterar}
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

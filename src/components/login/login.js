import React, { Component } from "react";
import { auth } from "../../config/config";
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

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
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Login</p>
            <label className="grey-text">
              Seu email
            </label>
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.login.email}
              onChange={this.aoAlterar}
              label="Email"
              name="email"
              maxlenght="30"
              autoFocus/>
            <br />
            <label className="grey-text">
              Sua senha
            </label>
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"  
              label="Senha"
              type="password"
              value={this.state.login.senha}
              onChange={this.aoAlterar}
              maxlenght="16"
              autoComplete="senha-atual"/>
            <div className="text-center mt-4">
              <MDBBtn
              color="unique"
              onClick={this.autenticaUsuario}>
                Login
              </MDBBtn>
            </div>
            {this.state.erro && <small> Email e/ou senha incorretos. </small>}
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );

  }
}
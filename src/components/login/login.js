import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
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

    const useStyles = makeStyles(theme => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // corrigir erro do IE 11.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
    }));

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={useStyles.paper}>
          <Typography component="h1" variant="h5">
            Login
        </Typography>
          <form style={useStyles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.login.email}
              onChange={this.aoAlterar}
              label="Email"
              name="email"
              maxlenght="30"
              autoFocus
            />
            <TextField
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
              autoComplete="senha-atual"
            />
            {this.state.erro && <small> Email e/ou senha incorretos. </small>}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={useStyles.button}
              onClick={this.autenticaUsuario}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Esqueci minha senha
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    );
  }
}
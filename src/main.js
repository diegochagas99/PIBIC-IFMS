import React from 'react';
import Login from './components/login/login';
import Cadastro from './components/cadastro/cadastro';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/cadastro' component={Cadastro} />
            </Switch>
        </Container>
    </main>
);

export default Main;
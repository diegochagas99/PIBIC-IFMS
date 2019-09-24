 import React from 'react';
 import Home from './components/home/home';
 import Cadastro from "./components/cadastro/cadastro";
 import { Container } from 'react-materialize';
 import { Switch, Route } from 'react-router-dom';

 const Main = () => (
     <main>
         <Container>
             <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cadastro' component={Cadastro}/>
            </Switch>
         </Container>
     </main>
 );
 
 export default Main;
 import React from 'react';
import Login from './components/login/login';
 import { Container } from 'react-materialize';
 import { Switch, Route } from 'react-router-dom';

 const Main = () => (
     <main>
         <Container>
             <Switch>
                <Route exact path='/' component={Login}/>
            </Switch>
         </Container>
     </main>
 );
 
 export default Main;
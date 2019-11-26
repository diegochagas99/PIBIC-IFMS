import React, { Component } from 'react';
import { Row, Col, Card, Input, Button } from 'react-materialize';
import User from '../user/user';
import { database } from '../../config/config';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ficha: {
                nome: '',
                endereco: '',
                idade: '',
            },
            erro: false
        }
    }

    salvar = (event) => {
        event.preventDefault();

        let ficha = this.state.ficha;

        database.ref('fichas').push(ficha).then(
            () =>  {
                let ficha = {
                    nome: '',
                    endereco: '',
                    idade: '',
                }
                this.setState({
                    ficha,
                    erro: false
                });
            },
            erro => {
                console.log(erro);
                this.setState({
                    erro: true
                });
            }
        ).catch(erro => {
            console.log(erro);
            this.setState({
                erro: true
            });
        });
    }


    aoAlterar = (event) => {
        const valor = event.target.value;
        const name = event.target.name;

        let ficha = ({ ...this.state.ficha });

        ficha[name] = valor;

        this.setState({ ficha });
    }

    render(){
        return(
            <Row>
                <Col m={3} s={12}>
                    <User/>
                </Col>
                <Col m={8} s={12}>
                    <h5>Cadastro</h5>
                    <Card>
                        <Row>
                            <Input 
                                placeholder="Nome Completo" 
                                type="text" 
                                label="Nome"
                                value={this.state.ficha.nome} 
                                name="nome"
                                onChange={this.aoAlterar}
                                s={12} 
                            />
                            <Input 
                                placeholder="Logradouro" 
                                label="Endereço"
                                value={this.state.ficha.endereco} 
                                name="endereco"
                                onChange={this.aoAlterar} 
                                s={12} 
                            />
                            <Input 
                                placeholder="Idade" 
                                type="number"
                                value={this.state.ficha.idade} 
                                name="idade"
                                onChange={this.aoAlterar}
                                s={2}
                            />
                            <Col s={12} m={12}>
                                <Button waves='light' onClick={this.salvar} className="right grey darken-1">Enviar</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}

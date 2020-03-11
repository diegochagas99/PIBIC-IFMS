import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBFormInline } from 'mdbreact';
/* import User from '../user/user'; */
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
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <form>
                        <p className="h4 text-center mb-4">Cadastro de Ficha de Notificação</p>
                        <label className="grey-text"> Nome Completo </label>
                        <input
                          type="text" 
                          label="Nome"
                          value={this.state.ficha.nome} 
                          name="nome"
                          onChange={this.aoAlterar}
                          className="form-control" />
                        <br />
                        <label className="grey-text"> Logradouro </label>
                        <input 
                          label="Endereço"
                          value={this.state.ficha.endereco} 
                          name="endereco"
                          onChange={this.aoAlterar} 
                          type="text"
                          className="form-control" />
                        <br />
                        <label className="grey-text"> Idade </label>
                        <input
                          type="number"
                          value={this.state.ficha.idade} 
                          name="idade"
                          onChange={this.aoAlterar}
                          className="form-control" />
                        <br />
                        <label className="grey-text"> Telefone </label>
                        <input
                          type="number"
                          value={this.state.ficha.telefone} 
                          name="telefone"
                          onChange={this.aoAlterar}
                          className="form-control" />
                        <br />
                        <label className="grey-text"> Número do Cartão do SUS </label>
                        <input
                          type="number"
                          value={this.state.ficha.cartaosus} 
                          name="cartao-sus"
                          onChange={this.aoAlterar}
                          className="form-control" />
                        <br />
                        <label className="grey-text"> Unidade de Saúde </label>
                        <input
                          type="text"
                          value={this.state.ficha.unidade} 
                          name="unidade"
                          onChange={this.aoAlterar}
                          className="form-control" />
                        <br />
                        <label className="grey-text"> Agravos/Doenças </label>
                        <select className="browser-default custom-select"
                          value={this.state.ficha.doencas} 
                          onChange={this.aoAlterar}>
                              <option>Escolha uma opção</option>
                              <option value="1">Dengue</option>
                              <option value="2">Zika</option>
                              <option value="3">Chikungunya</option>
                        </select>
                        <br />
                        <label className="grey-text"> Manifestações Clínicas </label>
                        <div>
                            <MDBFormInline>
                                <MDBInput label="Febre" filled type="checkbox" id="checkbox1" containerClass='mr-5' />
                                <MDBInput label="Fraqueza" filled type="checkbox" id="checkbox2" containerClass='mr-5' />
                                <MDBInput label="Edema" filled type="checkbox" id="checkbox3" containerClass='mr-5' />
                            </MDBFormInline>
                        </div>
                        <div className="text-center mt-4">
                          <MDBBtn color="unique" onClick={this.salvar}>
                            Cadastrar Ficha de Notificação
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
        );
    }
}

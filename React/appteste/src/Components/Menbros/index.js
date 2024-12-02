import React, { Component } from "react";

export default class Menbro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
    this.mudarNome = this.mudarNome.bind(this);
    this.sairNome = this.sairNome.bind(this);
  }

  mudarNome() {
    this.setState({ nome: "Fernando" });
  }

  sairNome() {
    this.setState({ nome: this.props.nome });
  }

  render() {
    return (
      <>
        <h3>Aula 3</h3>
        <h3>
          Seja bem vindo <span>{this.state.nome}</span>{" "}
        </h3>

        <button onClick={this.mudarNome}>Entrar como Fernando</button>
        <br />
        <button onClick={this.sairNome}>Sair</button>
      </>
    );
  }
}

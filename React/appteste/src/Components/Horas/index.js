import React, { Component } from "react";

export default class Horas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("soma()");
  }

  render() {
    return (
      <>
        <h2>Horario</h2>
        <span>{this.state.hora}</span>
        <hr />
      </>
    );
  }
}

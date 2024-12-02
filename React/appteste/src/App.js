import React, { Component } from "react";

import Dados from "./Components/Dados";
import Horas from "./Components/Horas";
import Menbro from "./Components/Menbros";

export default class App extends Component {
  render() {
    return (
      <div>
        <Dados />
        <Horas />
        <Menbro nome="Visitante" />
      </div>
    );
  }
}

import React from "react";
import { PaginaListaUsuarios } from "./components/PaginaListaUsuarios";
import { PaginaRegistro } from "./components/PaginaRegistro";

export default class App extends React.Component {
  state = {
    pagina: true
  }

  mudarPagina = () => {
    this.setState({ pagina: !this.setState.pagina})
  }

  render() {
    return (
      <div>
        <h1>Labenusers</h1>
        {this.state.pagina ? <PaginaRegistro /> : <PaginaListaUsuarios/>}
        <button>Mudar Pagina</button>
      </div>
    );
  }
}


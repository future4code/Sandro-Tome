import React from "react";
import PerguntaLivre from "./PerguntaLivre";

class Etapa2 extends React.Component {
    render() {
      return (
        <div>
          <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
          <PerguntaLivre pergunta={"5. Qual curso?"} />
          <PerguntaLivre pergunta={"6. Qual a unidade de ensino?"} />
        </div>
      );
    }
  }

export default Etapa2;
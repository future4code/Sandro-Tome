import React from "react";
import PerguntaLivre from "./PerguntaLivre";
import PerguntaOpcoes from "./PerguntaOpcoes";

class Etapa3 extends React.Component {
    render() {
      return (
        <div>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
          <PerguntaLivre
            pergunta={"5. Por que você não terminou um curso de graduação?"}
          />
          <PerguntaOpcoes
            pergunta={"6. Você fez algum curso complementar?"}
            opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
          />
        </div>
      );
    }
  }

export default Etapa3;
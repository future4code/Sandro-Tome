import styled from "styled-components";

export const AstroMatchLogo = styled.img`
    width: 35%;
    padding-top: 10px;
`;

export const CardHome = styled.div`
    background-color: #ffffff;
    border-radius: 5px;
    border: 3px solid #000;
    height: auto;
    width: 30%;
    margin: 1% auto 0 auto;
`;

export const DetalheTexto = styled.div`
    h3 {
        color: #fff;
        font-size: 1.3em;
        text-shadow: black 0.1em 0.1em 0.2em;
    }

    p {
        text-align: left;
        margin: 0 0.8em;
    }
`;

export const FotoPerfil = styled.img`
  border-radius: 5px;
  width: 80%;
  height: 45vh;
`;

export const CardMatches = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
  align-items: center;
  flex-grow: 1;
  margin: 1em;

  p {
    font-size: 1em;
    font-weight: normal;
    padding: 2em;
  }
`;

export const DetalheFotoPerfil = styled.img`
  width: 7vw;
  height: 15vh;
  border-radius: 50%;
`;

export const OpcoesIcone = styled.img`
  height: 60px;

  &:hover {
    height: 70px;
  }
`;

export const OpcoesBotao = styled.button`
  margin: 1rem 2em 1rem 2em;
  border: 1px transparent;
  border-radius: 50%;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const BotaoMostraLista = styled.button`
  margin-bottom: 2%;
  height: 5vh;
  background: #830600;
  border: transparent;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;

  &:hover {
    cursor: pointer;
    background: #009000;
    opacity: 0.8;
    transition: 300ms;
  }
`;

export const BotaoLimpar = styled.button`
  margin-bottom: 2%;
  height: 5vh;
  background: #ff0000;
  border: transparent;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;

  &:hover {
    cursor: pointer;
    background: #ff4000;
    opacity: 0.8;
    transition: 300ms;
  }
`;

export const BotaoVoltar = styled.button`
  margin-bottom: 2%;
  height: 5vh;
  background: #762d93;
  border: transparent;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;

  &:hover {
    cursor: pointer;
    background: #762d93;
    opacity: 0.8;
    transition: 300ms;
  }
`;

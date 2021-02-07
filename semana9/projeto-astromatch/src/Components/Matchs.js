/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import { baseUrl, axiosConfig } from "./Parameters";
import {
  CardMatches,
  DetalheFotoPerfil,
  BotaoLimpar,
  BotaoVoltar,
} from "./Styled-Components";

export default function Matches() {
  const [mostrarPerfil] = useState([]);
  const [matches, setMatches] = useState([]);
  const [mostrarPagina, setMostrarPagina] = useState("");

  useEffect(() => {
    getMatches();
  }, [mostrarPerfil]);

  const getMatches = () => {
    axios
      .get(`${baseUrl}/${axiosConfig}/matches`)
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatchs = () => {
    axios
      .put(`${baseUrl}/${axiosConfig}/clear`)
      .then((response) => {
        alert("Seus matches foram removidos com sucesso!");
        getMatches();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changePage = () => {
    setMostrarPagina(!mostrarPagina);
  };

  if (mostrarPagina) {
    return <Home />;
  } else if (mostrarPagina !== mostrarPagina) {
    return <Matches />;
  }

  return (
    <div>
      {matches.map((match) => {
        return (
          <CardMatches>
            <DetalheFotoPerfil src={match.photo} />
            <p>{match.name}</p>
          </CardMatches>
        );
      })}
      <BotaoLimpar
        onClick={() => {
          if (
            window.confirm(
              "Tem certeza que deseja limpar a sua lista de matches?"
            )
          ) {
            clearMatchs(mostrarPerfil.id);
          }
        }}
      >
        Limpar Matches
      </BotaoLimpar>
      <BotaoVoltar onClick={changePage}>Voltar</BotaoVoltar>
    </div>
  );
}

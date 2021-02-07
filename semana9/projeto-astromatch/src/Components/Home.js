/* eslint-disable no-self-compare */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Matchs from "./Matchs";
import { baseUrl, axiosConfig } from "./Parameters";
import {
  FotoPerfil,
  DetalheTexto,
  OpcoesIcone,
  OpcoesBotao,
  BotaoMostraLista,
} from "./Styled-Components";
import Heart from '../Images/heart.png';
import Close from '../Images/close.png';

export default function Home() {
  const [mostraPerfil, setMostraPerfil] = useState([]);
  const [mostraPagina, setMostraPagina] = useState("");

  useEffect(() => {
    if (mostraPerfil === "") {
      getProfileToChoose();
    }
  });

  const mudaPagina = () => {
    setMostraPagina(!mostraPagina);
  };

  if (mostraPagina) {
    return <Matchs />;
    } else if (mostraPagina !== mostraPagina) {
    return <Home />;
  }

  const getProfileToChoose = () => {
    axios
      .get(`${baseUrl}/${axiosConfig}/person`)
      .then((response) => {
        setMostraPerfil(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const match = () => {
    const body = {
      id: mostraPerfil.id,
      choice: true,
    };
    axios
      .post(`${baseUrl}/${axiosConfig}/choose-person`, body)
      .then((response) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const semMatch = () => {
    const body = {
      id: mostraPerfil.id,
      choice: false,
    };
    axios
      .post(`${baseUrl}/${axiosConfig}/choose-person`, body)
      .then((response) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DetalheTexto>
      <FotoPerfil src={mostraPerfil.photo} alt="Foto Perfil" />
      <h3>
        {mostraPerfil.name}, {mostraPerfil.age} anos
      </h3>
      <p>{mostraPerfil.bio}</p>
      <div>
        <OpcoesBotao>
          <OpcoesIcone
            onClick={() => semMatch(mostraPerfil.id)}
            src={Close}
            alt="Ícone deslike"
          />
        </OpcoesBotao>
        <OpcoesBotao>
          <OpcoesIcone
            onClick={() => match(mostraPerfil.id)}
            src={Heart}
            alt="Ícone de coração"
          />
        </OpcoesBotao>
        <div>
          <BotaoMostraLista onClick={mudaPagina}>Mostrar Matches</BotaoMostraLista>
        </div>
      </div>
    </DetalheTexto>
  );
}

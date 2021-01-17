import React from 'react';
import styled from 'styled-components';
import CriadorPlaylist from './components/CriadorPlaylist';
import GerenciadorPlaylist from './components/GerenciadorPlaylist/Index';
import Header from './components/Header';
//import './App.css';

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`

export default class App extends React.Component {
  state = {
    paginaAtual: 'gerenciaPlaylist'
  }

  mudarPagina = (paginaAtual) => {
    this.setState({paginaAtual: paginaAtual})
  }

  render() {

    const renderizaPaginaAtual = () => {
      if(this.state.paginaAtual === 'criaPlaylist') {
        return <CriadorPlaylist/>
      } else if (this.state.paginaAtual === 'gerenciaPlaylist'){
        return <GerenciadorPlaylist/>
      }
    }

    return (
      <Container>
        <Header
          mudarPagina={this.mudarPagina}
        />
        {renderizaPaginaAtual()}
      </Container>
    );
  }
}
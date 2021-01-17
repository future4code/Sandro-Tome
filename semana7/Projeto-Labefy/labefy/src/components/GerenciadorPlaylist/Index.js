/* eslint-disable no-undef */
import React from 'react'
import styled from 'styled-components'
import DetalhePlaylists from '../DetalhePlaylist'
import Playlists from '../Playlists'

const GerenciadorPlaylistContainer = styled.div`
    
`

class GerenciadorPlaylist extends React.Component {
    state = {
        paginaAtual: 'playlists'
    }

    mudarPagina = (paginaAtual) => {
        this.setState({paginaAtual: paginaAtual})
      }
    
    render() {
        const renderizarPaginaAtual = () => {
            if (this.state.paginaAtual === 'playlists') {
                return <Playlists
                    mudarPagina={this.mudarPagina}
                />
            } else if (this.state.paginaAtual === 'detalhePlaylist') {
                return <DetalhePlaylists
                    mudarPagina={this.mudarPagina}
                />
            }
        }
        return (
            <GerenciadorPlaylistContainer>
                {renderizarPaginaAtual()}
            </GerenciadorPlaylistContainer>
        )
    }
}

export default GerenciadorPlaylist
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { axiosConfig, baseUrl } from '../../constantes'

const CriadorPlaylistContainer = styled.div`
    margin: 0px 300px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
` 

const FormCriadorPlaylist = styled.form `
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    height: 120px;
`

class CriadorPlaylist extends React.Component {
    state = {
        valorInputNome: '',
    }

    mudaValorInputNome = (event) => {
        this.setState({valorInputNome: event.target.value})
    }

    criarPlaylist = (event) => {
        event.preventDefault()
        const body = {
            name: this.valorInputNome
        }
        axios.post(baseUrl, body, axiosConfig).then(response => {
            console.log(response)
        }).catch(error => [
            console.log(error)
        ])
    }

    render() {
        return (
            <CriadorPlaylistContainer>
                <h1>Cadastre sua Playlist</h1>
                <FormCriadorPlaylist onSubmit={this.criarPlaylist}>
                    <label>Nova Playlist</label>
                    <input
                        placeholder='Nome da playlist'
                        type='text'
                        value={this.state.valorInputNome}
                        onChange={this.mudaValorInputNome}
                    />
                    <button type='submit'>Cadastrar Playlist</button>
                </FormCriadorPlaylist>
            </CriadorPlaylistContainer>
        )
    }  
}

export default CriadorPlaylist
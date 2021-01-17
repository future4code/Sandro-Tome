import React from 'react'
import styled from 'styled-components'

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

    }

    render() {
        return (
            <CriadorPlaylistContainer>
                <h1>Cadastre sua Playlist</h1>
                <FormCriadorPlaylist>
                    <label>Nova Playlist</label>
                    <input
                        placeholder='Nome da playlist'
                    />
                    <button type='submit'>Cadastrar Playlist</button>
                </FormCriadorPlaylist>
            </CriadorPlaylistContainer>
        )
    }  
}

export default CriadorPlaylist
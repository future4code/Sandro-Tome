import React from 'react'
import styled from 'styled-components'

const CardMusicaContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        display: flex;
        align-items: center;
    }
`

const MusicaNomeContainer = styled.h4`
    margin: 10px;
`

const ArtistaContainer = styled.p`
    margin-right: 10px;
`

const ButtonDeletar = styled.p`
    color: red;
`

const CardMusica = (props) => {
    return (
        <CardMusicaContainer>
            <div>
                <MusicaNomeContainer>{props.musicasNome} - </MusicaNomeContainer>
                <ArtistaContainer>{props.artista}</ArtistaContainer>
                <ButtonDeletar>deletar</ButtonDeletar>
            </div>
            <audio controls='controls'>
                <source src={props.url} type='audio'/>
            </audio>
        </CardMusicaContainer>
    )
}

export default CardMusica
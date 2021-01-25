import React from 'react'
import styled from 'styled-components'

const CardPlaylistContainer = styled.div`
    display: flex;
    align-items: center;
`

const NameContainer = styled.p`
    margin: 10px;
`

const ButtonDeletar = styled.p`
    color: red;
`

const CardPlaylist = (props) => {
    return (
        <CardPlaylistContainer>
            <button onClick={() => props.mudarPagina('detalhePlaylist')}>Abrir playlist</button>
            <NameContainer>{props.name}</NameContainer>
            <ButtonDeletar>deletar</ButtonDeletar>
        </CardPlaylistContainer>
    )
}

export default CardPlaylist
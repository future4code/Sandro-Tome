import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background-color: #625df5;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ButtonContainer = styled.div`
    width: 260px;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button `
    border-radius: 10px
` 

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonContainer>
                <Button onClick={() => props.mudarPagina('gerenciaPlaylist')}>Gerenciar Playlists</Button>
                <Button onClick={() => props.mudarPagina('criaPlaylist')}>Cadastrar Playlist</Button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export default Header
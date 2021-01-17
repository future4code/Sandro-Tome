import React from 'react'
import styled from 'styled-components'
import CardPlaylist from '../CardPlaylist'

const PlaylistsContainer = styled.div`
    margin: 0px 300px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
`

class Playlists extends React.Component {
    state = {
        playlists: [
            {
                "id": "7321b229-0f89-4076-a700-ad3ec864178b",
                "name": "Blues"
            },
            {
                "id": "3d247a2d-446f-4d0d-8ac1-c5b34c59dcba",
                "name": "Funkytown"
            }
        ]
    }
    
    render() {
        const  playlists = this.state.playlists.map(playlist => {
            return <CardPlaylist
                key={playlist.id}
                mudarPagina={this.props.mudarPagina}
                name={playlist.name}
            />
        })

        return (
            <PlaylistsContainer>
                {playlists}
                <button>Abrir Playlists</button>
            </PlaylistsContainer>
        )
    }
}

export default Playlists
import React from 'react'
import styled from 'styled-components'
import CardMusica from '../CardMusica'

const DetalhePlaylistContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
`

const FormAddMusica = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const DivButton = styled.div `
    display:flex;
    justify-content: center;
`


class DetalhePlaylists extends React.Component {
    state = {
        musicas: [
            {
                "id": "0d7a649b-7300-45f2-a3d2-4e4c8669251c",
                "name": "Backstreets",
                "artist": "Lazer Lloyd",
                "url": "string"
            },
            {
                "id": "dbdaa14d-e30d-454e-be4f-d9776acaccb4",
                "name": "She Said",
                "artist": "Jack Broadbent",
                "url": "string"
            }
        ]
    }
    
    render() {

        const musicas = this.state.musicas.map(musica => {
            return <CardMusica
                key={musica.id}
                musicasNome={musica.name}
                artista={musica.artist}
                url={musica.url}
            />
        })

        return (
            <DetalhePlaylistContainer>
                <FormAddMusica>
                    <div>
                        <label>Nome da música</label>
                        <input/>
                    </div>
                    <div>
                        <label>Artista</label>
                        <input/>
                    </div>
                    <div>
                        <label>Url</label>
                        <input/>
                    </div>
                    <button type='submit'>Adicionar música</button>
                </FormAddMusica>
                {musicas}
                <DivButton>
                    <button onClick={() => this.props.mudarPagina('playlists')}>Voltar para Playlists</button>
                </DivButton>
            </DetalhePlaylistContainer>
        )
    }
}

export default DetalhePlaylists
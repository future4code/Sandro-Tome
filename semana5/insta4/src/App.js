import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Post2 from './components/Post2/Post2';
import Post3 from './components/Post3/Post3'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post2
          nomeUsuario={'Davi'}
          fotoUsuario={'https://picsum.photos/50/50?a=2'}
          fotoPost={'https://picsum.photos/200/150?a=22'}
        />

        <Post3
          nomeUsuario={'Sandro'}
          fotoUsuario={'https://picsum.photos/50/50?a3'}
          fotoPost={'https://picsum.photos/200/150?a=33'}
        />
      </div>
    );
  }
}

export default App;

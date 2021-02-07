import React from 'react';
import Logo from './Images/logo.png';
import Home from './Components/Home';
import { AstroMatchLogo, CardHome } from './Components/Styled-Components';

export default function App() {
  return (
    <CardHome>
      <AstroMatchLogo src={Logo} />
      <hr />
      <Home />
    </CardHome>
  );
};

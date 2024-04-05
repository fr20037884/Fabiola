import React from 'react';
import Perfil from './ImagensPortfolio/Perfil.png';

import * as S from './Style.jsx';

function Inicio() {
  return (
    <S.ContainerInicio>
      <S.Perfil src={Perfil} alt="" />

      <div>
        <h2>Olá, me chamo Fabiola Reyes, tenho 35 anos, sou professora de educaço comercial, mas geralmente trabahlo em vendas e actualmente estou trabalhando como auxiliar de cozinha e estudando linguages de programaço</h2>
        <h2>venham navegar pelo o meu portólio.</h2>
      </div>
    </S.ContainerInicio>
  );
}

export default Inicio;

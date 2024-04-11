import React from 'react';
import Perfil from './ImagenPortafolio/Perfil.jpg';
import * as S from './Style.jsx';

function Inicio() {
  return (
    <S.ContainerInicio>
      <S.Perfil src={Perfil} alt="" />

      <div>
        <S.H2>Olá, me chamo Fabiola Reyes, tenho 35 anos, sou professora de educaço comercial, mas geralmente trabahlo em vendas e actualmente estou trabalhando como auxiliar de cozinha e estudando linguages de programaço</S.H2>
        <S.H2>venham navegar pelo o meu portólio.</S.H2>
</div>
    </S.ContainerInicio>
  );
}

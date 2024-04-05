import React from 'react';
import Inicio from './Inicio.jsx';
import Sobre from './Sobre.jsx';
import Projetos from './Projetos.jsx';
import Galeria from './Galeria.jsx';
import * as S from './Style.jsx';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navegacao() {
  return (
    <S.Header>
      <BrowserRouter>
        <S.Nav>
          <S.Lista>
            <li>
              {' '}
              <Link to="/"> Início </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/Sobre"> Sobre </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/Projetos"> Projetos </Link>
            </li>
            <li>
              {' '}
              <Link to="/Galeria"> Galeria </Link>
            </li>
          </S.Lista>
        </S.Nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="Projetos" element={<Projetos />} />
          <Route path="Galeria" element={<Galeria />} />
        </Routes>
      </BrowserRouter>
    </S.Header>
  );
}

export default Navegacao;

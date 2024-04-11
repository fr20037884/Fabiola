import React from 'react';
import * as S from './Style';
import Vnw from './ImagenPortafolio/vnw.png';
import Css from './ImagenPortafolio/css.png';
import Js from './ImagenPortafolio/js.png';
import Html from './ImagenPortafolio/html.png';

function Sobre() {
  return (
    <S.MainSobre>
      <S.SectionDoSobre>
        <h2>ESTUDOS</h2>
        <S.Card>
          <S.DivCard>
            <h2>Desenvolvimento front-end</h2>
            <h3>Mar/2021 - Dex/2021</h3>
            <img src={Vnw} alt="Logo de VNW"/>
          </S.DivCard>
        </S.Card>
      </S.SectionDoSobre>

      <S.SectionDoSobre>
        <h2>HABILIDADES</h2>
        <S.Card>
          <S.DivCard2>
            <div>
              <h3>CSS</h3>
              <img src={Css} alt="logo css" />
            </div>

            <div>
              <h3>Js</h3>
              <img src={Js} alt="logo javascript" />
            </div>

            <div>
              <h3>HTML</h3>
              <img src={Html} alt="logo html5" />
            </div>
          </S.DivCard2>
        </S.Card>
      </S.SectionDoSobre>

      <S.SectionDoSobre>
        <h2>PROFISSIONAL</h2>
        <S.Card>
          <S.DivCard>
            <h2> Estudante, auxiliar de cozinha </h2>
          </S.DivCard>
        </S.Card>
      </S.SectionDoSobre>
    </S.MainSobre>
  );
}

export default Sobre;
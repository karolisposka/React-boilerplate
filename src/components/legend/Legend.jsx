import React from "react";
import * as S from "./Legend.styles";
const Legend = () => {
  return (
    <S.LegendContainer>
      <S.Title>Legend</S.Title>
      <S.LegendSymbolContainer>
        <S.SymbolFrame>
          <S.LegendSymbolFishing />
        </S.SymbolFrame>
        <S.SymbolTitle>Fishing Sites</S.SymbolTitle>
      </S.LegendSymbolContainer>
      <S.LegendSymbolContainer>
        <S.SymbolFrame>
          <S.LegendSymbolCampsite />
        </S.SymbolFrame>
        <S.SymbolTitle>Public Campsites</S.SymbolTitle>
      </S.LegendSymbolContainer>
      <S.LegendSymbolContainer>
        <S.SymbolFrame>
          <S.LegendSymbolPrivateCampsite />
        </S.SymbolFrame>
        <S.SymbolTitle>Private Campsites</S.SymbolTitle>
      </S.LegendSymbolContainer>
      <S.LegendSymbolContainer>
        <S.SymbolFrame>
          <S.LegendSymbolActivities />
        </S.SymbolFrame>
        <S.SymbolTitle>Activities</S.SymbolTitle>
      </S.LegendSymbolContainer>
    </S.LegendContainer>
  );
};

export default Legend;

import React from "react";
import * as S from "./LocationMarker.styles";

const LocationMarker = ({ lat, lng, handleClick, type }) => {
  return (
    <>
      <S.IconContainer onClick={handleClick}>
        {type === "campSite" && <S.Campsite />}
        {type === "publicCampSite" && <S.PublicSite />}
        {type === "fishingSite" && <S.FishingSite />}
      </S.IconContainer>
    </>
  );
};

export default LocationMarker;

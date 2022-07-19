import React from "react";
import PropTypes from "prop-types";
import * as S from "./LocationCard.styles";

const LocationCard = ({ title, text, nearBy }) => {
  return (
    <S.Box>
      <S.BoxContainer>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.SmallText>{nearBy}</S.SmallText>
      </S.BoxContainer>
    </S.Box>
  );
};

LocationCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  nearBy: PropTypes.string,
};

export default LocationCard;

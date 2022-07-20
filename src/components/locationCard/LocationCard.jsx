import React from "react";
import PropTypes from "prop-types";
import * as S from "./LocationCard.styles";

const LocationCard = ({ title, text, nearBy, handleClick }) => {
  return (
    <S.Box>
      <S.BoxContainer>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.ExitButton onClick={handleClick} />
        </S.TitleWrapper>
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

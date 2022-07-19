import React from "react";
import * as S from "./Hero.styles";
import { FaSearch } from "react-icons/fa";

const Hero = ({ handleChange }) => {
  return (
    <S.Container>
      <S.Section>
        <S.SearchBox>
          <S.Icon>
            <FaSearch />
          </S.Icon>
          <S.StyledInput onChange={handleChange} placeholder="Search" />
        </S.SearchBox>
      </S.Section>
    </S.Container>
  );
};

export default Hero;

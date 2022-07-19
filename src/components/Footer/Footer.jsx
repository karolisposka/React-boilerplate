import React from "react";
import * as S from "./Footer.styles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.ContactsContainer>
        <S.Title>Campsite</S.Title>
        <S.Text>+37067462267</S.Text>
        <S.Text>Campsite@info.com</S.Text>
      </S.ContactsContainer>
      <S.IconsContainer>
        <S.Link href="facebook.com">
          <FaFacebook />
        </S.Link>
        <S.Link href="facebook.com">
          <FaInstagram />
        </S.Link>
        <S.Link href="facebook.com">
          <FaTwitter />
        </S.Link>
      </S.IconsContainer>
    </S.FooterContainer>
  );
};

export default Footer;

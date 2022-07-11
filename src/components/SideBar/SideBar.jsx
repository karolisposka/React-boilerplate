import React from "react";
import * as S from "../SideBar/SideBar.styles";
import PropTypes from "prop-types";
import { FaRegWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SideBar = ({ handleClick, links }) => {
  const navigate = useNavigate();
  return (
    <S.SideBarContainer>
      <S.ButtonWrapper>
        <S.CloseButton onClick={handleClick}>
          <FaRegWindowClose />
        </S.CloseButton>
      </S.ButtonWrapper>
      <S.LoginButton
        onClick={() => {
          navigate("/login");
        }}
      >
        Signup
      </S.LoginButton>
      <S.NavList>
        {links &&
          links.map((link, index) => <S.Link key={index}>{link}</S.Link>)}
      </S.NavList>
    </S.SideBarContainer>
  );
};

SideBar.propTypes = {
  handleClick: PropTypes.func,
  links: PropTypes.arrayOf(PropTypes.string),
};

export default SideBar;

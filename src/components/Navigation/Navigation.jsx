import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "../Navigation/Navigation.styles";
import Logo from "../../assets/campsite.svg";
import SideBar from "../SideBar/SideBar";
import { CSSTransition } from "react-transition-group";
import { FaBars, FaSearch } from "react-icons/fa";

const links = [
  "Private Campsites",
  "Public Campsites",
  "Fishing spots",
  "Outdoor Activities",
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleBurgerMenu = () => {
    return setOpen(!open);
  };
  return (
    <S.Container>
      <S.Section>
        <S.NavigationContainer>
          <S.Search
            onClick={() => {
              setOpen(false);
            }}
          >
            <FaSearch />
          </S.Search>
          <S.LogoWrapper>
            <S.Logo src={Logo} alt="Campsite" />
          </S.LogoWrapper>
          <S.Burger
            onClick={() => {
              toggleBurgerMenu();
            }}
          >
            <FaBars />
          </S.Burger>
        </S.NavigationContainer>
        <CSSTransition
          in={open}
          timeout={500}
          classNames="sideBar"
          unmountOnExit
        >
          <SideBar
            links={links}
            classNames="sideBar"
            handleClick={() => {
              toggleBurgerMenu();
            }}
          />
        </CSSTransition>
      </S.Section>
    </S.Container>
  );
};

export default Navigation;

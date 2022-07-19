import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "../Navigation/Navigation.styles";
import Logo from "../../assets/campsite.svg";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const links = [
  "Private Campsites",
  "Public Campsites",
  "Fishing spots",
  "Outdoor Activities",
];

const Navigation = ({ items }) => {
  const navigate = useNavigate();
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
            <Link to="/">
              <S.Logo src={Logo} alt="Campsite" />
            </Link>
          </S.LogoWrapper>
          <S.NavBar>
            {items &&
              items.map((item) => (
                <S.StyledLink to={item.location}>{item.name}</S.StyledLink>
              ))}
            <S.SignupBtn
              onClick={() => {
                navigate("/login");
              }}
            >
              Signup
            </S.SignupBtn>
          </S.NavBar>
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
          timeout={250}
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

Navigation.propTypes = {
  items: PropTypes.arrayOf({
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Navigation;

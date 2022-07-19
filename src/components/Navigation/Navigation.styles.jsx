import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = Styled.div`
    width:100%;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    font-family: 'Roboto', sans-serif;

`;

export const Section = Styled.section`
    max-width:1200px;
    margin:0 auto;
`;

export const NavigationContainer = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media(max-width:768px){
        flex-direction:row-reverse;
    }
`;

export const LogoWrapper = Styled.div`


`;

export const Logo = Styled.img`
    object-fit: contain;
    width:5rem;
    @media(min-width:768px){
        width:7rem;
    }
`;

export const Burger = Styled.button`
    margin:1rem;
    border-radius:0.25rem;
    padding:0.5rem;
    border:none;
    background:transparent;
    @media(min-width:768px){
        display:none;
    }
`;

export const NavBar = Styled.nav`
    display:none;
    @media(min-width:768px){
        display:block;
    }

`;

export const StyledLink = Styled(Link)`
    margin-left:0.5rem;
    text-decoration:none;
    font-size:1.25rem;
    color:black;
    font-weight:500;
    transition: 0.3s ease-in;
    &:hover{
        font-weight:700;
    }

`;

export const SignupBtn = Styled.button`
    background:black;
    border-radius:0.75rem;
    padding:0.75rem 1.5rem;
    margin-left:3rem;
    color:White;
    text-transform:capitalize;
    cursor:pointer;
    font-weight:700;
`;

export const Search = Styled.button`
    display:none;
    margin:1rem;
    border:none;
    padding:0.5rem;
    background:transparent;
    @media(max-width:768px){
        display:block;
    }
`;

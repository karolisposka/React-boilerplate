import Styled, { keyframes } from "styled-components";

export const SideBarContainer = Styled.div`
    background:white;
    box-shadow: 8px 1px 11px 1px rgba(0,0,0,0.3);
    display:none;
    height:100%;
    width:80%;
    left:0;
    position:absolute;
    top:0;
    overflow:hidden;
    z-index:3;
    &.sideBar-enter {
        width: 0%;
    }
    &.sideBar-enter-active {
        width: 80%;
        transition: width 250ms ease-in;
    }
    &.sideBar-exit {
        width: 80%;
    }
    &.sideBar-exit-active {
        width: 0%;
        transition: width 250ms ease-in;
    }

    @media(max-width:768px){
        display:block;
    }
`;

export const ButtonWrapper = Styled.div`
    align-items:center;
    display:flex;
    justify-content:flex-end;
    margin:1rem;   
`;

export const LoginButton = Styled.button`
    background:black;
    border-radius:0.5rem;
    border:none;
    color:white;
    cursor:pointer;
    display:block;
    margin: 0 auto;
    padding:0.25rem 0rem;
    text-transform:uppercase;
    width:80%;
`;

export const CloseButton = Styled.button`
    background:transparent;
    border:none;
    color:Red;
    padding:1rem;
`;

export const NavList = Styled.ul`
    margin:1rem; 
    border-bottom: 0.1rem solid black;
    
`;

const move = keyframes`
    0%{
        transform:translateX(0px);
    }

    50%{
        transform: translateX(10px)
    }

    100%{
        transform:translateX(0px);
    }
`;

export const Link = Styled.a`
    display:block;
    cursor:pointer;
    margin:1rem 0;
    font-size:1.2rem;
    font-weight:500;
    &&:hover{
        animation: ${move}  1s ease-in-out;
    }
`;

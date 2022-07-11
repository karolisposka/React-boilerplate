import Styled, { keyframes } from "styled-components";

export const SideBarContainer = Styled.div`
    background:white;
    box-shadow: 8px 1px 11px 1px rgba(214,205,205,0.75);
    display:none;
    height:100%;
    left:0;
    position:absolute;
    top:0;
    overflow:hidden;
    width:80%;
        .sideBar-enter {
        width: 0%;
    }
    .sideBar-enter-active {
        width: 80%;
        transition: width 500ms ease-in;
    }
    .sideBar-exit {
        width: 80%;
    }
    .sideBar-exit-active {
        width: 0%;
    transition: width 500ms ease-in;
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
    padding:0.75rem 6rem;
    display:block;
    border:none;
    background:black;
    color:white;
    border-radius:0.5rem;
    text-transform:uppercase;
    margin: 0 auto;

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
    100%{
        transform:translateX(10px);
    }



`;

export const Link = Styled.a`
    display:block;
    cursor:pointer;
    margin:1rem 0;
    font-size:1.2rem;
    font-weight:500;
    &&:hover{
        animation: ${move}  1s ease;
    }
  
`;

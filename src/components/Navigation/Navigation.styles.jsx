import Styled from "styled-components";

export const Container = Styled.div`
    width:100%;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    .sideBar-enter {
        width: 0%;
    }
    .sideBar-enter-active {
        width: 70%;
        transition: width 500ms ease-in;
    }
    .sideBar-exit {
        width: 80%;
    }
    .sideBar-exit-active {
        width: 0%;
    transition: width 500ms ease-in;
    }
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
`;

export const Burger = Styled.button`
    display:none;
    margin:1rem;
    border-radius:0.25rem;
    padding:0.5rem;
    border:none;
    background:transparent;
    @media(max-width:768px){
        display:block;
    }
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

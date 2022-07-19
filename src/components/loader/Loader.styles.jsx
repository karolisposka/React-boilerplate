import Styled, { keyframes } from "styled-components";

export const Container = Styled.div`
    padding-top:20rem;
    

`;
export const Section = Styled.section`
    max-width:1200px;
    margin:0 auto;
    display:flex;
    justify-content:Center;
    align-items:center;
`;

const spin = keyframes`
    0%{
         transform: rotate()
    }
    100%{
        transform: rotate(360deg);
    }
      
    
`;

export const Loader = Styled.div`
    width:5rem;
    height:5rem;
    border-radius:50%;
    border:2rem solid black;
    border-top:2rem solid white;
    animation:2s infinite ${spin};
`;

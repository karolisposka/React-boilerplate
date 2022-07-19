import Styled from "styled-components";

export const Container = Styled.div`


`;

export const Section = Styled.section`
    max-width:1200px;
    margin: 0 auto;
    padding:1rem;

`;

export const Tag = Styled.div` 
    padding:0.25rem 1rem;
    border:1px solid black;
    font-weight:500;
    border-radius:1.25rem;
    display:Flex;
    align-items:center;
    justify-content:center;
    background:black;
    min-height:3rem;
    font-size:0.8rem;
    box-shadow: 2px 5px 5px 1px rgba(0,0,0,0.1);
    @media(min-width:768px){
        min-height:5rem;
    }
`;

export const H1 = Styled.p`
    display:block;
    text-align: center;
    font-weight:500;
    font-family: 'Roboto', sans-serif;
    font-size:0.8rem;
    margin-right:0.25rem;
    color:white;
    @media(min-width:768px){
        font-size:1.2rem;
    }
`;

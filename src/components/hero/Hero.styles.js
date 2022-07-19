import Styled from "styled-components";

export const Container = Styled.div`

`;

export const Section = Styled.section`
    margin: 0 auto;
    max-width:1200px;
    padding:1rem;
    background-size: cover;
    height:300px;
    background-position:bottom;
    background-image: url('https://images.unsplash.com/photo-1601134917279-ef70a0a90f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    @media(min-width:768px){
        height:70vh;
    }
`;

export const SearchBox = Styled.div`
    background:white;
    padding:0.5rem;
    width:100%;
    border-radius:0.25rem;
    margin:5rem auto;
    box-sizing:border-box;
    @media(min-width:768px){
        width:70%;
        margin:10rem auto;
    }
`;

export const StyledInput = Styled.input`
    border:none;
    background:transparent;
    outline:none;
`;

export const Icon = Styled.span`
    margin-right:0.5rem;
    
`;

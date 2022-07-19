import Styled from "styled-components";

export const FormContainer = Styled.div`
    width:100%;
    height:100%;
    margin: 0 auto;
    display:flex;
    justify-content:Center;
    flex-direction:column;
    align-items:center;
    box-sizing:border-box;
`;

export const RegisterForm = Styled.form`
    width:100%;
    width:80%;
    @media(min-width:768px){
        width:60%;
    }
  
`;

export const FormInput = Styled.input`
    width: 100%;
    margin:0.5rem 0;
    box-sizing:border-box;
    border:0.5px solid rgba(0,0,0,0.3);
    padding:0.25rem;
`;

export const TextContainer = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

`;

export const Text = Styled.h5`
    display:inline;
    color: rgba(0,0,0,0.3);
`;

export const Link = Styled.a`
    display:inline;
    font-weight:700;
    cursor:pointer;
    color: black;
    margin-left:0.25rem;
`;

export const SubmitButton = Styled.button`
    display:block;
    margin:0.5rem auto;
    width:50%;
    background:black;
    color:white;
    border:none;
    padding:0.25rem 0.5rem;
    border-radius:0.25rem;
`;

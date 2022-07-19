import Styled from "styled-components";

export const Container = Styled.div`
    font-family: 'Roboto', sans-serif;
    

`;

export const Section = Styled.section`
    max-width:1200px;
    margin:0 auto;
    padding:1rem;
    @media(min-width:768px){
        display:flex;
        justify-content:Center;
        align-items:center;
    }
`;

export const FormContainer = Styled.div`
    width:100%;
    border:1px solid rgba(0,0,0,0.3);
    height:800px;
    border-radius:2rem;
    overflow:hidden;
    position:relative;
    height:80vh;
    box-sizing:border-box;
    @media(min-width:768px){
        width:60%;
    }
`;

export const Overlay = Styled.div`
    align-items:flex-start;
    background-image: url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
    background-repeat: no-repeat;
    background-size:cover;
    clip-path: ellipse(80% 24% at 51% 0%);
    display:flex;
    flex-direction:column;
    height:120vh;
    justify-content:flex-start;
    left:0;
    padding:2rem;
    position:absolute;
    top:0;
    width:100%;
    transition:1s ease-in-out;
    &.overlay-enter {
        width:100%;
        height: 120vh;  
    }
    &.overlay-enter-active {
        width:100%;
        height:500vh;
    }
    &.overlay-exit {
        width:100%;
        height:500vh;
        
    }
    &.overlay-exit-active {
        width:100%;
        height:120vh;
    }
`;

export const TextWrapper = Styled.div`
    display:Flex;
    flex-direction:column;
    @media(min-width:768px){
        margin-left:3rem;
    }


`;

export const Text = Styled.p`
    margin:0;
    margin-top:0.25rem;
    font-size:1.8rem;
    font-weight:500;
    color:#fff;
    @media(min-width:768px){
        font-size:2.8rem;
    }

`;
export const SmallText = Styled.p`
    font-size:0.8rem;
    margin-top:2rem;
    margin-top:0.8rem;
    color:#fff;
    @media(min-width:768px){
        font-size:1.2rem;
    }

`;

export const FormsContainer = Styled.div`
    padding-top:20rem;
    @media(min-width:768px){
        padding-top:22rem;
    }
`;

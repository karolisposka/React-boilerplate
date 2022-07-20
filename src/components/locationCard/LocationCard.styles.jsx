import Styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

export const Box = Styled.div`
    position: absolute;
    top:1rem;
    left:1rem;
    background:white;
    width:20rem;
    max-height:30rem;
    border-radius:1rem;
    @media(max-width:768px){
        top:1rem;
    }
`;

export const BoxContainer = Styled.div`
    margin:1rem;
`;

export const TitleWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom: 1px solid rgba(0,0,0,0.3);
`;

export const ExitButton = Styled(FaRegWindowClose)`
    border:1px solid rgba(0,0,0,0.3)
    border-radius:50%;;
    padding:0.25rem;
`;

export const Title = Styled.h3`
    
`;

export const Text = Styled.p`
    

`;

export const SmallText = Styled.p`
    

`;

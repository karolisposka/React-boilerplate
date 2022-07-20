import Styled from "styled-components";
import { FaFish, FaCampground, FaFire, FaRunning } from "react-icons/fa";

export const LegendContainer = Styled.div`
    position: absolute;
    top:1rem;
    left:1rem;
    background:white;
    font-family: 'Roboto', sans-serif;
    width:20rem;
    max-height:30rem;
    border-radius:1rem;
    @media(max-width:768px){
        top:1rem;
    }
`;

export const LegendSymbolContainer = Styled.div`
    display:flex;
    align-items:center;
    margin:0.1rem 1rem;
`;

export const Title = Styled.h3`
    border-bottom: 1px solid rgba(0,0,0,0.3);
    padding:0.75rem 1rem;    
`;

export const SymbolFrame = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:2rem;
    height:2rem;
    border-radius:50%;
    border:1px solid rgba(0,0,0,0.6);
`;

export const LegendSymbolFishing = Styled(FaFish)`
    font-size:1rem;
    color: blue;
`;
export const LegendSymbolCampsite = Styled(FaCampground)`
    font-size:1rem;
    color: green;
`;

export const LegendSymbolPrivateCampsite = Styled(FaFire)`
    font-size:1rem;
    color:red;
`;
export const LegendSymbolActivities = Styled(FaRunning)`
    font-size:1rem;
    color:yellow;
`;

export const SymbolTitle = Styled.p`
    font-size:1rem;
    margin-left:0.5rem;
    font-weight:500;
`;

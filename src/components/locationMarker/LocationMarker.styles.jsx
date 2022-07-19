import Styled from "styled-components";
import { FaFish, FaCampground, FaFire } from "react-icons/fa";

export const IconContainer = Styled.div`
    border:5px solid rgba(0,0,0,0.3);
    width:3rem;
    height:3rem;
    border-radius:2rem;
    display:flex;
    justify-content:Center;
    align-items:center;


`;
export const PublicSite = Styled(FaFire)`
    font-size:2.1rem;
    color:red;
`;

export const FishingSite = Styled(FaFish)`
    font-size:2.1rem;
    color:blue;
`;
export const Campsite = Styled(FaCampground)`
    font-size:2.1rem;
    color:green;
`;

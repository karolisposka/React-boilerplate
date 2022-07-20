import Styled from "styled-components";
import { FaFish, FaCampground, FaFire, FaRunning } from "react-icons/fa";

export const IconContainer = Styled.div`
    border:1px solid rgba(0,0,0,0.3);
    width:2rem;
    position:relative;
    height:2rem;
    border-radius:2rem;
    display:flex;
    justify-content:Center;
    align-items:center;
`;
export const PublicSite = Styled(FaFire)`
    font-size:1.2rem;
    color:red;
`;

export const FishingSite = Styled(FaFish)`
    font-size:1.2rem;
    color:blue;
`;
export const Campsite = Styled(FaCampground)`
    font-size:1.2rem;
    color:green;
`;
export const Activities = Styled(FaRunning)`
    font-size:1.2rem;
    color:yellow;
`;

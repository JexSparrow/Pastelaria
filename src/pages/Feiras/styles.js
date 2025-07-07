import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
height: 100%;
padding: 1%;
background-color: ${({ theme }) => theme.colors.red};
border-top: 6px solid ${({ theme }) => theme.colors.amarelo};
border-bottom: 6px solid ${({ theme }) => theme.colors.amarelo};
`;

export const Title = styled(motion.h1)`
text-align: center;
font-size: 7.5em;
font-family: Cookie;
color: ${({ theme }) => theme.colors.amarelo};
text-shadow: 1px 1px 4px black;


@media (max-width: 900px){
    font-size: 6em;

  }

  @media (max-width: 680px){
    font-size: 4.8em;
    padding: 5% 0;

  }

  @media (max-width: 550px){
    font-size: 3em;
    

  }

  @media (max-width: 400px){
    font-size: 2.75em;
    

  }

  
`;
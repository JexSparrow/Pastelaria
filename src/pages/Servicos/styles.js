import styled from "styled-components";
import { motion } from "framer-motion";

export const Conteiner = styled.div`
    background-color: #121212;
    padding: 3% 0;
    
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
    border-top: 6px solid ${({ theme }) => theme.colors.amarelo};
    border-bottom: 6px solid ${({ theme }) => theme.colors.amarelo};
`;

export const Title = styled(motion.h2)`
    font-size: 7em;
    font-family: Cookie;
    color: ${({ theme }) => theme.colors.amarelo};
    text-shadow: 1px 1px 4px black;

      @media (max-width: 1250px){
    font-size: 6em;

  }

  @media (max-width: 700px){
    font-size: 5em;

  }

  @media (max-width: 550px){
    font-size: 4.5em;

  }

  @media (max-width: 400px){
    font-size: 3.8em;
    

  }

`;

export const Paragrafo = styled(motion.p)`
    font-size: 2em; /* Considere usar rem/em para responsividade */
    font-family: Lobster;
    letter-spacing: 1px;
    padding-bottom: 1%;
    color: aliceblue;

      @media (max-width: 1250px){
    font-size: 1.5em;

  }

  @media (max-width: 700px){
    font-size: 1.25em;
    text-align: center;

  }

  @media (max-width: 550px){
    font-size: 1em;
    line-height: 150%;

  }
`;

export const SubTitle = styled.h3`
    font-size: 4em;
    letter-spacing: 1px;
    text-shadow: 1px 3px 4px rgba(255,0,0,1);
    font-style: italic;
    font-family: Style Script;
    color: ${({ theme }) => theme.colors.amarelo};
    padding: 5% 0;
    
    @media (max-width: 1250px){
    font-size: 3.5em;

  }

  @media (max-width: 700px){
    font-size: 5em;

  }

    @media (max-width: 550px){
    font-size: 4.5em;

  }
`;



export const Conteiner2 = styled.div`
    background-color: #121212; /* Cor de debug, considere mudar */
    display: grid;

    grid-template-columns: repeat(3, 1fr);
   
    padding: 1%; /* Certifique-se de que box-sizing: border-box; esteja ativado globalmente */

    align-items: start; /* Alinha os itens ao topo das células do grid */
    justify-content: center; /* Centraliza os itens horizontalmente se houver espaço */


  @media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  .bebidas {
    justify-self: center;
    grid-column: span 2;
  }
}

@media (max-width: 850px){
  .lanches { font-size: 2.75em; }
}

@media (max-width: 720px) {
  grid-template-columns: 1fr;

  .bebidas {
    grid-column: auto;
    justify-self: center;
  }

  @media (max-width: 550px){
  .lanches {
     font-size: 4em;
     line-height: 100%;
         }
}
}`


export const Wrapper2 = styled.div`
    background-color: #121212; /* Cor de debug, considere mudar */
    padding: 16px; /* Padding interno para o conteúdo de cada item */
   
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o título e o carrossel */
    justify-content: flex-start; /* Alinha o conteúdo ao topo */
    text-align: center;

    
`;

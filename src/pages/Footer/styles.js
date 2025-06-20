import styled from "styled-components";
import { motion } from "framer-motion";


export const Conteiner = styled.div`
height: 100%;
display: flex;
position: relative;

justify-content: center;
border-top: 5px solid ${({ theme }) => theme.colors.amarelo};

padding: 2% 30%;
background-color: ${({ theme }) => theme.colors.red};

 @media  (max-width:550px) {
    padding: 5% 0;
    
  }


`;

export const Wrapper1 = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  /* Removi padding-right aqui para evitar deslocamento visual */
  padding: 20px 0; /* Adicione um padding vertical se precisar */
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center; /* Centraliza a motion.div horizontalmente */
  border-right: 3px solid ${({ theme }) => theme.colors.amarelo};

  /* Estilo para a motion.div que é filha direta de Wrapper1 */
  > div {
    display: flex; /* Transforma a motion.div em um container flex */
    flex-direction: column; /* Organiza logo e parágrafo em coluna */
    align-items: center; /* Centraliza a Logo e o Paragrafo horizontalmente dentro desta motion.div */
    justify-content: center; /* Centraliza verticalmente (se houver espaço) */
    text-align: center; /* Garante que o texto seja centralizado */
    width: 100%; /* Faz a motion.div ocupar toda a largura disponível do Wrapper1 */
    max-width: 300px; /* Limite a largura para melhor legibilidade/design, se necessário */
    padding-right: 5%; /* Se este padding era para o conteúdo interno, mova-o para cá */
    padding-left: 5%; /* Adicione padding-left para centralizar o conteúdo dentro dos 300px*/
    box-sizing: border-box; /* Garante que o padding não adicione largura extra */
  }
`;

export const Logo = styled.img`
  width: 220px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 1.6em;
  color: aliceblue; 
  font-family: Lobster;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Wrapper2 = styled.div`
background-color: ${({ theme }) => theme.colors.red};
width: 100%;
display: flex;
padding-left: 5%;
flex-direction: column;
justify-content: space-evenly;
border-left: 3px solid ${({ theme }) => theme.colors.amarelo};

`;

export const Img = styled.img`

        
  width: 50px;
  cursor: pointer;
  transition: 300ms all ease;

&:hover {
  scale: 1.1;
}

&:active {
    scale: 0.9;

}

@media  (max-width:800px) {
    width: 40px;
    
  }

  @media  (max-width:550px) {
    width: 30px;
    
    
  }
    
`;





export const Arrow = styled.a`
position: absolute;
width: 50px;
left: 1%;
top: -12%;

transition: 300ms all ease-in-out;

&:hover {
  scale: 1.1;
 
}

@media  (max-width:800px) {
    width: 40px;
    
  }

   @media  (max-width:550px) {
    top: -18%;
    z-index: 999;
    
  }
`;

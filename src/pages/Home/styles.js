import styled from "styled-components";
import { motion } from "framer-motion";
import background from "../../assets/others/background.png";
import background2 from "../../assets/others/background2.jpg";

// #95261B;
// #F3A20A;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; // Garante que as imagens não vazem se forem maiores

  // Camada da primeira imagem
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.3); // filtro de brilho na imagem base
    transition: opacity 1s ease-in-out;
    opacity: ${({ $showFirstImage }) => ($showFirstImage ? 1 : 0)};
  }

  // Camada da segunda imagem
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background2});
    background-size: cover;
    background-position: center;
    
    
    background-repeat: no-repeat;
    filter: brightness(0.4); // filtro de brilho na segunda imagem
    transition: opacity 1s ease-in-out; 
    opacity: ${({ $showFirstImage }) => ($showFirstImage ? 0 : 1)};
  }

  z-index: -1;
`;

export const Conteiner = styled.div`
  position: relative; 
  width: 100%;
  height: 85vh;
  
 
  background-color: transparent;
  box-shadow: 1px -10px 10px 5px rgba(18, 18, 18, 0.99) inset;


 @media (max-width: 900px){
    height: 65vh;

  }

  @media (max-width: 850px){
    height: 45vh;

  }

  @media (max-width: 550px){
    height: 40vh;

  }

`;

export const Logo = styled(motion.img)`
  position: absolute;
  top: -60px;
  height: 220px;
  z-index: 1; 

   @media  (max-width:1050px) {
    height: 150px;
    top: -35px;
    
  }

  @media  (max-width:750px) {
    display: none;
    
  }
`;

export const Header = styled(motion.div)`
  position: absolute;
  top: 0px;
  height: auto;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center; 
  z-index: 1; 

  @media (max-width: 550px) {
    display: none !important;
  }

  div { 
    background: rgba(210, 22, 22, 0.25);
    box-shadow: 0 8px 32px 0 rgba(255, 176, 4, 0.45);
    backdrop-filter: blur( 3px );
    border-radius: 25px;
    display: flex;
    gap: 35px;
    height: auto;
    padding: 15px 30px ;
    transition: 300ms all ease-in-out;

    &:hover {
      box-shadow: 2px 2px 20px 0 rgba(255, 255, 255, 0.45);
    }
  }
`;


export const Link = styled.a`
  /* Mantenha seus estilos do Link */
  color: ${({ theme }) => theme.colors.amarelo};
  font-family: 'Lobster';
  font-weight: 500;
  text-decoration: none;
  font-size: 2em;
  transition: 300ms all ease-in-out;
  

  &:hover {
    scale: 1.1;
    color: aliceblue;
  }
  z-index: 1; 

   @media  (max-width:1035px) {
    font-size: 1.5em;
    
  }

   @media  (max-width:550px) {
    font-size: 1em;
    
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1; 

   @media  (max-width:550px) {
    
    height: 90%;
    justify-content: space-between;
    
    
  }
`;

export const Title = styled(motion.h1)`
  font-family: Norican;
 
  color: ${({ theme }) => theme.colors.amarelo};
  font-size: 10em;
  line-height: 90%;
  text-shadow: 2px 2px 8px rgba(255, 0, 0, 0.7); 
  z-index: 1;

  @media  (max-width:1050px) {
    font-size: 8em;
    
  }

   @media  (max-width:900px) {
    font-size: 6.5em;
    
  }

  @media  (max-width:700px) {
    font-size: 5em;
    
  }

  @media  (max-width:550px) {
    font-size: 3em;
    width: 65%;
    margin: 0 auto;
    
  }
`;

export const Paragrafo = styled(motion.p)`
  
  font-family: Cookie;  
  
  color: #fff;
  font-size: 4em;
  text-shadow: 1px 1px 2px rgba(255, 0, 0, 0.7);
  z-index: 1;

   @media  (max-width:1035px) {
    font-size: 3em;
    
  }

     @media  (max-width:1035px) {
    font-size: 2em;
    
  }
`;

export const HamburgerWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
  display: none;

  @media (max-width: 550px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  background: rgba(143, 14, 14, 0.6);
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  
  z-index: 11;
  transition: 300ms all ease-in-out;

  &:hover {
    scale: 0.9;
  }

  &:active {
    scale: 1.1;
  }

  span {
    display: block;
    width: 25px;
    height: 4px;
    background: ${({ theme }) => theme.colors.amarelo};
    margin: 4px 0;
    transition: 0.4s all ease-in-out;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: rgba(143, 14, 14, 0.95);
  box-shadow: 0 8px 32px 0 rgba(255, 176, 4, 0.45);
  border-radius: 12px;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  z-index: 10000;

  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.95)')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out; 
  display: flex; //display flex para funcionar
  

  a {
    color: ${({ theme }) => theme.colors.amarelo};
    font-family: 'Lobster';
    font-size: 1.5em;
    text-decoration: none;
    text-align: center;
    transition: 0.3s ease-in-out;

    &:hover {
      color: white;
      scale: 1.05;
    }
  }
`;

import styled from "styled-components";
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
  overflow: hidden; /* Garante que as imagens não "vazem" se forem maiores */

  /* Camada da primeira imagem */
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
    filter: brightness(0.3); /* Mantenha o filtro de brilho na imagem base */
    transition: opacity 1s ease-in-out; /* Transição suave para a opacidade */
    opacity: ${({ $showFirstImage }) => ($showFirstImage ? 1 : 0)}; /* Opacidade controlada por prop */
  }

  /* Camada da segunda imagem */
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
    filter: brightness(0.4); /* Mantenha o filtro de brilho na segunda imagem também */
    transition: opacity 1s ease-in-out; /* Transição suave para a opacidade */
    opacity: ${({ $showFirstImage }) => ($showFirstImage ? 0 : 1)}; /* Opacidade inversa da primeira */
  }

  z-index: -1;
`;

export const Conteiner = styled.div`
  position: relative; 
  width: 100%;
  height: 75vh;
  
 
  background-color: transparent;
 box-shadow: 1px -10px 10px 5px rgb(0, 0, 0) inset;

`;

export const Logo = styled.img`
  position: absolute;
  top: -60px;
  height: 220px;
  z-index: 1; 
`;

export const Header = styled.header`
 position: absolute;


  top: 0px;
 height: auto;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center; 
  z-index: 1; 

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
`;

export const Title = styled.h1`
  font-family: Cookie;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.amarelo};
  font-size: 11em;
  line-height: 70%;
  text-shadow: 2px 2px 8px rgba(255, 0, 0, 0.7); 
  z-index: 1;
`;

export const Paragrafo = styled.p`
  
  font-family: Cookie;  
  
  color: #fff; /* Certifique-se de que a cor do texto seja visível */
  font-size: 4em;
  text-shadow: 1px 1px 2px rgba(255, 0, 0, 0.7); /* Adiciona sombra para melhor legibilidade */
  z-index: 1; /* Garante que o parágrafo fique acima do overlay */
`;
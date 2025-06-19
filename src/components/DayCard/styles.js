import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: black;
  padding: 1% 0 2%;
`;

export const Dias = styled.div`
  background-color: black;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 0 5%;
  background-color: black;
  height: 100%;
  gap: 10px;

  ${({ layoutDirection }) =>
    layoutDirection === "reverse" &&
    `
        flex-direction: row-reverse; 
    `}
  ${({ layoutDirection }) =>
    layoutDirection === "column" &&
    `
        flex-direction: column;
        align-items: center;
    `}

      @media (max-width: 1250px){
   padding: 0 2%;

    @media (max-width: 900px){
    gap: 2%;
    

  }

   @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }

  }
`;

export const Title = styled.h2`
  font-size: 5em;
  font-family: Lobster;
  letter-spacing: 1px;
  text-align: center;
  padding: 1% 0 2%;
  color: ${({ theme }) => theme.colors.amarelo};
  text-shadow: 2px 2px 2px red;

  ${({ layoutDirection }) =>
    layoutDirection === "left" &&
    `
        text-align: left;
        padding-left: 2%;
    `}
  ${({ layoutDirection }) =>
    layoutDirection === "right" &&
    `
        text-align: right;
        padding-right: 2%;
    `}

      @media (max-width: 1250px){
    font-size: 4.5em;

  }

  @media (max-width: 900px){
    font-size: 4em;

  }

   @media (max-width: 550px){
    font-size: 3em;
    padding: 5% 0;

  }
`;

export const BoxTexto = styled.div`
  background-color: black;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  

    @media (max-width: 1250px){
    width: 57%;
  }

  @media (max-width: 900px){
    width: 60%;
    

  }

   @media (max-width: 550px){
    width: 100%;
    padding: 5%;
    gap: 10px;

  }
`;

export const Endereco = styled.h3`
  font-size: 3em;
  font-family: Lobster;
  letter-spacing: 3px;
  color: #fff;
  text-align: center;

   @media (max-width: 1250px){
    font-size: 2.5em;

  }

  @media (max-width: 900px){
    font-size: 2em;

  }

   @media (max-width: 700px){
    font-size: 1.5em;

  }

  @media (max-width: 550px){
    font-size: 1.75em;
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.red};

  }
`;

export const Descricao = styled.p`
  font-size: 1.8em;
  font-family: Lobster;
  color: #fff;
  white-space: pre-line;
  text-align: center;
  

    @media (max-width: 1250px){
    font-size: 1.5em;
    

  }

  @media (max-width: 700px){
    font-size: 1.25em;

  }

`;

export const Horario = styled.p`
  font-size: 2.5em;
  font-family: Lobster;
  color: rgb(203, 29, 13);
  margin: 0 auto;

    @media (max-width: 1250px){
    font-size: 2em;

  }

  @media (max-width: 900px){
    font-size: 1.5em;

  }

   @media (max-width: 550px){
    font-size: 1.25em;

  }
`;

export const Link = styled.a`
  font-size: 2em;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.amarelo};
  text-decoration: none;
  transition: 300ms all ease-in-out;
  margin: 0 auto;
  text-align: left;

  &:hover {
    scale: 1.1;
   
  }

  @media (max-width: 900px){
    font-size: 1.5em;

  }

`;

export const SwiperCustomStyles = styled.div`
  .swiper-slide {
    height: 100% !important; //proporção das imagens 4:3
  }

   .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.amarelo};
    font-size: 2.8em; /* Aumenta o tamanho */
    font-weight: 900; /* Deixa a seta mais grossa */
    text-shadow: 1px 1px 2px black; /* Ajuda a destacar no fundo */
    transition: color 0.3s ease;

      &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.amarelo};
    opacity: 0.8;
    height: 15px;
    width: 15px;
    
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  }

  .swiper-pagination-bullets {
    bottom: 10px;
  }


`;

export const SwiperWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  
  
  
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: black;

  @media (max-width: 1250px){
    max-width: 450px;
    margin: auto;

  }

   @media (max-width: 900px){
    max-width: 360px;
    margin: auto;

  }

  @media (max-width: 700px){
    max-width: 280px;

  }

  @media (max-width: 550px){
    max-width: 320px;
    padding: 0 3%;


  }

`;

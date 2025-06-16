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
`;

export const Title = styled.h2`
  font-size: 82px;
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
`;

export const BoxTexto = styled.div`
  background-color: black;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2% 0;
  justify-content: space-evenly;
`;

export const Endereco = styled.h3`
  font-size: 42px;
  font-family: Lobster;
  letter-spacing: 3px;
  color: #fff;
`;

export const Descricao = styled.p`
  font-size: 32px;
  font-family: Lobster;
  color: #fff;
`;

export const Horario = styled.p`
  font-size: 36px;
  font-family: Lobster;
  color: rgb(203, 29, 13);
`;

export const Link = styled.a`
  font-size: 30px;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.amarelo};
`;

export const SwiperCustomStyles = styled.div`
  .swiper-slide {
    height: 100% !important;
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
  
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: black;

`;

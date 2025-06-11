import styled from "styled-components";

export const Conteiner = styled.div`
background-color: black;
padding: 1%;

`;

export const Dias = styled.div`
background-color: black;
`;

export const Wrapper = styled.div`
display: flex;
gap: 50px;
padding: 0 2%;
background-color: black;
height: 100%;

`;

export const Title = styled.h2`
font-size: 82px;
font-family: Lobster;
letter-spacing: 1px ;
text-align: center;
color: ${({ theme }) => theme.colors.amarelo};
text-shadow: 2px 2px 2px red;
`;

export const BoxTexto = styled.div`
background-color: black;
width: 50%;
display: flex;
flex-direction: column;
padding: 5% 0;
justify-content: space-between;
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
color:rgb(203, 29, 13);
`;

export const Link = styled.a`
font-size: 30px;
font-family: Lobster;
color: ${({ theme }) => theme.colors.amarelo};
`;


export const SwiperCustomStyles = styled.div`
  /* Estilos para as setas de navegação */
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.amarelo}; /* Exemplo: cor das setas */
    font-size: 2em; /* Tamanho da seta */
    transition: color 0.3s ease; /* Transição de cor no hover */

    &:hover {
      color: ${({ theme }) => theme.colors.red}; /* Exemplo: cor no hover */
    }
  }

  /* Estilos para os pontos de paginação */
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.amarelo}; /* Cor dos pontos inativos */
    opacity: 0.8;
    transition: background-color 0.3s ease;
    height: 15px;
    width: 15px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.red}; /* Cor do ponto ativo */
    opacity: 1;
  }

  /* Ajuste a posição dos pontos se necessário */
  .swiper-pagination-bullets {
    bottom: 10px; /* Alinhe os pontos mais para cima se colidirem com o conteúdo */
  }
`;
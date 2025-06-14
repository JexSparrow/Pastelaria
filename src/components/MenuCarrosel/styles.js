import styled from "styled-components";

export const CustomSwiperContainer = styled.div`
    height: 420px; /* Altura fixa para o carrossel vertical */
    width: 300px; /* Largura fixa ou ajustável, dependendo do design */
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    /* Remover borda e padding de debug ou ajustar conforme o tema */
    box-shadow: -10px 0px 20px -10px rgba(255,215,0,0.75) inset,
                    10px 0px 20px -10px rgba(255,215,0,0.75) inset;
    background-color: black;
    padding: 0 5%;
    position: relative; /* Essencial para posicionar os pseudo-elementos */

    /* Efeito de Fade na Borda Superior */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50px; /* Altura do efeito de fade */
        background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));
        /* A cor rgb(0, 0, 0) deve corresponder à cor de fundo do seu CustomSwiperContainer */
        z-index: 10; /* Garante que o gradiente fique acima dos slides */
        pointer-events: none; /* Permite interagir com o Swiper por baixo do gradiente */
    }

    /* Efeito de Fade na Borda Inferior */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px; /* Altura do efeito de fade */
        background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
        /* A cor rgb(0, 0, 0) deve corresponder à cor de fundo do seu CustomSwiperContainer */
        z-index: 10;
        pointer-events: none;
    }
  

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center; /* Centraliza o conteúdo verticalmente */
        align-items: center; /* Centraliza o conteúdo horizontalmente */
        background-color: transparent; /* Transparente para ver o fundo do container */
        color: white;
        text-align: center;
        font-size: 1.5em;
        padding: 10px 5px; /* Ajustar padding */
        box-sizing: border-box;

        /* Certifique-se de que os slides não tenham margens ou paddings internos que perturbem o fluxo */
        margin: 0;
    }

    .swiper-slide img {
        width: 120px; /* Tamanho da imagem no slide */
        height: 120px;
        object-fit: cover;
        padding: 2%;
        border-radius: 50%; /* Imagens redondas */
        margin-bottom: 8px; /* Espaço entre imagem e texto */
        border: 4px solid ${({ theme }) => theme.colors.amarelo || '#FFD700'}; /* Borda na imagem */
    }

    .swiper-slide h4 {
        margin: 0;
        font-size: 1em;
        color: ${({ theme }) => theme.colors.amarelo || '#FFD700'};
        white-space: nowrap; /* Evita quebra de linha para nomes curtos */
        overflow: hidden; /* Esconde o excesso se a linha for muito longa */
        text-overflow: ellipsis; /* Adiciona '...' se o texto for cortado */
    }

    .swiper-slide p {
        font-size: 0.8em;
        margin-top: 5px;
        color: #ccc;
        line-height: 1.2;
        max-height: 2.4em; /* Limita a descrição a 2 linhas */
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Remover estilos de paginação e navegação se não forem mais necessários */
    .swiper-pagination, .swiper-button-next, .swiper-button-prev {
        display: none; /* Esconde se não for usar */
    }
`;
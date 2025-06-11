import styled from "styled-components";


const CustomSwiperContainer = styled.div`
    height: 300px; /* Altura fixa para o carrossel vertical */
    width: 200px; /* Largura fixa ou ajustável, dependendo do design */
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #333; /* Fundo para os slides */
        color: white;
        text-align: center;
        font-size: 1.2em;
        padding: 10px;
        box-sizing: border-box; /* Garante que padding não estoure */
    }

    .swiper-slide img {
        width: 80px; /* Tamanho da imagem no slide */
        height: 80px;
        object-fit: cover;
        border-radius: 50%; /* Imagens redondas */
        margin-bottom: 10px;
    }

    .swiper-slide h4 {
        margin: 0;
        font-size: 1em;
        color: ${({ theme }) => theme.colors.amarelo || '#FFD700'};
    }

    .swiper-slide p {
        font-size: 0.8em;
        margin-top: 5px;
        color: #ccc;
    }

    /* Estilos de paginação vertical */
    .swiper-pagination-vertical.swiper-pagination-bullets {
        right: 10px; /* Posição à direita */
        left: auto;
        top: 50%;
        transform: translateY(-50%);
    }

    .swiper-pagination-bullet {
        background-color: ${({ theme }) => theme.colors.amarelo || '#FFD700'};
        opacity: 0.8;
        margin: 7px 0 !important; /* Espaçamento vertical */
    }

    .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.red || '#FF0000'};
        opacity: 1;
    }
`;
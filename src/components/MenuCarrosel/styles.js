import styled from "styled-components";

export const CustomSwiperContainer = styled.div`
    height: 420px; /* Altura fixa para o carrossel vertical */
    width: 300px;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    
    
    // NOVO BOX-SHADOW APLICADO AQUI
    box-shadow: 
        inset -10px 0px 20px -10px rgba(255, 215, 0, 0.75), /* Sombra interna esquerda (amarelo) */
        inset 10px 0px 20px -10px rgba(255, 215, 0, 0.75),  /* Sombra interna direita (amarelo) */
        0px 8px 16px rgba(18, 18, 18, 0.5);

    background-color: #121212;
    padding: 0 5%;
    position: relative; /* Essencial para posicionar os pseudo-elementos */

    @media (max-width: 550px){
        width: 260px;
        height: 400px;
    }

    // Efeito de Fade na Borda Superior
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 70px; /* Altura do efeito de fade */
        background: linear-gradient(to bottom, #121212, rgba(18, 18, 18, 0));
        z-index: 10; /* Garante que o gradiente fique acima dos slides */
        pointer-events: none; /* Permite interagir com o Swiper por baixo do gradiente */
    }

    // Efeito de Fade na Borda Inferior
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 70px; /* Altura do efeito de fade */
        background: linear-gradient(to top, #121212, rgba(18, 18, 18, 0));
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
        justify-content: center;
        align-items: center;
        background-color: transparent; // Transparente para ver o fundo do container
        color: white;
        text-align: center;
        font-size: 1.5em;
        padding: 10px 5px; 
        box-sizing: border-box;
        margin: 0;
    }

    .swiper-slide img {
        width: 140px; // tamanho da imagem no slide
        height: 140px;
        object-fit: cover;
        padding: 2%;
        border-radius: 50%; // Imagens redondas
        margin-bottom: 8px; 
        border: 4px solid ${({ theme }) => theme.colors.amarelo || '#FFD700'};

        @media (max-width: 1250px){
            width: 120px; 
            height: 120px;
        }

        @media (max-width: 700px){
            width: 160px; 
            height: 160px;
        }

        @media (max-width: 550px){
            width: 120px; 
            height: 120px;
        }
    }

    .swiper-slide h4 {
        margin: 0;
        font-size: 1.5em; /* Sabores */
        font-family: Lobster;
        color: ${({ theme }) => theme.colors.amarelo || '#FFD700'};

        @media (max-width: 1250px){
            font-size: 1.25em;
        }

        @media (max-width: 700px){
            font-size: 1.75em;
        }

        @media (max-width: 550px){
            font-size: 1.5em;
            padding: 0 2%;
        }
    }

    .swiper-slide p {
        font-size: 0.9em;
        font-family: 'Chocolate Classical Sans';
        font-weight: 600;
        word-spacing: 3px;
        margin-top: 8px;
        color: #ccc;
        line-height: 1.4;
        overflow: hidden;

        @media (max-width: 1250px){
            font-size: 0.8em;
            padding: 0 10%;
        }

        @media (max-width: 700px){
            font-size: 1em;
            padding: 0 2%;
        }

        @media (max-width: 550px){
            font-size: 0.8em;
        }
    }

    .swiper-pagination, .swiper-button-next, .swiper-button-prev {
        display: none;
    }
`;
import styled from "styled-components";

export const Conteiner = styled.div`
    background-color: black;
    padding: 3% 0;
    
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.red}; /* Cor de debug, considere mudar */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
    border-top: 6px solid ${({ theme }) => theme.colors.amarelo};
    border-bottom: 6px solid ${({ theme }) => theme.colors.amarelo};
`;

export const Title = styled.h2`
    font-size: 102px;
font-family: Cookie;
color: ${({ theme }) => theme.colors.amarelo};
text-shadow: 1px 1px 4px black;
   
    /* Exemplo: */
    /* font-size: 5rem; */
    /* @media (max-width: 768px) { font-size: 3rem; } */
`;

export const SubTitle = styled.h3`
    font-size: 76px;
    letter-spacing: 1px;
    text-shadow: 1px 3px 4px rgba(255,0,0,1);
    font-style: italic;
    font-family: Style Script;
    color: ${({ theme }) => theme.colors.amarelo};
    padding: 5% 0;
    
    /* Exemplo: */
    /* font-size: 5rem; */
    /* @media (max-width: 768px) { font-size: 3rem; } */
`;

export const Paragrafo = styled.p`
    font-size: 30px; /* Considere usar rem/em para responsividade */
    font-family: Lobster;
    letter-spacing: 1px;
    padding-bottom: 1%;
    color: aliceblue;
`;

export const Conteiner2 = styled.div`
    background-color: black; /* Cor de debug, considere mudar */
    display: grid;
    /* Usar 1fr distribui o espaço disponível igualmente após os gaps */
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* Ajuste o gap conforme necessário, em pixels ou rem/em */

    /* Altura total do contêiner, use com cautela ou com box-sizing: border-box; */
    /* height: 100vh; */ /* Removi o height: 100vh aqui, pois pode causar scroll indesejado com padding */
    padding: 1%; /* Certifique-se de que box-sizing: border-box; esteja ativado globalmente */

    align-items: start; /* Alinha os itens ao topo das células do grid */
    justify-content: center; /* Centraliza os itens horizontalmente se houver espaço */

    @media (max-width: 1024px) { /* Exemplo de breakpoint para tablets */
        grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas menores */
    }

    @media (max-width: 768px) { /* Exemplo de breakpoint para celulares */
        grid-template-columns: 1fr; /* Uma coluna em telas muito pequenas */
    }
`;

export const Wrapper2 = styled.div`
    background-color: black; /* Cor de debug, considere mudar */
    padding: 20px; /* Padding interno para o conteúdo de cada item */
   
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o título e o carrossel */
    justify-content: flex-start; /* Alinha o conteúdo ao topo */
    text-align: center;
`;

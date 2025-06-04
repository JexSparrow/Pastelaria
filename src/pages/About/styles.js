import styled from "styled-components";

export const Conteiner = styled.div`
background: gray;
width: 100vw;
display: flex;
justify-content: center;
padding: 2% 0;

`;

export const Wrapper = styled.div`

background-color: blue;
   
    display: grid;
  grid-template-columns: 2fr 4fr; /* Define duas colunas com proporção 2:3 */
  text-align: center;
  width: 100%;
  gap: 50px;
    
    
`;

export const Title = styled.h2`
font-size: 60px;

`;

export const Paragrafo = styled.p`
font-size: 30px;
color: aliceblue;
`;


import styled from "styled-components";

export const Conteiner = styled.div`
background-color: green;
padding: 1%;
`;

export const Wrapper = styled.div`
background-color: greenyellow;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Title = styled.h2`
font-size: 80px;
`;

export const Paragrafo = styled.p`
font-size: 30px;
`;

export const Conteiner2 = styled.div`
  background-color: red; /* Cor de fundo do contêiner */
  display: grid;
  // Para 3 colunas de 30% cada, usamos a unidade de porcentagem diretamente
  // ou repetimos a unidade 'fr' se quisermos que elas compartilhem o espaço restante igualmente.
  // Como você quer 30% fixo, o melhor é usar '30% 30% 30%'
  grid-template-columns: 30% 30% 30%; /* Três colunas, cada uma com 30% da largura */
  gap: 1%; /* Adicionado um pequeno espaçamento entre as colunas, opcional. Ajuste conforme necessário. */

  // Definindo a altura do contêiner para 100% da altura da viewport
  height: 100vh;
  // Opcional: Para centralizar o conteúdo verticalmente dentro do grid, se houver espaço
  align-items: center;
  justify-content: center; 

  // Se o padding fizer as colunas saírem do 100vh, pode ser melhor aplicar padding nos itens internos.
  // Ou usar box-sizing: border-box; no CSS global para incluir padding e border no cálculo da largura/altura.
  padding: 1%; /* Mantenha se desejar, mas lembre-se que isso pode afetar o 100vh se não tiver box-sizing: border-box; */
`;

export const Wrapper2 = styled.div`
  background-color: blue; /* Mudei para azul para diferenciar do contêiner */
  padding: 1%;
  border: 5px solid wheat;
  width: 100%; /* O item dentro da coluna sempre ocupará 100% da largura daquela coluna */
  height: 100%; /* O item dentro da coluna ocupará 100% da altura disponível da linha do grid */
`;

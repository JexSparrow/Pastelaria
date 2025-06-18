import styled from "styled-components";

export const Conteiner = styled.div`
background: black;
width: 100vw;
display: flex;
justify-content: center;
padding: 2%;

`;

export const Wrapper = styled.div`

background-color: ${({ theme }) => theme.colors.amarelo};
   
  display: grid;
  grid-template-columns: 2fr 4fr; /* Define duas colunas com proporção 2:3 */
  text-align: center;
  width: 100%;
  gap: 5px;
    
`;

export const Box1 = styled.div`
background-color: ${({ theme }) => theme.colors.red};
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`;

export const Title = styled.h2`

font-size: 4.5em;
color: #fff;
padding-top: 5%;
 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
font-family: Norican;

 @media  (max-width:1035px) {
    font-size: 4em;
    
  }

`;

export const Logo = styled.img`
width: 66%;

@media  (max-width:1035px) {
    width: 90%;
    
  }
`;

export const Box2 = styled.div`
background-color: black;
display: flex;
flex-direction: column;
padding: 0 5%;
gap: 20px;
`;

export const SubTitle = styled.h2`

font-size: 4em;

color: ${({ theme }) => theme.colors.amarelo};
padding: 0 10%;
 text-shadow: 1px 1px 1px rgba(255, 174, 0, 0.47); 
font-family: 'Birthstone';

letter-spacing: 2px;

  @media (max-width: 1250px){
    font-size: 3.5em;

  }

  @media  (max-width:900px) {
    font-size: 3.25em;
    
  }

`;



export const Paragrafo = styled.p`
font-size: 1.5em;
font-family: 'Chocolate Classical Sans';
font-weight: 600;
word-spacing: 3px;

text-align: left;
color: aliceblue;
letter-spacing: 2px;

  @media (max-width: 1250px){
    font-size: 1.25em;

  }

  @media (max-width: 900px){
    font-size: 1em;

  }


`;

import styled from "styled-components";


export const Conteiner = styled.div`
height: 100%;
display: flex;
position: relative;

justify-content: center;
border-top: 5px solid ${({ theme }) => theme.colors.amarelo};

padding: 2% 30%;
background-color: ${({ theme }) => theme.colors.red};

 @media  (max-width:550px) {
    padding: 5% 0;
    
  }


`;

export const Wrapper1 = styled.div`
background-color: ${({ theme }) => theme.colors.red};
display: flex;
padding-right: 5%;
height: 100%;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
border-right: 3px solid ${({ theme }) => theme.colors.amarelo};


`;

export const Logo = styled.img`
width: 240px;

@media  (max-width:800px) {
    width: 180px;
    
  }

  @media  (max-width:550px) {
    width: 120px;
    
  }

`;

export const Paragrafo = styled.p`
font-size: 1.5em;
font-family: lobster;
color: aliceblue;
text-align: center;

@media  (max-width:800px) {
    font-size: 1.25em;
    
  }

  @media  (max-width:550px) {
    font-size: 0.85em;
    
  }
`;

export const Wrapper2 = styled.div`
background-color: ${({ theme }) => theme.colors.red};
width: 100%;
display: flex;
padding-left: 5%;
flex-direction: column;
justify-content: space-evenly;
border-left: 3px solid ${({ theme }) => theme.colors.amarelo};

 @media  (max-width:550px) {
    justify-content: space-between;
    
  }
`;

export const Img = styled.img`

        
  width: 50px;
  cursor: pointer;
  transition: 300ms all ease;


&:hover {
  scale: 1.1;
}

&:active {
    scale: 0.9;

}

@media  (max-width:800px) {
    width: 40px;
    
  }

  @media  (max-width:550px) {
    width: 30px;
    
    
  }
    
`;





export const Arrow = styled.a`
position: absolute;
width: 50px;
left: 1%;
top: -12%;

transition: 300ms all ease-in-out;

&:hover {
  scale: 1.1;
 
}

@media  (max-width:800px) {
    width: 40px;
    
  }

   @media  (max-width:550px) {
    top: -18%;
    z-index: 999;
    
  }
`;

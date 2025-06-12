import styled from "styled-components";

export const Conteiner = styled.div`
height: 100%;
display: flex;
justify-content: center;
border-top: 5px solid ${({ theme }) => theme.colors.amarelo};

padding: 2% 30%;
background-color: ${({ theme }) => theme.colors.red};

`;

export const Wrapper1 = styled.div`
background-color: ${({ theme }) => theme.colors.red};
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Wrapper2 = styled.div`
background-color: ${({ theme }) => theme.colors.red};
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
> div {
    img {
        height: 50px;
    }
}
`;

export const Logo = styled.img`
width: 240px;

`;

export const Paragrafo = styled.p`
font-size: 24px;
font-family: lobster;
color: aliceblue;
text-align: center;
`;

import styled from "styled-components";

export const Conteiner = styled.div`
background-color: black;
width: 100vw;
`;

export const Header = styled.div`
display: flex;
justify-content: center;
height: 10vh;
background-color: red;

> div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    width: auto;
    padding: 0 10px;
    background-color:rgb(13, 149, 176);
    border-radius: 20px;
}

`;

export const Link = styled.a`
font-size: 30px;
color: aliceblue;

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5% 0;
`;

export const Title = styled.h1`
font-size: 99px;
color: red;
`;

export const Paragrafo = styled.p`
font-size: 30px;
color: aliceblue;
`;
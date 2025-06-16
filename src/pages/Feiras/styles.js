import styled from "styled-components";

export const Wrapper = styled.div`
height: 100%;
padding: 2%;
background-color: ${({ theme }) => theme.colors.red};
border-top: 6px solid ${({ theme }) => theme.colors.amarelo};
border-bottom: 6px solid ${({ theme }) => theme.colors.amarelo};
`;

export const Title = styled.h1`
text-align: center;
font-size: 122px;
font-family: Cookie;
color: ${({ theme }) => theme.colors.amarelo};
text-shadow: 1px 1px 4px black;
`;
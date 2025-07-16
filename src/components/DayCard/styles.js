import styled from "styled-components";
import { motion } from "framer-motion";

export const Conteiner = styled.div`
  background-color: #121212;
  padding: 1% 0 2%;
`;

export const Dias = styled.div`
  background-color: #121212;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 0 5%;
  background-color: #121212;
  height: 100%;
  align-items: center;
  

  ${({ layoutDirection }) =>
    layoutDirection === "reverse" &&
    `
        flex-direction: row-reverse;
    `}

  @media (max-width: 1250px){
    padding: 0 2%;
  }

  @media (max-width: 900px){
    gap: 2%;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 5em;
  font-family: Lobster;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme.colors.amarelo};
  text-shadow: 2px 2px 2px red;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  white-space: nowrap;
  padding: 1% 10% 2%;

   ${({ $isTuesday }) =>
    $isTuesday &&
    `
      &::before,
      &::after {
        display: none !important;
        content: none !important;
      }
  `}

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.amarelo};
    border-bottom: 1px solid red;
  }

  @media (max-width: 1250px) {
    font-size: 4.5em;
  }

  @media (max-width: 900px) {
    font-size: 4em;
  }

  @media (max-width: 550px) {
    font-size: 3em;
    padding: 5%;
    gap: 6%;
  }
`;


export const BoxTexto = styled.div`
  background-color: #121212;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin: 0 auto;
  gap: 12px;

    @media (max-width: 800px) {
    padding: 5%;
    width: 100%;
  }

  @media (max-width: 550px) {
    padding: 5%;
    width: 90%;
  }
`;

export const Endereco = styled(motion.h3)`
  font-size: 3em;
  font-family: Lobster;
  letter-spacing: 3px;
  color: #fff;
  text-align: center;
  

  @media (max-width: 1250px){
    font-size: 2.5em;
  }
  @media (max-width: 900px){
    font-size: 2em;
  }
  @media (max-width: 700px){
    font-size: 1.5em;
  }
  @media (max-width: 550px){
    font-size: 1.75em;
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.red};
  }
`;

export const Descricao = styled(motion.p)` 
  font-size: 1.8em;
  font-family: Lobster;
  color: #fff;
  white-space: pre-line;
  text-align: center;

  @media (max-width: 1250px){
    font-size: 1.5em;
  }
  @media (max-width: 700px){
    font-size: 1.25em;
  }
`;

export const Horario = styled(motion.p)` 
  font-size: 2.5em;
  font-family: Lobster;
  color: rgb(203, 29, 13);
  margin: 0 auto; 
  text-align: center;
  

  @media (max-width: 1250px){
    font-size: 2em;
  }
  @media (max-width: 900px){
    font-size: 1.5em;
  }
  @media (max-width: 550px){
    font-size: 1.25em;
  }
`;

export const Link = styled(motion.a)`
  font-size: 2em;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.amarelo};
  text-decoration: none;
  transition: 300ms all ease-in-out;
  text-align: center;
  display: inline-block;
  

  &:hover {
    scale: 1.1;
  }
  @media (max-width: 900px) {
    font-size: 1.5em;
  }
`;

export const SwiperCustomStyles = styled.div`
  .swiper-slide {
    height: 100% !important; 
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.amarelo};
    font-size: 2.8em;
    font-weight: 900;
    text-shadow: 1px 1px 2px black;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.amarelo};
    opacity: 0.8;
    height: 15px;
    width: 15px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  }

  .swiper-pagination-bullets {
    bottom: 10px;
  }
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto; /* Isso já centraliza o SwiperWrapper horizontalmente dentro do seu pai */
  border-radius: 20px;
  overflow: hidden;
  background-color: #121212;

  @media (max-width: 1250px){
    max-width: 450px;
    margin: auto;
  }

  @media (max-width: 900px){
    max-width: 360px;
    margin: auto;
  }

  @media (max-width: 700px){
    max-width: 280px;
  }

  @media (max-width: 550px){
    max-width: 320px;
    padding: 0 3%;
  }
`;
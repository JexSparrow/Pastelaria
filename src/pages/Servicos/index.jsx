import { Carrosel, Conteiner, Conteiner2, Paragrafo, Title, Wrapper, Wrapper2 } from "./styles";

function Services() {
    return (
        <>
            <Conteiner>

                <Wrapper>
                    <Title>Cardápio</Title>
                    <Paragrafo>Deguste inúmeas opções em nosso cardápio! Aproveite e Confira!
                    </Paragrafo>
                </Wrapper>

                <Conteiner2>

                    <Wrapper2>
                        <Title>Pasteís</Title>
                        <Carrosel >imagens</Carrosel>

                    </Wrapper2>

                    <Wrapper2>
                        <Title>Lanches</Title>
                        <Carrosel >imagens</Carrosel>
                    </Wrapper2>

                    <Wrapper2>
                        <Title>Bebidas</Title>
                        <Carrosel >imagens</Carrosel>
                    </Wrapper2>

                </Conteiner2>










            </Conteiner>
        </>
    )
}

export default Services;
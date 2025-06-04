
import { Conteiner, Paragrafo, Title, Wrapper1, Wrapper2 } from "./styles"

function Footer() {
    return (
        <>
            <Conteiner>
                <Wrapper1>
                    <Title> Logo </Title>
                    <Paragrafo>Resumo Breve  </Paragrafo>
                </Wrapper1>

                <Wrapper2>
                    <Paragrafo>Telefone</Paragrafo>
                    <Paragrafo>email</Paragrafo>
                    <Paragrafo>Instagram e Zap</Paragrafo>
                </Wrapper2>
            </Conteiner>
        </>
    )
};

export default Footer
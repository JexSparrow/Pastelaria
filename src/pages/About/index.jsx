
import { Box1, Box2, Conteiner, Logo, Paragrafo, SubTitle, Title, Wrapper } from "./styles"
import logo2 from "../../assets/others/logo2.png"

function About() {

    return (
        <>
            <Conteiner>
                <Wrapper>
                    <Box1>
                        <Title id='About'>Nossa História</Title>
                        <Logo src={logo2} />

                    </Box1>

                    <Box2>






                        <SubTitle> Mais de 37 Anos de Tradição e Sabor que Conecta!</SubTitle>


                        <Paragrafo>    Na Pastelaria Kulik, cada pastel é uma mordida na história. Há mais de três décadas nossa família cultiva o legado iniciado pelo meu pai, transformando ingredientes frescos e muito carinho em pastéis que encantam gerações. </Paragrafo>

                        <Paragrafo>    Do clássico carne e queijo às inovações como palmito e o saboroso pastel de Banana com Açucar e Canela, cada receita é um tesouro guardado, incluindo o molho vinagrete especial que tornam sua visita única.</Paragrafo>

                        <Paragrafo>    Mais que uma banca na feira, somos um ponto de encontro! Aqui, o sabor se mistura a risadas e histórias, e cada cliente é recebido com um sorriso caloroso, transformando um simples lanche em uma memória especial. </Paragrafo>

                        <Paragrafo>    Venha celebrar a tradição e o amor pela comunidade com a gente!</Paragrafo>

                    </Box2>

                </Wrapper>

            </Conteiner >

        </>

    )
}

export default About;

import { Conteiner, Conteiner2, Paragrafo, SubTitle, Title, Wrapper, Wrapper2 } from "./styles";
import MenuCarousel from "../../components/MenuCarrosel";
import { menuItems } from "../../data/menuItems.js";

function Services() {
    return (
        <>
            <Conteiner>
                <Wrapper>
                    <Title
                        initial={{ opacity: 0, scale: 0, y: 20 }} // Começa invisível, sem escala e um pouco abaixo
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Anima para visível, escala original e posição original
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Duração e suavização
                        viewport={{ once: true, amount: 0.99 }}
                    >
                        ~ Cardápio ~
                    </Title>

                    <Paragrafo

                        initial={{ opacity: 0, scale: 2, y: 0 }}

                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}

                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Deguste inúmeras opções em nosso cardápio! Aproveite e Confira!
                    </Paragrafo>
                </Wrapper>

                <Conteiner2>
                    <Wrapper2>
                        <SubTitle className="pasteis">Pastéis</SubTitle>

                        <MenuCarousel items={menuItems.pastels} />
                    </Wrapper2>

                    <Wrapper2>
                        <SubTitle className="lanches">Lanches e Salgados</SubTitle>
                        {/* Carrossel de Lanches (com reverseScroll: true) */}
                        <MenuCarousel items={menuItems.snacks} reverseScroll={true} />
                    </Wrapper2>

                    <Wrapper2 className="bebidas">
                        <SubTitle>Bebidas</SubTitle>

                        <MenuCarousel items={menuItems.drinks} />
                    </Wrapper2>
                </Conteiner2>
            </Conteiner>
        </>
    );
}

export default Services;
import { Conteiner, Conteiner2, Paragrafo, SubTitle, Title, Wrapper, Wrapper2 } from "./styles";
import MenuCarousel from "../../components/MenuCarrosel"; // Importe o novo componente de carrossel
import { menuItems } from "../../data/menuItems.js"; // Importe os dados dos itens de menu

function Services() {
    return (
        <>
            <Conteiner>
                <Wrapper>
                    <Title>~ Cardápio ~</Title>
                    <Paragrafo>Deguste inúmeras opções em nosso cardápio! Aproveite e Confira!</Paragrafo>
                </Wrapper>

                <Conteiner2>
                    <Wrapper2>
                        <SubTitle>Pastéis</SubTitle>
                        {/* Carrossel de Pastéis (default: baixo para cima) */}
                        <MenuCarousel items={menuItems.pastels} />
                    </Wrapper2>

                    <Wrapper2>
                        <SubTitle>Lanches & Salgados</SubTitle>
                        {/* Carrossel de Lanches (com reverseScroll: true) */}
                        <MenuCarousel items={menuItems.snacks} reverseScroll={true} />
                    </Wrapper2>

                    <Wrapper2>
                        <SubTitle>Bebidas</SubTitle>
                        {/* Carrossel de Bebidas (default: baixo para cima) */}
                        <MenuCarousel items={menuItems.drinks} />
                    </Wrapper2>
                </Conteiner2>
            </Conteiner>
        </>
    );
}

export default Services;
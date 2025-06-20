import { Box1, Box2, Conteiner, Logo, Paragrafo, SubTitle, Title, Wrapper } from "./styles";
import logo2m from "../../assets/others/logo2m.png";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4, // Atraso entre a animação de cada item filho
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Cada item filho começa invisível e um pouco abaixo
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Cada item filho sobe e aparece
};

function About() {
    return (
        <Conteiner>
            <Wrapper>
                <Box1>

                    <Title id='About'
                        initial={{ opacity: 0, x: -100 }} // Começa invisível e 100px à esquerda
                        whileInView={{ opacity: 1, x: 0 }} // Anima para visível e na posição original
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} // Duração e suavização
                        viewport={{ once: true, amount: 0.5 }}
                    >Nossa História</Title>
                    <Logo src={logo2m}
                        initial={{ opacity: 0, y: 50 }} // Começa invisível e 50px abaixo
                        whileInView={{ opacity: 1, y: 0 }} // Anima para visível e na posição original
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // Pequeno atraso para animar depois do título
                        viewport={{ once: true, amount: 0.7 }}
                    />

                </Box1>

                <Box2>
                    <motion.div
                        // Mantém o display flex e gap para o layout dos itens
                        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants} // O pai gerencia o stagger dos filhos
                    >
                        {/* SubTitle agora é um motion.h2 e recebe as variantes diretamente */}
                        <SubTitle variants={itemVariants}>
                            Mais de 37 Anos de Tradição e Sabor que Conecta!
                        </SubTitle>

                        {/* Paragrafo agora é um motion.p e recebe as variantes diretamente */}
                        <Paragrafo variants={itemVariants}>
                            Na Pastelaria Kulik, cada pastel é uma mordida na história. Há mais de três décadas nossa família cultiva o legado iniciado pelo meu pai, transformando ingredientes frescos e muito carinho em pastéis que encantam gerações.
                        </Paragrafo>

                        <Paragrafo variants={itemVariants}>
                            Do clássico carne e queijo às inovações como palmito e o saboroso pastel de Banana com Açucar e Canela, cada receita é um tesouro guardado, incluindo o molho vinagrete especial que tornam sua visita única.
                        </Paragrafo>

                        <Paragrafo variants={itemVariants}>
                            Mais que uma banca na feira, somos um ponto de encontro! Aqui, o sabor se mistura a risadas e histórias, e cada cliente é recebido com um sorriso caloroso, transformando um simples lanche em uma memória especial.
                        </Paragrafo>

                        <Paragrafo variants={itemVariants}>
                            Venha celebrar a tradição e o amor pela comunidade com a gente!
                        </Paragrafo>
                    </motion.div>
                </Box2>
            </Wrapper>
        </Conteiner >
    );
}

export default About;
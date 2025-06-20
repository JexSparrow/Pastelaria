import { Box1, Box2, Conteiner, Logo, Paragrafo, SubTitle, Title, Wrapper } from "./styles";
import logo2 from "../../assets/others/logo2.png";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

function About() {
    return (
        <Conteiner>
            <Wrapper>
                <Box1>
                    <motion.div
                        style={{ position: "relative" }} // impede que a animação quebre o layout
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <Title id='About'>Nossa História</Title>
                        <Logo src={logo2} />
                    </motion.div>
                </Box1>

                <Box2>
                    <motion.div
                        style={{ position: "relative" }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.9 }}
                        variants={containerVariants}
                    >
                        <motion.h3 variants={itemVariants}>
                            <SubTitle>Mais de 37 Anos de Tradição e Sabor que Conecta!</SubTitle>
                        </motion.h3>

                        <motion.p variants={itemVariants}>
                            <Paragrafo>
                                Na Pastelaria Kulik, cada pastel é uma mordida na história...
                            </Paragrafo>
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            <Paragrafo>
                                Do clássico carne e queijo às inovações como...
                            </Paragrafo>
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            <Paragrafo>
                                Mais que uma banca na feira, somos um ponto de encontro!
                            </Paragrafo>
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            <Paragrafo>
                                Venha celebrar a tradição e o amor pela comunidade com a gente!
                            </Paragrafo>
                        </motion.p>
                    </motion.div>
                </Box2>
            </Wrapper>
        </Conteiner>
    );
}

export default About;

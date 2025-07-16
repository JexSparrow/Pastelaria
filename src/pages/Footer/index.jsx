import { Arrow, Conteiner, Img, Logo, Paragrafo, Wrapper1, Wrapper2 } from "./styles";
import logo2m from "../../assets/others/logo2m.png";
import insta from "../../assets/others/insta.png";
import whats from "../../assets/others/whats.png";
import arrow from '../../assets/others/arrow.svg';
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.div
            style={{ position: 'relative' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <Conteiner id='Contato'>

                {/* Anima logo e frase */}
                <Wrapper1>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Logo src={logo2m} />
                        <Paragrafo>Entregando sabor e momentos inesquecíveis desde 1988</Paragrafo>
                    </motion.div>
                </Wrapper1>

                {/* Anima contatos e ícones */}
                <Wrapper2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Paragrafo>Telefone: (41) 9642-8823</Paragrafo>
                        <Paragrafo>contato@pastelariakulik.com.br</Paragrafo>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", justifyContent: "space-evenly" }}
                    >
                        <motion.a
                            href="https://wa.me/4196428823"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Img src={whats} alt="WhatsApp" />
                        </motion.a>
                        <motion.a
                            href="https://instagram.com/pastelariakulik"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Img src={insta} alt="Instagram" />
                        </motion.a>
                    </motion.div>
                </Wrapper2>

                <Arrow
                    href="#Home"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <img src={arrow} alt="Voltar ao topo" />
                </Arrow>

            </Conteiner >
        </motion.div >
    );
}

export default Footer;

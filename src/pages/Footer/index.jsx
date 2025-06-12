
import { Conteiner, Logo, Paragrafo, Wrapper1, Wrapper2 } from "./styles"
import logo2m from "../../assets/others/logo2m.png";
import insta from "../../assets/others/insta.png";
import whats from "../../assets/others/whats.png";

function Footer() {
    return (
        <>
            <Conteiner>
                <Wrapper1>
                    <Logo src={logo2m} />
                    <Paragrafo>Entregando sabor e momentos inesquecíveis desde 1988</Paragrafo>
                </Wrapper1>

                <Wrapper2>
                    <Paragrafo>Telefone: (41) 99579-1310</Paragrafo>
                    <Paragrafo>contato@pastelariakulik.br</Paragrafo>

                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <img src={insta} />
                        <img src={whats} />
                    </div>

                </Wrapper2>
            </Conteiner>
        </>
    )
};

export default Footer
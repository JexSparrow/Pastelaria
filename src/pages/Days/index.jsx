import eu from "../../assets/eu.jpg";
import { Conteiner, Domingo, Paragrafo, Quinta, Sabado, Sexta, Terca, Title, Wrapper, WrapperQuinta } from "./styles";

function Days() {
    return (
        <>
            <Conteiner>
                <Terca>
                    <Title>Terça-Feira</Title>
                    <Wrapper>
                        <img src={eu} />
                        <Paragrafo>

                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.
                        </Paragrafo>
                    </Wrapper>

                </Terca>

                <Quinta>
                    <Title>Quinta-Feira</Title>
                    <WrapperQuinta>
                        <img src={eu} />
                        <Paragrafo>

                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.
                        </Paragrafo>
                    </WrapperQuinta>

                </Quinta>

                <Sexta>
                    <Title>Sexta-Feira</Title>
                    <Wrapper>
                        <img src={eu} />
                        <Paragrafo>

                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.
                        </Paragrafo>
                    </Wrapper>

                </Sexta>

                <Sabado>
                    <Title>Sábado</Title>
                    <WrapperQuinta>
                        <img src={eu} />
                        <Paragrafo>

                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.
                        </Paragrafo>
                    </WrapperQuinta>

                </Sabado>

                <Domingo>
                    <Title>Domingo</Title>
                    <Wrapper>
                        <img src={eu} />
                        <Paragrafo>

                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Asperiores praesentium, porro saepe facilis autem id iusto incidunt aut,
                            architecto consequuntur animi pariatur.
                            Eveniet nisi earum error unde possimus ea enim.
                        </Paragrafo>
                    </Wrapper>

                </Domingo>

            </Conteiner>

        </>
    )
}

export default Days;
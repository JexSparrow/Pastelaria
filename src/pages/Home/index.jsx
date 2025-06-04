import { Conteiner, Header, Link, Paragrafo, Title, Wrapper } from "./styles"

function Home() {
  return (
    <>
      <Conteiner>
        <Header>
          <div>
            <Link>Home</Link>
            <Link>Sobre Nós</Link>
            <Link>Atedimento</Link>
            <Link>Contato</Link>
          </div>

        </Header>

        <Wrapper>
          <Title>Pastelaria Kulik</Title>
          <Paragrafo>Vem para a Feira!</Paragrafo>
        </Wrapper>

      </Conteiner>

    </>

  )
}

export default Home;

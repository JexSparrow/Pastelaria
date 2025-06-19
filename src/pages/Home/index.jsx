import { useState, useEffect } from 'react';
import { Conteiner, BackgroundOverlay, Header, Link, Logo, Paragrafo, Title, Wrapper, HamburgerWrapper, MenuButton, MobileMenu } from "./styles";
import logo from "../../assets/others/logo.png";

function Home() {
  // Estado para controlar qual imagem está sendo exibida (true = primeira imagem, false = segunda)
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    // Configura um intervalo para alternar a imagem a cada 5 segundos (5000ms)
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev); // Alterna o valor de true para false e vice-versa
    }, 3000); // 3 segundos

    // Limpa o intervalo quando o componente é desmontado para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, []); // O array vazio garante que o useEffect rode apenas uma vez (no montagem do componente)

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <Conteiner>
        {/* Passa a prop $showFirstImage para o styled component */}
        {/* O '$' é uma convenção do styled-components para props transitórias,
            que não são passadas para o elemento DOM subjacente. */}
        <BackgroundOverlay $showFirstImage={showFirstImage} />

        <Logo src={logo} />
        <Header>
          <div>
            <Link id='Home'>Home</Link>
            <Link href='#About'>Sobre Nós</Link>
            <Link href='#Feiras'>Atedimento</Link>
            <Link href='#Contato'>Contato</Link>
          </div>
        </Header>

        <Wrapper>
          <Title>Pastelaria Kulik</Title>
          <Paragrafo>Vem para a Feira!</Paragrafo>
        </Wrapper>

        <HamburgerWrapper>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </MenuButton>
          <MobileMenu className={isOpen ? 'open' : ''}>
            <a href="#Home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#About" onClick={() => setIsOpen(false)}>Sobre Nós</a>
            <a href="#Feiras" onClick={() => setIsOpen(false)}>Atendimento</a>
            <a href="#Contato" onClick={() => setIsOpen(false)}>Contato</a>
          </MobileMenu>
        </HamburgerWrapper>

      </Conteiner >
    </>
  );
}

export default Home;
import { useState, useEffect } from 'react';
import { Conteiner, BackgroundOverlay, Header, Link, Logo, Paragrafo, Title, Wrapper, HamburgerWrapper, MenuButton, MobileMenu } from "./styles";
import logo from "../../assets/others/logo.png";


function Home() {
  // Estado para controlar qual imagem está sendo exibida (true = primeira imagem, false = segunda)
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    // Configura um intervalo para alternar a imagem a cada 3seg
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev); // Alterna o valor de true para false e vice-versa
    }, 3000);

    // Limpa o intervalo quando o componente é desmontado para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, []);

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <Conteiner>
        <BackgroundOverlay $showFirstImage={showFirstImage} />
        <Logo
          src={logo}
          initial={{ opacity: 0, y: -50 }} // Animação inicial
          whileInView={{ opacity: 1, y: 0 }}   // Animação final
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }} // Duração e transição
        />

        <Header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.99 }}
        >

          <div>
            <Link id='Home'>Home</Link>
            <Link href='#About'>Sobre Nós</Link>
            <Link href='#Feiras'>Atendimento</Link>
            <Link href='#Contato'>Contato</Link>
          </div>
        </Header>

        <Wrapper>




          <Title
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.99 }}
          >
            Pastelaria Kulik

          </Title>





          <Paragrafo
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true, amount: 0.99 }}
          >
            Vem para a Feira!

          </Paragrafo>

        </Wrapper>

        <HamburgerWrapper>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </MenuButton>

          <MobileMenu $isOpen={isOpen}>
            <Link href="#About" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
            <Link href="#Feiras" onClick={() => setIsOpen(false)}>Atendimento</Link>
            <Link href="#Contato" onClick={() => setIsOpen(false)}>Contato</Link>
          </MobileMenu>

        </HamburgerWrapper>
      </Conteiner >

    </>
  );
}

export default Home;
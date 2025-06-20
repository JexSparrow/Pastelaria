import { useState, useEffect } from 'react';
import { Conteiner, BackgroundOverlay, Header, Link, Logo, Paragrafo, Title, Wrapper, HamburgerWrapper, MenuButton, MobileMenu } from "./styles";
import logo from "../../assets/others/logo.png";
import { motion, AnimatePresence } from 'framer-motion';


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
        <BackgroundOverlay $showFirstImage={showFirstImage} />
        <Logo src={logo} />

        <Header>
          <div>
            <Link id='Home'>Home</Link>
            <Link href='#About'>Sobre Nós</Link>
            <Link href='#Feiras'>Atendimento</Link>
            <Link href='#Contato'>Contato</Link>
          </div>
        </Header>

        <Wrapper>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Title>Pastelaria Kulik</Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Paragrafo>Vem para a Feira!</Paragrafo>
          </motion.div>
        </Wrapper>

        <HamburgerWrapper>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </MenuButton>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <MobileMenu className="open">
                  <a href="#Home" onClick={() => setIsOpen(false)}>Home</a>
                  <a href="#About" onClick={() => setIsOpen(false)}>Sobre Nós</a>
                  <a href="#Feiras" onClick={() => setIsOpen(false)}>Atendimento</a>
                  <a href="#Contato" onClick={() => setIsOpen(false)}>Contato</a>
                </MobileMenu>
              </motion.div>
            )}
          </AnimatePresence>
        </HamburgerWrapper>
      </Conteiner>

    </>
  );
}

export default Home;
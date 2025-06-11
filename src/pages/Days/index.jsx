import { BoxTexto, Conteiner, Descricao, Dias, Endereco, Horario, Link, SwiperCustomStyles, Title, Wrapper } from "./styles";

// Importe os módulos essenciais do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'; // Módulos para navegação, paginação, autoplay, etc.

// Importe os estilos do Swiper
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation buttons styles
import 'swiper/css/pagination'; // Pagination dots styles
import 'swiper/css/autoplay'; // Only if you use autoplay module
import 'swiper/css/effect-fade'; // Only if you use EffectFade module (for a fade transition)


import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

function Days() {
    // Array com as URLs das imagens do carrossel
    const images = [
        img1,
        img2,
        img3,
    ];

    return (
        <>
            <Conteiner>
                <Dias>
                    <Title>Sábado</Title>
                    <Wrapper>
                        {/* Contêiner para o Swiper - você pode estilizar este Wrapper ou adicionar uma div própria */}
                        <div style={{
                            padding: '2%',
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            margin: '0 auto',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>

                            <SwiperCustomStyles>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay, EffectFade]} // Módulos que você quer usar
                                    spaceBetween={0} // Espaço entre os slides
                                    slidesPerView={1} // Mostrar 1 slide por vez
                                    navigation={true} // Habilita botões de navegação (setas)
                                    pagination={{ clickable: true }} // Habilita pontos de paginação clicáveis
                                    autoplay={{
                                        delay: 5000, // Tempo de espera (5 segundos)
                                        disableOnInteraction: false, // Não para o autoplay ao interagir
                                    }}
                                    effect="fade" // Efeito de transição (fade, slide, cube, coverflow, flip, creative, cards)
                                    fadeEffect={{
                                        crossFade: true // Para que a imagem de saída esmaeça junto com a entrada
                                    }}
                                    loop={true} // Faz o carrossel ser infinito
                                    style={{ width: '100%', height: '100%' }} // Garante que o Swiper preencha o contêiner
                                >
                                    {images.map((imageSrc, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={imageSrc}
                                                alt={`Imagem ${index + 1}`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover', // Preenche o espaço sem distorcer
                                                    display: 'block' // Evita espaços indesejados
                                                }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </SwiperCustomStyles>
                        </div>

                        <BoxTexto>
                            <Endereco>Rua Alberto Bolinger, 244</Endereco>
                            <Horario>Das 7:30 até 13:00 </Horario>
                            <Descricao>Feira localizada próxima ao Estádio Couto Pereira. Perfeita para você e sua família!</Descricao>
                            <Link>Ver no Mapa</Link>

                        </BoxTexto>


                    </Wrapper>
                </Dias>
            </Conteiner>
        </>
    );
}

export default Days;
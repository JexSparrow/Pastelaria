import { BoxTexto, Conteiner, Descricao, Dias, Endereco, Horario, Link, SwiperCustomStyles, SwiperWrapper, Title, Wrapper } from "./styles";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


function DayCard({
    title,
    address,
    openingHours,
    description,
    mapLink,
    images,
    layoutDirection = 'default',
}) {
    return (
        <>
            <Conteiner>
                <Dias>
                    <Title layoutDirection={layoutDirection}>{title}</Title> {/* Título dinâmico */}
                    <Wrapper layoutDirection={layoutDirection}>
                        <SwiperWrapper> {/* Usando o componente styled */}
                            <SwiperCustomStyles>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    effect="fade"
                                    fadeEffect={{
                                        crossFade: true
                                    }}
                                    loop={true}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    {images.map((imageSrc, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={imageSrc}
                                                alt={`${title} Imagem ${index + 1}`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </SwiperCustomStyles>
                        </SwiperWrapper>

                        <BoxTexto>
                            <Endereco>{address}</Endereco> {/* Endereço dinâmico */}
                            <Horario>{openingHours}</Horario> {/* Horário dinâmico */}
                            <Descricao>{description}</Descricao> {/* Descrição dinâmica */}
                            <Link href={mapLink} target="_blank" rel="noopener noreferrer">Ver no Mapa</Link> {/* Link dinâmico com segurança */}
                        </BoxTexto>
                    </Wrapper>
                </Dias>
            </Conteiner>
        </>
    );
}

export default DayCard;
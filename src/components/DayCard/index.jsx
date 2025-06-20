import {
    BoxTexto,
    Conteiner,
    Descricao,
    Dias,
    Endereco,
    Horario,
    Link,
    SwiperCustomStyles,
    SwiperWrapper,
    Title,
    Wrapper
} from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { motion } from "framer-motion";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

function DayCard({
    title,
    address,
    openingHours,
    description,
    mapLink,
    images,
    layoutDirection = "default",
}) {
    return (
        <Conteiner>
            <Dias>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Title layoutDirection={layoutDirection}>{title}</Title>
                </motion.div>

                <Wrapper layoutDirection={layoutDirection}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <SwiperWrapper>
                            <SwiperCustomStyles>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    loop={true}
                                    style={{ width: "100%", height: "100%" }}
                                >
                                    {images.map((imageSrc, index) => (
                                        <SwiperSlide key={index}>
                                            <div style={{ width: "100%", height: "100%" }}>
                                                <img
                                                    src={imageSrc}
                                                    alt={`${title} Imagem ${index + 1}`}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        objectPosition: "center",
                                                        display: "block",
                                                        border: "4px solid #CB1D0D",
                                                        borderRadius: "5px",
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </SwiperCustomStyles>
                        </SwiperWrapper>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, justifyContent: 'center' }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <BoxTexto>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                transition={{ staggerChildren: 0.2 }}
                                variants={{
                                    hidden: {},
                                    visible: {},
                                }}
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, justifyContent: 'center' },
                                    }}
                                >
                                    <Endereco>{address}</Endereco>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <Horario>{openingHours}</Horario>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <Descricao>{description}</Descricao>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <Link
                                        href={mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver no Mapa
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </BoxTexto>
                    </motion.div>
                </Wrapper>
            </Dias>
        </Conteiner>
    );
}


export default DayCard;

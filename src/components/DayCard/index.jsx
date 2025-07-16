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
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade
} from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// Variantes para animação dos itens internos do BoxTexto
const boxTextItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

function DayCard({
    title,
    address,
    openingHours,
    description,
    mapLink,
    images,
    layoutDirection = "default"
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
                    {/* Para estilizar apenas Terça */}
                    <Title $isTuesday={title === "Terça-feira"}>{title}</Title>
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
                                    modules={[
                                        Navigation,
                                        Pagination,
                                        Autoplay,
                                        EffectFade
                                    ]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false
                                    }}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    loop
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
                                                        display: "block"
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
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <BoxTexto
                            initial="hidden"
                            whileInView="visible"
                            transition={{ staggerChildren: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Endereco variants={boxTextItemVariants}>{address}</Endereco>
                            <Horario variants={boxTextItemVariants}>{openingHours}</Horario>
                            <Descricao variants={boxTextItemVariants}>{description}</Descricao>
                            <Link
                                variants={boxTextItemVariants}
                                href={mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver no Mapa
                            </Link>
                        </BoxTexto>
                    </motion.div>
                </Wrapper>
            </Dias>
        </Conteiner>
    );
}

export default DayCard;

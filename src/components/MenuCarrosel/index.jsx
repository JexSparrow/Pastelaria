import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'; // Usaremos EffectCoverflow para um visual interessante
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow'; // Estilos para EffectCoverflow
import 'swiper/css/pagination';



function MenuCarousel({ items }) {
    return (
        <CustomSwiperContainer>
            <Swiper
                modules={[Autoplay, EffectCoverflow, Pagination]}
                direction="vertical" // FUNDAMENTAL: Define a direção vertical
                slidesPerView={3} // Mostrar 3 slides visíveis por vez
                spaceBetween={10} // Espaço entre os slides
                centeredSlides={true} // Centraliza o slide ativo
                autoplay={{
                    delay: 2500, // Tempo de espera entre os slides
                    disableOnInteraction: false, // Não para o autoplay ao interagir
                }}
                loop={true} // Loop infinito
                effect="coverflow" // Efeito 3D para os slides
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }} // Paginação clicável
                style={{ height: '100%', width: '100%' }}
            >
                {items.map(item => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CustomSwiperContainer>
    );
}

export default MenuCarousel;
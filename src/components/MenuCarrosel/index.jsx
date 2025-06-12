import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules'; // Importe FreeMode
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode'; // Estilos para FreeMode
import { CustomSwiperContainer } from './styles';


function MenuCarousel({ items, reverseScroll = false }) {
    return (
        <CustomSwiperContainer>
            <Swiper
                modules={[Autoplay, FreeMode]}
                direction="vertical"
                slidesPerView="auto"
                spaceBetween={10}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: reverseScroll,
                }}
                speed={3000}
                loop={true}
                freeMode={true}
                grabCursor={true}
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